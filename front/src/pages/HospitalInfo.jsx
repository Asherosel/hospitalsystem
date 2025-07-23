import React from 'react';
import { InputCard, ImageCard, InfoCard, TextCard } from '../components/card';
import { useGetHospitalsQuery, useGetHospitalDataQuery, useGetHospitalImageQuery } from '../services/hospitalApi';


const HospitalInfo = () => {
    const { data: singleHospitalData, error, isLoading } = useGetHospitalImageQuery(26);

    if (isLoading) return <p className="text-center py-4">Yükleniyor...</p>;
    if (error) return <p className="text-center py-4 text-red-600">Veri alınırken hata oluştu.</p>;

    console.log(singleHospitalData.data[0], "hospitaldata");
    const locationData = {
        "lat": singleHospitalData.data[0].lat,
        "lot": singleHospitalData.data[0].lot,
    };

    const hospitalCardData = {
        "Hospital Name": singleHospitalData.data[0].hospital_name,
        "Phone": singleHospitalData.data[0].phone,
        "Website": singleHospitalData.data[0].website,
        "Info": singleHospitalData.data[0].info,
    };

    const hospitalImages = singleHospitalData.data[0].images;
    const hospitalListImage = singleHospitalData.data[0].hospitallist.image_url;

    return (
        <div className=''>
            <div className='flex flex-col md:flex-row items-start gap-6 mt-6 mb-6'>
                <div className='w-full space-y-6'>
                    <ImageCard onEdit={() => alert("Resim düzenleme tıklandı")} title={"Hastane Ana Resmi"} img={hospitalListImage} />
                    <InfoCard onEdit={() => alert("Düzenle'ye tıklandı")} data={hospitalCardData} title={"Hastane Bilgileri"} />
                </div>

                <div className='w-full space-y-6'>
                    <TextCard title={"Hastane Konumu"} data={locationData} />
                    <ImageCard title="Hastane Resimleri" img={hospitalImages} />
                </div>
            </div>
        </div>
    );
};

export default HospitalInfo;
