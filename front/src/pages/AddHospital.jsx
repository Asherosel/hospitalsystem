import React from 'react';
import HospitalForm from '../components/form/AddHospitalForm';

const AddHospital = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form verisi:', formData);
    alert('Hastane kaydedildi!');
    // API çağrısı ya da başka işlem buraya
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500 mb-2">Hastane Ekle</h1>
      <hr className="border-b border-gray-300 mb-6" />

      <HospitalForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddHospital;
