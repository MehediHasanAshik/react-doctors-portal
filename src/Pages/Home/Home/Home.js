import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import HomePart from '../HomePart/HomePart';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Services/>
            <HomePart/>
            <AppointmentBanner/>
            <Testimonial/>
            <OurDoctors/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;