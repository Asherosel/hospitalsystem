//     import hastane1 from "../assets/hastane1.jpg"
//     import hastane2 from "../assets/hastane2.jpg"
//     import hastane3 from "../assets/hastane3.jpg"
//     import hastane4 from "../assets/hastane4.jpg"
//     import hastane5 from "../assets/hastane5.jpg"
//     import hastane6 from "../assets/hastane6.jpg"



// export const getHospitalInfo=()=>{
//         const infoData = {
//         'Hastane Adı': 'BANDIRMA ROYAL HASTANESİ',
//         'Telefon': '+90 (216) 912 17 00',
//         'Web Sitesi': 'https://www.royalhastanesi.com.tr/',
//         'Hastane Bilgisi': `İlk olarak 1987 yılında kurulan Bandırma Özel Hastanesi; uzun yıllar Bandırma ve çevresine hizmet vermiş, hasta ve yakınlarına özel olduklarını hissettirmek için, örnek bir hastane olma misyonunu hep korumuştur. Zamanın şartları göz önüne alındığında, verilen hizmet ve teknoloji hep bir adım önde olmuştur. Daha iyi bir hizmet, daha iyi bir teknoloji politikasını sürekli olarak güden Bandırma Özel Hastanesi bu kararlılık ve sorumlulukla, 1987 yılından bugüne Herkes İçin Sağlık mottosu ile bölgenin güvenilir ve en çok tercih edilen hastanesi olarak hizmet vermeye devam ediyor.`
//     }
//     return infoData
// }


// export const getHospitalData=()=>{
//         const data = {
//         Ülke: "Türkiye",
//         İl: "Balıkesir",
//         İlçe: "Bandırma",
//         Semt: "Çamlık",
//         Mahalle: "Paşakonak Mahallesi",
//         Cadde: "Sağlık Caddesi"
//     }
//     return data


// }


// export const getHospitalImage=()=>{
// return [hastane1,hastane2,hastane3,hastane4,hastane5,hastane6]
// }

// const API_BASE_URL = 'http://localhost:3000/admin/hospitalInfo'; // Şimdilik sabit bir ID (örneğin 1) varsayalım

// export const getHospitalInfo = async (hospitalId = 26) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}`);
//         if (!response.ok) {
//             throw new Error(`HTTP hatası! Durum: ${response.status}`);
//         }
//         const result = await response.json();
//         // API veriyi bir dizi olarak döndürdüğü için ilk elemanı alıyoruz
//         const hospitalData = result.data[0];

//         // API yanıtını istediğiniz bilgi formatına dönüştürüyoruz
//         const infoData = {
//             'Hastane Adı': hospitalData.hospitallist?.name || 'Yok',
//             'Telefon': hospitalData.hospitallist?.phone || 'Yok',
//             'Web Sitesi': hospitalData.hospitallist?.website || 'Yok',
//             'Hastane Bilgisi': hospitalData.hospitallist?.description || 'Yok'
//         };
//         console.log(hospitalData.hospitallist?.name);
//         return infoData;
//     } catch (error) {
//         console.error("Hastane bilgisi alınamadı:", error);
//         return {}; // Hata durumunda boş nesne döndür
//     }
// };

// export const getHospitalData = async (hospitalId = 26) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/${hospitalId}`);
//         if (!response.ok) {
//             throw new Error(`HTTP hatası! Durum: ${response.status}`);
//         }
//         const result = await response.json();
//         const hospitalData = result.data[0];

//         // API yanıtını istediğiniz konum verisi formatına dönüştürüyoruz
//         const data = {
//             Ülke: hospitalData.location?.country || 'Yok',
//             İl: hospitalData.location?.city || 'Yok',
//             İlçe: hospitalData.location?.district || 'Yok',
//             Semt: hospitalData.location?.sub_district || 'Yok',
//             Mahalle: hospitalData.location?.neighborhood || 'Yok',
//             Cadde: hospitalData.location?.street || 'Yok'
//         };
//         return data;
//     } catch (error) {
//         console.error("Hastane konum verisi alınamadı:", error);
//         return {}; // Hata durumunda boş nesne döndür
//     }
// };

