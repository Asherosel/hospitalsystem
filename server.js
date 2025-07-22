/**************************************************************************
 * server.js – Express + json‑server + multer
 *  • GET   /admin/appList
 *  • GET   /admin/hospitalInfo/:id    (tam bilgiler + tam URL’ler)
 *  • PATCH /admin/hospitalInfo/data/:id
 *  • PATCH /admin/hospitalInfo/location/:id
 *  • PUT   /admin/hospitalInfo/images/:id   (image upload)
 *  • DELETE /admin/hospitalInfo/images/:id  (image delete)
 **************************************************************************/

const path       = require('path');
const fs         = require('fs');
const express    = require('express');
const jsonServer = require('json-server');
const multer     = require('multer');

const PORT   = 3000;
const app    = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middle = jsonServer.defaults();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middle);                       // logger, cors, vb.

/* uploads klasörü */
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: uploadDir,
  filename:   (_, file, cb) =>
              cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.use('/uploads', express.static(uploadDir));   // görselleri servis et

/* ------------------------------------------------------- */
/* GET /admin/appList                                      */
/* ------------------------------------------------------- */
app.get('/admin/appList', (_, res) => {
  const data = router.db.get('appList').value();
  if (data) {
    res.json({ success: true, message: 'Uygulama listesi', data });
  } else {
    res.status(404).json({ success: false, message: 'appList bulunamadı' });
  }
});

/* ------------------------------------------------------- */
/* GET /admin/hospitalInfo/:id                             */
/* ------------------------------------------------------- */
app.get('/admin/hospitalInfo/:id', (req, res) => {
  const id   = Number(req.params.id);
  const row  = router.db.get('hospitalInfo').find({ id }).value();

  if (!row) {
    return res.status(404).json({ success:false, message:'Hastane bulunamadı' });
  }

  // kopya + tam URL dönüşümü
  const full = { ...row };
  if (Array.isArray(full.images)) {
    full.images = full.images.map(p =>
      p.startsWith('http') ? p : `http://localhost:${PORT}${p}`);
  }
  if (full.hospitallist?.image_url &&
      !full.hospitallist.image_url.startsWith('http')) {
    full.hospitallist.image_url =
      `http://localhost:${PORT}${full.hospitallist.image_url}`;
  }

  res.json({ success: true, data: [full] });
});

/* ------------------------------------------------------- */
/* PATCH data & location                                   */
/* ------------------------------------------------------- */
['data', 'location'].forEach(field =>
  app.patch(`/admin/hospitalInfo/${field}/:id`, (req, res) => {
    const id = Number(req.params.id);
    const db = router.db.get('hospitalInfo');
    const rec = db.find({ id }).value();
    if (!rec) return res.status(404).json({ success:false, message:'Kayıt yok' });

    db.find({ id }).assign(req.body).write();
    res.json({ success:true, message:`${field} güncellendi` });
  })
);

/* ------------------------------------------------------- */
/* PUT  /admin/hospitalInfo/images/:id   (upload)          */
/* ------------------------------------------------------- */
app.put('/admin/hospitalInfo/images/:id', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success:false,
      message:"Form‑data'da 'image' anahtarını dosya olarak ekleyin."
    });
  }
  const id  = Number(req.params.id);
  const db  = router.db.get('hospitalInfo');
  const rec = db.find({ id }).value();
  if (!rec) return res.status(404).json({ success:false, message:'Kayıt yok' });

  const rel  = `/uploads/${req.file.filename}`;
  const imgs = [ ...(rec.images || []), rel ];
  db.find({ id }).assign({ images: imgs }).write();

  res.json({
    success : true,
    message : 'Hastane resimleri başarıyla güncellendi',
    data    : imgs.map(p => `http://localhost:${PORT}${p}`)
  });
});

/* ------------------------------------------------------- */
/* DELETE  /admin/hospitalInfo/images/:id                  */
/* ------------------------------------------------------- */
app.delete('/admin/hospitalInfo/images/:id', (req, res) => {
  const id     = Number(req.params.id);
  const url    = req.body.imageUrl;
  if (!url) return res.status(400).json({ success:false, message:'imageUrl gerek' });

  const rel    = url.replace(`http://localhost:${PORT}`, '');
  const db     = router.db.get('hospitalInfo');
  const rec    = db.find({ id }).value();
  if (!rec) return res.status(404).json({ success:false, message:'Kayıt yok' });

  const newArr = (rec.images || []).filter(p => p !== rel);
  if (newArr.length === (rec.images || []).length) {
    return res.status(404).json({ success:false, message:'Resim bulunamadı' });
  }
  db.find({ id }).assign({ images: newArr }).write();
  res.json({
    success : true,
    message : 'Resim silindi',
    data    : newArr.map(p => `http://localhost:${PORT}${p}`)
  });
});

/* ------------------------------------------------------- */
/* json‑server router  (diğer standart CRUD’lar)           */
/* ------------------------------------------------------- */
app.use(router);

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`🌐  http://localhost:${PORT}`));
