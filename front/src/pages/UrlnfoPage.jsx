import React, { useState } from 'react'
import UrlList from '../components/list/UrlList'
import UrlAddForm from '../components/form/UrlAddForm'


const UrlnfoPage = () => {
  const [urls, setUrls] = useState([
    "https://www.example1.com",
    "https://www.example2.com",
  ])

  // Yeni URL ekleme
  const addUrl = (url) => {
    if (!url.trim()) return
    setUrls(prev => [...prev, url.trim()])
  }

  // URL silme
  const removeUrl = (index) => {
    setUrls(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="p-6 space-y-6 ">
      <h1 className="text-2xl font-semibold text-blue-500">URL Bilgileri Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      <UrlList urls={urls} onRemove={removeUrl} />

      <UrlAddForm onAdd={addUrl} />
    </div>
  )
}

export default UrlnfoPage
