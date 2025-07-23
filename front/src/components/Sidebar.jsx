import React from 'react';
import { Link } from 'react-router-dom'; // yönlendirme için gerekli
import { CiHospital1 } from "react-icons/ci";
import { IoClose, IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdOutlineTextSnippet, MdOutlineMessage, MdOutlineGroups } from "react-icons/md";
import { FaRegHeart, FaClinicMedical } from "react-icons/fa";
import { AiOutlineUserAdd, AiOutlineAppstoreAdd, AiOutlinePlusCircle } from "react-icons/ai";
import { BiMessageDetail, BiBell } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../store/uiSlice/uiSlice';
import { InputCard } from './card';
import { useGetHospitalsQuery } from '../services/hospitalApi';
import { setSelectedHospital } from '../store/hospitalSlice/hospitalSlice';
const Sidebar = () => {

    const dispatch = useDispatch();

  const { data: hospitals = [], error, isLoading } = useGetHospitalsQuery();

  const selectedHospital = useSelector(state => state.hospital.selectedHospital);

const handleChange = (e) => {
  const selectedValue = e.target.value;
  dispatch(setSelectedHospital(selectedValue));
};

 if (isLoading) return <p className="text-center py-4">Yükleniyor...</p>;
  if (error) return <p className="text-center py-4 text-red-600">Veri alınırken hata oluştu.</p>;


    const sidebarSections = [
        {
            title: "Yönetim İşlemleri",
            items: [
                { label: "Hastane Bilgi Düzenleme", url: "/hospital-info", icon: <CiHospital1 color='blue' /> },
                { label: "Slider Resim Düzenleme", url: "/slider-image", icon: <IoImageOutline color='green' /> },
                { label: "Hastane Konumu Düzenleme", url: "/hospital-location", icon: <IoLocationOutline color='red' /> },
                { label: "İletişim Bilgileri Düzenleme", url: "/contact-info", icon: <LuPhone color='blue' /> },
                { label: "Url Bilgileri Düzenleme", url: "/url-info", icon: <MdOutlineTextSnippet color='orange' /> },
            ],
        },
        {
            title: "Doktor İşlemleri",
            items: [
                { label: "Doktor Detay Düzenleme", url: "/doctor-detail", icon: <FaRegHeart color='red' /> },
                { label: "Doktor Detay Başlığı Düzenleme", url: "/doctor-title", icon: <IoIosInformationCircleOutline color="blue" /> },
                { label: "Manuel Doktor Bilgileri Düzenleme", url: "/manual-doctor", icon: <BsClipboardCheck color='purple' /> },
            ],
        },
        {
            title: "Hizmet İşlemleri",
            items: [
                { label: "Check-up Bilgileri Düzenleme", url: "/checkup-info", icon: <MdOutlineGroups color='teal' /> },
                { label: "Anlaşmalı Kurum Düzenleme", url: "/institutions", icon: <FaClinicMedical color='gray' /> },
                { label: "Bölüm Detayları Düzenleme", url: "/department-details", icon: <MdOutlineGroups color='indigo' /> },
                { label: "İndirim Tanımlama", url: "/discount", icon: <AiOutlinePlusCircle color='green' /> },
            ],
        },
        {
            title: "İletişim İşlemleri",
            items: [
                { label: "Mesaj Bilgileri Düzenleme", url: "/messages", icon: <BiMessageDetail color='purple' /> },
                { label: "Bildirim Gönderme", url: "/notifications", icon: <BiBell color='red' /> },
                { label: "Duyuru Bilgileri Düzenleme", url: "/announcements", icon: <MdOutlineTextSnippet color='blue' /> },
            ],
        },
        {
            title: "Raporlama",
            items: [
                { label: "Mobil Uygulama Kullanıcıları", url: "/mobile-users", icon: <RiUserSearchLine color='blue' /> },
                { label: "Branşlar ve Departmanlar", url: "/branches", icon: <MdOutlineGroups color='green' /> },
                { label: "Randevu Analizleri", url: "/appointment-analytics", icon: <TbReportAnalytics color='orange' /> },
                { label: "Kullanıcı Analizleri", url: "/user-analytics", icon: <RiUserSearchLine color='purple' /> },
            ],
        },
        {
            title: "Sistem Yönetimi",
            items: [
                { label: "Admin Paneline Kullanıcı Ekle", url: "/add-admin-user", icon: <AiOutlineUserAdd color='blue' /> },
                { label: "Uygulama Ekle", url: "/add-app", icon: <AiOutlineAppstoreAdd color='green' /> },
                { label: "Hastane Ekle", url: "/add-hospital", icon: <AiOutlinePlusCircle color='red' /> },
            ],
        },
    ];

    return (
        <div className='p-4 pb-10 relative'>
       {hospitals.length > 0 && (
        <div className="w-full md:block hidden">
          <InputCard data={hospitals.map(({ hospital_name }) => hospital_name)}
  value={selectedHospital}
  onChange={handleChange} />
        </div>
      )}
            <button
                onClick={() => dispatch(closeSidebar())}
                className="md:hidden absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl"
            >
                <IoClose />
            </button>

            <ul className="space-y-4  mt-10">
                {sidebarSections.map((section, i) => (
                    <div key={i}>
                        <h3 className="text-sm font-bold text-gray-700 mb-2">{section.title}</h3>
                        <ul className="space-y-1">
                            {section.items.map((item, j) => (
                                <li key={j}>
                                    <Link
                                        to={item.url}
                                        className="flex items-center gap-2 p-2 hover:shadow-md hover:bg-blue-100 active:bg-blue-200 rounded cursor-pointer transition"
                                    >
                                        <span className="text-blue-500 text-2xl mr-2">{item.icon}</span>
                                        <span className="text-sm lg:text-base font-semibold text-gray-800">{item.label}</span>
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
