import React from 'react';
import AppForm from '../components/form/AddAppForm';

const AddAppPage = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form verisi:', formData);
    alert('Uygulama kaydedildi!');
    // Burada API çağrısı veya başka işlemler yapılabilir
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500 mb-2">Uygulama Ekle</h1>
      <hr className="border-b border-gray-300 mb-6" />
      
      <AppForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddAppPage;
