import React, { useState } from 'react';
import Input from '../input/Input';

const AppForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    appId: '',
    appName: '',
    androidVersion: '',
    iosVersion: '',
    androidBuildNo: '',
    iosBuildNo: '',
    playStoreUrl: '',
    appStoreUrl: '',
  });

  const handleChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // İstersen burada formu temizleyebilirsin
    setFormData({
      appId: '',
      appName: '',
      androidVersion: '',
      iosVersion: '',
      androidBuildNo: '',
      iosBuildNo: '',
      playStoreUrl: '',
      appStoreUrl: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
      <Input
        id="appId"
        label="App ID"
        value={formData.appId}
        onChange={handleChange}
        required
        placeholder="App ID girin"
      />

      <Input
        id="appName"
        label="Uygulama Adı"
        value={formData.appName}
        onChange={handleChange}
        required
        placeholder="Uygulama adı girin"
      />

      <Input
        id="androidVersion"
        label="Android Versiyonu"
        value={formData.androidVersion}
        onChange={handleChange}
        placeholder="Android versiyonu"
      />

      <Input
        id="iosVersion"
        label="iOS Versiyonu"
        value={formData.iosVersion}
        onChange={handleChange}
        placeholder="iOS versiyonu"
      />

      <Input
        id="androidBuildNo"
        label="Android Build No"
        value={formData.androidBuildNo}
        onChange={handleChange}
        placeholder="Android build numarası"
      />

      <Input
        id="iosBuildNo"
        label="iOS Build No"
        value={formData.iosBuildNo}
        onChange={handleChange}
        placeholder="iOS build numarası"
      />

      <Input
        id="playStoreUrl"
        label="Play Store URL"
        value={formData.playStoreUrl}
        onChange={handleChange}
        type="url"
        placeholder="Play Store linki"
      />

      <Input
        id="appStoreUrl"
        label="App Store URL"
        value={formData.appStoreUrl}
        onChange={handleChange}
        type="url"
        placeholder="App Store linki"
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

export default AppForm;
