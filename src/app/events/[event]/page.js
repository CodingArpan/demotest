import Footer from '@/components/Common/Footer/Footer'
import Aboutsection from '@/components/EventsPage/Aboutsection/Aboutsection'
import EventPageHeader from '@/components/EventsPage/EventPageHeader/EventPageHeader'
import Quotes from '@/components/EventsPage/Quotes/Quotes'
import Speakers from '@/components/EventsPage/Speakers/Speakers'
import Techtracks from '@/components/EventsPage/Techtracks/Techtracks'
import BecomeSponsor from '@/components/Homepage/BecomeSponsor/BecomeSponsor'
import Organizers from '@/components/Homepage/Organizers/Organizers'
import Sponsors from '@/components/Homepage/Sponsors/Sponsors'
import Sponsors_scroll from '@/components/Homepage/Sponsors_scroll/Sponsors_scroll'
import React from 'react'

function page({ params }) {
    // console.log(params);
    return (
        <>
            <EventPageHeader />
            <Aboutsection />
            <Techtracks />
            {/* <Sponsors /> */}
            <Sponsors_scroll />
            <Organizers title={"meet our team"} />
            <Quotes />
            <Speakers />
            <BecomeSponsor />
            <Footer />

        </>
    )
}

export default page