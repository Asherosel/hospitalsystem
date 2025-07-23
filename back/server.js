/********************************************************************************
 * server.js – Express + json-server + multer (Nihai Sürüm)
 *
 * Postman koleksiyonu ile %100 uyumlu endpoint'ler.
 *
 * • GET    /admin/appList
 * • GET    /admin/hospitalList/:appId
 * • PUT    /admin/hospitalList/mainImage/:id
 * • GET    /admin/hospitalInfo/:id
 * • PATCH  /admin/hospitalInfo/data/:id
 * • PATCH  /admin/hospitalInfo/location/:id
 * • PUT    /admin/hospitalInfo/images/:id
 * • DELETE /admin/hospitalInfo/images/:id
 * • GET    /admin/appSlider/:appId
 * • POST   /admin/appSlider/:appId
 * • PUT    /admin/appSlider/:appId/:id
 * • DELETE /admin/appSlider/:appId/:id
 ********************************************************************************/

const path = require('path');
const fs = require('fs');
const express = require('express');
const jsonServer = require('json-server');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid'); // ID üretimi için

const PORT = 3000;
const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middle = jsonServer.defaults();

// Tam URL oluşturma yardımcı fonksiyonu
const toFullUrl = (p) => p.startsWith('http') ? p : `http://localhost:${PORT}${p}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middle); // logger, cors, vb.

/* uploads klasörü ve multer ayarları */
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (_, file, cb) =>
    cb(null, uuidv4() + path.extname(file.originalname)) // Benzersiz dosya adı
});
const upload = multer({ storage });

app.use('/uploads', express.static(uploadDir)); // görselleri servis et

/* ======================================================= */
/* Admin: AppList                                          */
/* ======================================================= */
app.get('/admin/appList', (_, res) => {
  const data = router.db.get('appList').value();
  if (data) {
    res.json({ success: true, message: 'Uygulama listesi başarıyla getirildi', data });
  } else {
    res.status(404).json({ success: false, message: 'appList bulunamadı' });
  }
});

/* ======================================================= */
/* Admin: HospitalInfo                                     */
/* ======================================================= */
app.get('/admin/hospitalInfo/:id', (req, res) => {
  const id = Number(req.params.id);
  const row = router.db.get('hospitalInfo').find({ hospitalListId: id }).value();

  if (!row) {
    return res.status(404).json({ success: false, message: 'Hastane bulunamadı' });
  }

  // URL'leri tam adrese çevir
  const full = { ...row };
  if (Array.isArray(full.images)) {
    full.images = full.images.map(toFullUrl);
  }
  if (full.hospitallist?.image_url) {
    full.hospitallist.image_url = toFullUrl(full.hospitallist.image_url);
  }

  res.json({ success: true, data: [full] });
});

['data', 'location'].forEach(field =>
  app.patch(`/admin/hospitalInfo/${field}/:id`, (req, res) => {
    const id = Number(req.params.id);
    const db = router.db.get('hospitalInfo');
    const record = db.find({ hospitalListId: id });
    if (!record.value()) return res.status(404).json({ success: false, message: 'Kayıt yok' });
    
    record.assign(req.body).write();
    res.json({ success: true, message: 'Kaydınız başarıyla güncellendi.' });
  })
);

app.put('/admin/hospitalInfo/images/:id', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: "Form-data'da 'image' anahtarını dosya olarak ekleyin." });
  
  const id = Number(req.params.id);
  const db = router.db.get('hospitalInfo');
  const record = db.find({ hospitalListId: id });
  const rec = record.value();
  if (!rec) return res.status(404).json({ success: false, message: 'Kayıt yok' });

  const relPath = `/uploads/${req.file.filename}`;
  const images = [...(rec.images || []), relPath];
  record.assign({ images }).write();

  res.json({
    success: true,
    message: 'Hastane resimleri başarıyla güncellendi',
    data: images.map(toFullUrl)
  });
});

app.delete('/admin/hospitalInfo/images/:id', (req, res) => {
  const id = Number(req.params.id);
  const { imageUrl } = req.body;
  if (!imageUrl) return res.status(400).json({ success: false, message: 'imageUrl gerekli' });

  const relPath = imageUrl.replace(`http://localhost:${PORT}`, '');
  const db = router.db.get('hospitalInfo');
  const record = db.find({ hospitalListId: id });
  const rec = record.value();
  if (!rec) return res.status(404).json({ success: false, message: 'Kayıt yok' });

  const newImages = (rec.images || []).filter(p => p !== relPath);
  if (newImages.length === (rec.images || []).length) return res.status(404).json({ success: false, message: 'Resim bulunamadı' });

  record.assign({ images: newImages }).write();
  fs.unlink(path.join(__dirname, relPath), (err) => {
      if(err) console.error("Dosya silinirken hata:", err);
  });

  res.json({
    success: true,
    message: 'Resim başarıyla silindi',
    data: { remainingImages: newImages.map(toFullUrl) }
  });
});

/* ======================================================= */
/* Admin: HospitalList                                     */
/* ======================================================= */
app.get('/admin/hospitalList/:appId', (req, res) => {
  const appId = Number(req.params.appId);
  const data = router.db.get('hospitalList').filter({ app_id: appId }).value();

  if (data && data.length > 0) {
    const fullData = data.map(item => ({...item, image_url: toFullUrl(item.image_url)}));
    res.json({ success: true, message: 'Hastane bilgileri başarıyla getirildi', data: fullData });
  } else {
    res.json({ success: true, message: 'Bu uygulamaya ait hastane bulunamadı', data: []});
  }
});

app.put('/admin/hospitalList/mainImage/:id', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ success:false, message:"'image' dosyası gerekli." });

    const id = Number(req.params.id);
    const db = router.db.get('hospitalList');
    const record = db.find({ id });
    const rec = record.value();
    if (!rec) return res.status(404).json({ success:false, message:'Kayıt yok' });

    // Eski resmi sil
    if (rec.image_url) {
      fs.unlink(path.join(__dirname, rec.image_url), (err) => {
          if (err) console.error("Eski ana resim silinirken hata: ", err);
      });
    }
    
    const newImageUrl = `/uploads/${req.file.filename}`;
    record.assign({ image_url: newImageUrl }).write();

    res.json({
        success: true,
        message: 'Ana resim başarıyla güncellendi',
        image_url: toFullUrl(newImageUrl)
    });
});

/* ======================================================= */
/* Admin: AppSlider                                        */
/* ======================================================= */
app.get('/admin/appSlider/:appId', (req, res) => {
  const appId = Number(req.params.appId);
  const sliders = router.db.get('appSlider').filter({ appId }).value();

  if (sliders) {
    const fullUrlSliders = sliders.map(s => ({...s, imageUrl: toFullUrl(s.imageUrl)})).sort((a, b) => a.orderNo - b.orderNo);
    res.json({ success: true, data: fullUrlSliders });
  } else {
    res.json({ success: true, data: [] });
  }
});

app.post('/admin/appSlider/:appId', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ success:false, message:"'image' dosyası gerekli." });
  
  const appId = Number(req.params.appId);
  const db = router.db.get('appSlider');
  const sliders = db.filter({ appId }).value();
  const maxOrder = sliders.reduce((max, s) => s.orderNo > max ? s.orderNo : max, -1);

  const newSlider = {
    id: uuidv4(),
    appId,
    imageUrl: `/uploads/${req.file.filename}`,
    detailUrl: req.body.detailUrl || `http://localhost:${PORT}`,
    orderNo: maxOrder + 1
  };

  db.push(newSlider).write();
  res.status(201).json({ success: true, message: 'Slider başarıyla yüklendi.', data: {...newSlider, imageUrl: toFullUrl(newSlider.imageUrl)} });
});

app.put('/admin/appSlider/:appId/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const db = router.db.get('appSlider');
    const record = db.find({ id });
    const rec = record.value();
    if (!rec) return res.status(404).json({ success: false, message: 'Slider bulunamadı' });

    const updatedData = {
        detailUrl: req.body.detailUrl || rec.detailUrl,
        orderNo: req.body.orderNo !== undefined ? Number(req.body.orderNo) : rec.orderNo,
    };

    if (req.file) {
        updatedData.imageUrl = `/uploads/${req.file.filename}`;
        if (rec.imageUrl) {
            fs.unlink(path.join(__dirname, rec.imageUrl), (err) => {
                if (err) console.error("Eski slider resmi silinirken hata:", err);
            });
        }
    }

    const result = record.assign(updatedData).write();
    res.json({ success: true, message: 'Slider başarıyla güncellendi.', data: {...result, imageUrl: toFullUrl(result.imageUrl)} });
});

app.delete('/admin/appSlider/:appId/:id', (req, res) => {
  const id = req.params.id;
  const db = router.db.get('appSlider');
  const record = db.find({ id });
  const rec = record.value();
  if (!rec) return res.status(404).json({ success: false, message: 'Slider bulunamadı' });

  if (rec.imageUrl) {
    fs.unlink(path.join(__dirname, rec.imageUrl), (err) => {
        if(err) console.error("Slider resmi silinirken hata:", err);
    });
  }
  
  db.remove({ id }).write();
  res.json({ success: true, message: 'Slider başarıyla silindi.', data: rec });
});

/* ======================================================= */
/* json-server router (diğer standart CRUD’lar)            */
/* ======================================================= */
app.use(router);

app.listen(PORT, () => console.log(`🌐 Sunucu çalışıyor: http://localhost:${PORT}`));