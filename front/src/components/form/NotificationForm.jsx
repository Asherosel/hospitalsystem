import React, { useState } from 'react'
import Select from '../select/Select'
import Input from '../input/Input'


const NotificationForm = ({ onSend }) => {
  const [recipient, setRecipient] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSend = () => {
    if (!recipient || !title.trim() || !content.trim()) {
      alert('Lütfen tüm alanları doldurun.')
      return
    }
    onSend({ recipient, title, content })
    setRecipient('')
    setTitle('')
    setContent('')
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Yeni Bildirim Oluştur</h2>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Select
          id="recipient"
          label="Kime gönderilecek?"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
          options={[
            { value: '', label: 'Seçiniz' },
            { value: 'all', label: 'Tüm Kullanıcılara' },
            { value: 'doctors', label: 'Doktorlara' },
            { value: 'patients', label: 'Hastalara' },
          ]}
        />

        <Input
          id="title"
          label="Bildirim Başlığı"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Bildirim başlığı"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block mb-1 font-medium text-gray-700">
          Bildirim İçeriği
        </label>
        <textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Bildirim içeriği"
          className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        onClick={handleSend}
        className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded"
      >
        Gönder
      </button>
    </div>
  )
}

export default NotificationForm
