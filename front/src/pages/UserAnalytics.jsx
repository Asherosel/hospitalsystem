import React, { useState } from 'react'
import StatCard from '../components/card/StatCard'
import DateFilter from '../components/filter/DateFilter'
import PieCard from '../components/chart/PieChart'
import LineChart from '../components/chart/LineChart'


const UserAnalytics = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleFilter = () => {
    alert(`Filtrelenecek Tarih Aralığı: ${startDate} - ${endDate}`)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-600">Kullanıcı Analizleri</h1>
      <hr className="border-gray-300" />

      {/* StatCard: Daha önceki kart bileşeninle kullanılacak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard title="Toplam Kullanıcı" value="15,400" color="text-blue-600" />
        <StatCard title="İndirilen Cihaz" value="9,200" color="text-green-600" />
      </div>

      {/* Tarih Aralığı Filtresi */}
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        onStartChange={(e) => setStartDate(e.target.value)}
        onEndChange={(e) => setEndDate(e.target.value)}
        onFilter={handleFilter}
      />

      {/* Grafikler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart
          title="Zaman Bazlı Kayıt Sayısı"
          labels={['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs']}
          data={[120, 190, 300, 280, 350]}
          backgroundColor="rgba(37, 99, 235, 0.6)"
          datasetLabel="Kayıt Sayısı"
        />

        <PieCard
          title="Cinsiyet Dağılımı (%)"
          labels={['Erkek', 'Kadın', 'Diğer']}
          data={[48, 50, 2]}
          backgroundColors={[
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(201, 203, 207, 0.7)',
          ]}
        />

        <LineChart
          title="Yaş Gruplandırması"
          labels={['18-24', '25-34', '35-44', '45-54', '55+']}
          data={[3000, 4200, 2800, 1500, 900]}
          backgroundColor="rgba(255, 193, 60, 0.7)"
          datasetLabel="Kullanıcı Sayısı"
        />

        <PieCard
          title="Cihaz Tipine Göre Kullanıcı Dağılımı"
          labels={['Android', 'iOS', 'Diğer']}
          data={[6000, 4000, 1400]}
          backgroundColors={[
            'rgba(0, 195, 153, 0.7)',
            'rgba(255, 105, 122, 0.7)',
            'rgba(201, 203, 207, 0.7)',
          ]}
        />
      </div>
    </div>
  )
}

export default UserAnalytics
