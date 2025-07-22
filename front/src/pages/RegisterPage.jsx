import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useRegisterMutation } from '../services/authApi';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
    ip: '',
    hospitalName: '',
    appName: '',
  });

  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData).unwrap();
      navigate('/login');
    } catch (err) {
      console.error("Kayıt hatası:", err);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-700">
          Hastane Yönetim Paneli - Kayıt Ol
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { name: 'username', label: 'Kullanıcı Adı', type: 'text' },
            { name: 'password', label: 'Şifre', type: 'password' },
            { name: 'phone', label: 'Telefon', type: 'text' },
            { name: 'ip', label: 'IP Adresi', type: 'text' },
            { name: 'hospitalName', label: 'Hastane Adı', type: 'text' },
            { name: 'appName', label: 'Uygulama Adı', type: 'text' },
          ].map(({ name, label, type }) => (
            <div key={name}>
              <label className="block text-sm text-gray-600 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`${label} girin`}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isLoading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              Kayıt başarısız: {error.data?.message || 'Bir hata oluştu'}
            </p>
          )}
        </form>

        <div className="text-sm text-center">
          Zaten bir hesabınız var mı?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Giriş yap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
