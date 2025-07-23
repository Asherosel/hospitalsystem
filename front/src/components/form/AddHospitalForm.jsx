import React, { useState } from 'react';
import Input from '../input/Input';

const HospitalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    appId: '',
    appointmentUrl: '',
    labUrl: '',
    apiUsername: '',
    apiPassword: '',
    serviceInfo: '',
    hospitalId: '',
    hospitalName: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      appId: '',
      appointmentUrl: '',
      labUrl: '',
      apiUsername: '',
      apiPassword: '',
      serviceInfo: '',
      hospitalId: '',
      hospitalName: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow"
    >
      <Input
        id="appId"
        label="App ID"
        value={formData.appId}
        onChange={handleChange}
        required
        placeholder="App ID girin"
      />

      <Input
        id="appointmentUrl"
        label="Randevu URL"
        value={formData.appointmentUrl}
        onChange={handleChange}
        type="url"
        placeholder="Randevu linki girin"
      />

      <Input
        id="labUrl"
        label="Laboratuvar URL"
        value={formData.labUrl}
        onChange={handleChange}
        type="url"
        placeholder="Laboratuvar linki girin"
      />

      <Input
        id="apiUsername"
        label="API Kullanıcı Adı"
        value={formData.apiUsername}
        onChange={handleChange}
        placeholder="API kullanıcı adı"
      />

      <Input
        id="apiPassword"
        label="API Şifre"
        value={formData.apiPassword}
        onChange={handleChange}
        type="password"
        placeholder="API şifre"
      />

      <Input
        id="serviceInfo"
        label="Servis Bilgisi"
        value={formData.serviceInfo}
        onChange={handleChange}
        placeholder="Servis bilgisi"
      />

      <Input
        id="hospitalId"
        label="Hastane ID"
        value={formData.hospitalId}
        onChange={handleChange}
        placeholder="Hastane ID"
      />

      <Input
        id="hospitalName"
        label="Hastane Adı"
        value={formData.hospitalName}
        onChange={handleChange}
        placeholder="Hastane adı girin"
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default HospitalForm;
