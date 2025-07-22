import React from 'react'
import { InputCard, ImageCard, InfoCard, TextCard } from '../components/card';
// import hastane from "../assets/hastane.jpg"

import { useGetHospitalImageQuery, useGetHospitalDataQuery, useGetHospitalInfoQuery } from '../services/hospitalApi'

const HospitalInfo = () => {

    const { data, isLoading, error } = useGetHospitalImageQuery();
    const hospitalData = data;
    console.log(hospitalData, "hospitaldata")

    return (
        <div className=''>

            <div className='flex flex-col md:flex-row items-start gap-6 mt-6 mb-6'>
                <div className='w-full space-y-6'>

                    <ImageCard onEdit={() => alert("Resim düzenleme tıklandı")} title={"Hastane Ana Resmi"} img={images[0]}></ImageCard>
                    <InfoCard onEdit={() => alert("Düzenle'ye tıklandı")} data={useGetHospitalInfoQuery()} title={"Hastane Bilgileri"}></InfoCard>
                </div>

                <div className='w-full space-y-6'>

                    <TextCard title={"Hastane Konumu"} data={useGetHospitalDataQuery()}></TextCard>
                    <ImageCard
                        title="Hastane Resimleri"
                        img={data}
                    />
                </div>

            </div>





        </div>

    )
}

export default HospitalInfo
