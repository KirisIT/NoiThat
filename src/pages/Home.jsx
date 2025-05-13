import React from 'react'
import Hero from '../components/ui/Hero'
import Features from '../components/ui/Features'
import ProductSlider from '../components/ui/ProductSlider'
import Experience from '../components/ui/Experience'
import Materials from '../components/ui/Materials'
import Testimonials from '../components/ui/Testimonials'
import '../assets/styles/Home.css'

// Import hình ảnh
import chair1 from '../assets/images/ghế (1).png'
import chair2 from '../assets/images/ghế (2).png'
import chair3 from '../assets/images/ghế (3).png'
import chair4 from '../assets/images/ghế (4).png'
import client1 from '../assets/images/Ellipse 1131.png'
import client2 from '../assets/images/Ellipse 1132.png'
import client3 from '../assets/images/Ellipse 1133.png'
import expImage from '../assets/images/Rectangle 1446.png'
import material1 from '../assets/images/Rectangle 1447.png'
import material2 from '../assets/images/Rectangle 1452.png'
import material3 from '../assets/images/Rectangle 1450.png'
import interior1 from '../assets/images/unsplash_JaXs8Tk5Iww.png'
import interior2 from '../assets/images/unsplash__HqHX3LBN18.png'
import interior3 from '../assets/images/unsplash_h2_3dL9yLpU.png'

const Home = () => {
  // Dữ liệu mẫu cho sản phẩm
  const products = [
    {
      id: 1,
      name: 'Sidekick Armchair',
      category: 'Chair',
      price: 392,
      rating: 4.5,
      image: chair1
    },
    {
      id: 2,
      name: 'Bekhar Chair',
      category: 'Chair',
      price: 299,
      rating: 5,
      image: chair2
    },
    {
      id: 3,
      name: 'Anjay Chair',
      category: 'Chair',
      price: 519,
      rating: 4,
      image: chair3
    },

    {
      id: 4,
      name: 'Nyantuy Chair',
      category: 'Chair',
      price: 921,
      rating: 4.5,
      image: chair4
    },

    {
      id: 5,
      name: 'Nyantuy Chair',
      category: 'Chair',
      price: 921,
      rating: 4.5,
      image: chair4
    },

    {
      id: 6,
      name: 'Nyantuy Chair',
      category: 'Chair',
      price: 921,
      rating: 4.5,
      image: chair4
    },

    {
      id: 7,
      name: 'Nyantuy Chair',
      category: 'Chair',
      price: 921,
      rating: 4.5,
      image: chair4
    }
  ]

  // Dữ liệu mẫu cho các tính năng
  const features = [
    {
      title: 'Luxury Facilities',
      description:
        'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
      icon: ''
    },
    {
      title: 'Affordable Price',
      description:
        'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
      icon: ''
    },
    {
      title: 'Many Choices',
      description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
      icon: ''
    }
  ]

  // Dữ liệu mẫu cho khách hàng đánh giá
  const testimonials = [
    {
      id: 1,
      name: 'Bang Upin',
      title: 'Pedagang Asongan',
      comment: '"Terimalah banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"',
      image: client1,
      interiorImage: interior1,
      rating: 5
    },
    {
      id: 2,
      name: 'Ibuk Sukijan',
      title: 'Ibu Rumah Tangga',
      comment: '"Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah"',
      image: client2,
      interiorImage: interior2,
      rating: 5
    },
    {
      id: 3,
      name: 'Mpok Ina',
      title: 'Karyawan Swasta',
      comment: '"Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"',
      image: client3,
      interiorImage: interior3,
      rating: 4
    }
  ]

  const materialsImages = [material2, material3, material1]

  return (
    <div className='home-page'>
      <Hero />
      <Features features={features} />
      <ProductSlider products={products} title='Best Selling Product' categories={['Chair', 'Beds', 'Sofa', 'Lamp']} />
      <Experience image={expImage} />
      <Materials materials={materialsImages} />
      <Testimonials testimonials={testimonials} />
    </div>
  )
}

export default Home
