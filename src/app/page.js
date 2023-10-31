import Image from 'next/image'
import styles from './page.module.css'
import Sponsors_scroll from '@/components/Homepage/Sponsors_scroll/Sponsors_scroll'
import Organizers from '@/components/Homepage/Organizers/Organizers'
import Whatwedo from '@/components/Homepage/Whatwedo/Whatwedo'
import PreviousEvents from '@/components/Homepage/PreviousEvents/PreviousEvents'
import Testimonials from '@/components/Homepage/Testimonials/Testimonials'
import ConnectWithus from '@/components/Homepage/ConnectWitus/ConnectWithus'
import BecomeSponsor from '@/components/Homepage/BecomeSponsor/BecomeSponsor'
import HireDevlopers from '@/components/Homepage/HireDevlopers/HireDevlopers'
import Footer from '@/components/Common/Footer/Footer'
import Homepageheader from '@/components/Homepage/HomepageHeader/Homepageheader'
import Navbar from '@/components/Common/Navbar/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Homepageheader />
      {/* <Sponsors /> */}
      <Sponsors_scroll />
      <Organizers />
      <Whatwedo />
      <PreviousEvents />
      <Testimonials />
      <ConnectWithus />
      <BecomeSponsor />
      <HireDevlopers />
      <Footer />
    </div>
  )
}
