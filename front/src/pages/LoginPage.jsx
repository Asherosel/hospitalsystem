import React, { useState } from 'react';
import { useLoginMutation } from '../services/authApi'; // authApi dosyanın yolu doğru olsun
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice/authSlice';

const LoginPage = () => {
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login({ username, password }).unwrap();

      // Redux store'a kaydet
      dispatch(setCredentials({ user: result.user, token: result.token }));

      localStorage.setItem('token', result.token);
      navigate("/hospital-info")
    } catch (err) {
      console.error('Giriş hatası:', err);
    }
  };



  return (
    <div className="flex items-center justify-center px-4  ">
      <div className="p-8 rounded-xl w-full max-w-md space-y-6  ">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-700">
          Hastane Yönetim Paneli
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Kullanıcı adınızı girin"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Şifrenizi girin"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
          </button>

      

          {/* Hata mesajı */}
          {error && (
            <p className="text-red-600 text-sm mt-2">
              {error.data?.message || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
