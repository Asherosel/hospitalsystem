import React from 'react'
import logo from "../assets/logo.png"
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/uiSlice/uiSlice';
import { InputCard } from './card';
import { useGetHospitalsQuery } from '../services/hospitalApi';
import { setSelectedHospital } from '../store/hospitalSlice/hospitalSlice';

const Navbar = ({ onToggleSidebar }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const selectedHospital = useSelector(state => state.hospital.selectedHospital);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(setSelectedHospital(selectedValue));
  };

  const { data, error, isLoading } = useGetHospitalsQuery();
  const appList = data?.data || [];
  console.log(appList)
  if (isLoading) return <p className="text-center py-4">Yükleniyor...</p>;
  if (error) return <p className="text-center py-4 text-red-600">Veri alınırken hata oluştu.</p>;



  return (
    <div className="flex items-center justify-between px-4 md:px-0">

      <button
        onClick={handleToggle}
        className="md:hidden text-gray-700 text-2xl"
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>


      <div className="flex-1 flex justify-center md:justify-start">
        <img className="h-14" src={logo} alt="Logo" />
      </div>


      {appList.length > 0 && (
        <div className="w-1/2 md:block hidden">
          <InputCard data={appList.map(({ appName }) => appName)}
            value={selectedHospital}
            onChange={handleChange} />
        </div>
      )}

      <div className="md:hidden w-8"></div>
    </div>
  )
}

export default Navbar
