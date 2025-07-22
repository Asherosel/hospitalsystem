import React, { useState } from 'react'
import StatCard from '../components/card/StatCard'
import DateFilter from '../components/filter/DateFilter'
import LineChart from '../components/chart/LineChart'

const AppointmentAnalyticsPage = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleFilter = () => {
    alert(`Filtrelenecek Tarih Aralığı: ${startDate} - ${endDate}`)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Randevu Analizleri</h1>
      <hr className="border-b border-gray-300" />

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Toplam Randevu" value="2560" color="text-blue-600" />
        <StatCard title="İptal Edilen Randevu" value="320" color="text-red-500" />
        <StatCard title="Aktif Randevu" value="2240" color="text-green-500" />
      </div>

      {/* Tarih Filtreleme */}
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        onStartChange={(e) => setStartDate(e.target.value)}
        onEndChange={(e) => setEndDate(e.target.value)}
        onFilter={handleFilter}
      />

      {/* Grafikler */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Zaman Bazlı Randevu Sayısı"
          labels={['Pzt', 'Sal', 'Çar', 'Per', 'Cum']}
          data={[200, 300, 250, 400, 380]}
          bgColor="rgba(37, 99, 235, 0.6)"
          label="Randevu Sayısı"
        />

        <LineChart
          title="En Fazla Randevu Alınan 5 Bölüm"
          labels={['Dahiliye', 'Cildiye', 'KBB', 'Ortopedi', 'Kardiyoloji']}
          data={[500, 450, 420, 400, 390]}
          bgColor="rgba(255, 193, 60, 0.6)"
          label="Bölüm Bazlı Randevular"
        />

        <LineChart
          title="En Fazla Randevu Alınan 5 Doktor"
          labels={['Dr. A', 'Dr. B', 'Dr. C', 'Dr. D', 'Dr. E']}
          data={[300, 280, 270, 250, 240]}
          bgColor="rgba(0, 195, 153, 0.6)"
          label="Doktor Bazlı Randevular"
        />
      </div>
    </div>
  )
}

export default AppointmentAnalyticsPage
