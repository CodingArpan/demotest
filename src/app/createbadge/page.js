import Footer from '@/components/Common/Footer/Footer'
import Navbar from '@/components/Common/Navbar/Navbar'
import CreateBadge from '@/components/Createbadge/CreateBadge'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <CreateBadge/>
      <Footer />
    </>
  )
}

export default page