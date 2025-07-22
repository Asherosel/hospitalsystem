
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HospitalInfo from '../pages/HospitalInfo';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFound from '../pages/NotFound';
import AuthLayout from '../layouts/AuthLayout';
import PageLayout from '../layouts/PageLayout';
import SliderImagePage from '../pages/SliderImagePage';
import HospitalLocationPage from '../pages/HospitalLocationPage';
import ContactInfoPage from '../pages/ContactInfoPage';
import UrlnfoPage from '../pages/UrlnfoPage';
import DoctorDetailPage from '../pages/DoctorDetailPage';
import DoctorTitlePage from '../pages/DoctorTitlePage';
import ManualDoctorPage from '../pages/ManualDoctorPage';
import CheckupInfoPage from '../pages/CheckupInfoPage';
import InstitutionsPage from '../pages/InstitutionsPage';
import DepartmentDetailsPage from '../pages/DepartmentDetailsPage';
import DiscountPage from '../pages/DiscountPage';
import MessagesPage from '../pages/MessagesPage';
import AnnouncementsPage from '../pages/AnnouncementsPage';
import NotificationsPage from '../pages/NotificationsPage';
import MobilUsersPage from '../pages/MobilUsersPage';
import BranchesPage from '../pages/BranchesPage';
import AppointmentAnalyticsPage from '../pages/AppointmentAnalyticsPage';
import UserAnalytics from '../pages/UserAnalytics';
import AddAdminUserPage from '../pages/AddAdminUserPage';
import AddAppPage from '../pages/AddAppPage';
import AddHospital from '../pages/AddHospital';




const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth İşlemleri */}
      {/* <Route element={<AuthLayout />}>
    <Route path="/" element={<Navigate to="/login" />} /> 
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Route> */}

      {/* Yönetim İşlemleri */}
      <Route element={<PageLayout />}>
        <Route path="/hospital-info" element={<HospitalInfo />} />
        <Route path="/slider-image" element={<SliderImagePage />} />
        <Route path="/hospital-location" element={<HospitalLocationPage />} />
        <Route path="/contact-info" element={<ContactInfoPage />} />
        <Route path="/url-info" element={<UrlnfoPage />} />

        {/* Doktor İşlemleri */}
        <Route path="/doctor-detail" element={<DoctorDetailPage />} />
        <Route path="/doctor-title" element={<DoctorTitlePage />} />
        <Route path="/manual-doctor" element={<ManualDoctorPage />} />

        {/* Hizmet İşlemleri */}
        <Route path="/checkup-info" element={<CheckupInfoPage />} />
        <Route path="/institutions" element={<InstitutionsPage />} />
        <Route path="/department-details" element={<DepartmentDetailsPage />} />
        <Route path="/discount" element={<DiscountPage />} />

        {/* İletişim İşlemleri */}
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />

        {/* Raporlama */}
        <Route path="/mobile-users" element={<MobilUsersPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/appointment-analytics" element={<AppointmentAnalyticsPage />} />
        <Route path="/user-analytics" element={<UserAnalytics />} />

        {/* Sistem Yönetimi */}
        <Route path="/add-admin-user" element={<AddAdminUserPage />} />
        <Route path="/add-app" element={<AddAppPage />} />
        <Route path="/add-hospital" element={<AddHospital />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
};

export default AppRoutes;
