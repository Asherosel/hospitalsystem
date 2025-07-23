import React, { useState } from 'react'

import hastane2 from "../assets/hastane2.jpg"
import hastane3 from "../assets/hastane3.jpg"
import SliderImageList from '../components/list/SliderImageList'
import SliderImageAddForm from '../components/form/SliderImageAddForm'

const SliderImagePage = () => {
  const [sliderImages, setSliderImages] = useState([hastane2, hastane3])

  const handleAddImage = (newImageFile) => {
    const imageUrl = URL.createObjectURL(newImageFile)
    setSliderImages(prev => [...prev, imageUrl])
  }

  const handleDeleteImage = (index) => {
    setSliderImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Slider Ekle / Düzenle</h1>
      <hr className="border-b border-gray-300" />
      <SliderImageList
        sliderImages={sliderImages}
        onDeleteImage={handleDeleteImage}
      />
      <SliderImageAddForm onImageAdd={handleAddImage} />
    </div>
  )
}

export default SliderImagePage
