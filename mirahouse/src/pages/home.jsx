import React from 'react';
import Map from '../components/map';
import { NavLink } from 'react-router';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import campanileImg from '/assets/campanile.jpg';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';



function HomePage() {
    const { t, i18n } = useTranslation();

     useEffect(() => {
    // Optional: Check if i18n is initialized and the current language
    console.log("i18n initialized:", i18n.isInitialized);
    console.log("Current language:", i18n.language);
  }, [i18n]);

    const [ref0, inView0] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const animatedClass0 = inView0 ? 'animate__animated animate__fadeInUp' : 'opacity-0';

    return (
        <div>
            <div className='hero d-flex justify-content-center align-items-end pb-0 text-center fs-1' style={{ backgroundImage: `url(${campanileImg})` }}>
                <div className='bg-transparent animate__animated animate__fadeInUp'>
                    <h1 className='title bg-transparent pb-0 mb-0 '>
                        MiRa House <br />
                        <div className='fs-4 title'>
                            {t('description')}
                        </div>
                    </h1>
                    <div className='text-center bg-transparent pb-3'>
                        <NavLink
                            to="/contatti" className='bg-transparent mt-0 pt-0'>
                            <button
                                className='btnCta fs-5'
                                type='button'>
                                {t('book')}
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <main className='d-flex align-items-center flex-column' >
                <h3 className='pt-5 pb-5 underGranata'>{t('servicesTitle')}</h3>
                <div className='container service'>
                    <div className='row justify-content-around text-center animate__animated animate__fadeInUp serviceRow1'>
                        <div className='col-md-3 col-12'>
                            <h5 className='serviceInfo'>
                                {t('comfortStyle')}
                            </h5>
                        </div>
                        <div className='col-md-3 col-12'>
                            <h5 className='serviceInfo'>
                                {t('freeWifi')}
                            </h5>
                        </div>
                        <div className='col-md-3 col-12'>
                            <h5 className='serviceInfo'>
                                {t('fullKitchen')}
                            </h5>
                        </div>
                    </div>
                    <div className='row justify-content-around text-center animate__animated animate__fadeInUp serviceRow2'>
                        <div className='col-md-3 col-12'>
                            <h5 className='serviceInfo'>
                                {t('centralLocation')}
                            </h5>
                        </div>
                        <div className='col-md-3 col-12'>
                            <h5 className='serviceInfo'>
                                {t('attentiveService')}
                            </h5>
                        </div>
                        <div className='col-md-3 col-12'>
                            <h5 className='serviceInfo'>
                                {t('equippedBathroom')}
                            </h5>
                        </div>
                    </div>
                </div>

                <h3 className='pt-5 pb-5 underGranata'>{t('whereWeAre')}</h3>

                <div className={`container d-flex justify-content-center h-100 ${animatedClass0}`} ref={ref0}>
                    <div className='row'>
                        <div className='col-md-7 col-12'>
                            <Map />
                        </div>
                        <div className='col-md-5 col-12 position p-3'>
                            {t('description1')} <br /> {t('description2')} <br /> <br /> {t('description3')}
                            <br /><br />
                            <strong>
                                {t('address')} <br />
                            </strong>
                            via Porta Barsento, 66 <br />
                            70017 Putignano, Italia <br /> <br />
                            <strong>
                                orari <br />
                            </strong>
                            {t('checkIn')} <br />
                            {t('checkOut')}
                        </div>
                    </div>
                </div>
                <div className='text-center bg-transparent pt-5 pb-5'>
                    <NavLink
                        to="/contatti" className='bg-transparent mt-0 pt-0'>
                        <button
                            className='btnCtaInv fs-5'
                            type='button'>
                            {t('book')}
                        </button>
                    </NavLink>
                </div>
            </main >
        </div >
    );
}

export default HomePage;