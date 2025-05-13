import React from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router';
import paesaggioImg from '/assets/paesaggio.jpg';
import carnevaleImg from '/assets/carnevale.jpg';
import polignanoImg from '/assets/polignano.jpg';
import alberobelloImg from '/assets/alberobello.jpg';
import bariImg from '/assets/bari.jpg';
import { useTranslation } from 'react-i18next';



function DintorniPage() {
    const { t } = useTranslation();

    const [ref0, inView0] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const animatedClass0 = inView0 ? 'animate__animated animate__fadeInUp' : 'opacity-0';
    const animatedClass1 = inView1 ? 'animate__animated animate__fadeInUp' : 'opacity-0';
    const animatedClass2 = inView2 ? 'animate__animated animate__fadeInUp' : 'opacity-0';
    const animatedClass3 = inView3 ? 'animate__animated animate__fadeInUp' : 'opacity-0';

    return (
        <div>
            <div className='heroDintorni mb-5' style={{ backgroundImage: `url(${paesaggioImg})` }}>

            </div>
            <div className='container'>
                <div>
                    <h1 className='text-center underGranata pb-5 fs-3'>
                        {t('whatToSeeTitle')}
                    </h1>
                </div>
                <div className='row h-100 mb-5 align-items-center' ref={ref0}>
                    <div className={`col-md-6 col-12 ${animatedClass0}`}>
                        <h4>
                            {t('putignanoDescription')}
                        </h4>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='din0' style={{ backgroundImage: `url(${carnevaleImg})` }}>

                        </div>

                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref1}>
                    <div className='col-md-6 col-12'>
                        <div className='din1' style={{ backgroundImage: `url(${polignanoImg})` }}>

                        </div>

                    </div>
                    <div className={`col-md-6 col-12 ${animatedClass1} pt-1`}>
                        <h4>
                            {t('alberobelloCastellanaDescription')}
                        </h4>
                    </div>
                </div>
                <div className='row h-100 mb-5 align-items-center' ref={ref2}>
                    <div className={`col-md-6 col-12 ${animatedClass2}`}>
                        <h4>
                            {t('polignanoMonopoliDescription')}
                        </h4>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='din2' style={{ backgroundImage: `url(${alberobelloImg})` }}>

                        </div>

                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref3}>
                    <div className='col-md-6 col-12'>
                        <div className='din3' style={{ backgroundImage: `url(${bariImg})` }}>

                        </div>

                    </div>
                    <div className={`col-md-6 col-12 ${animatedClass3} pt-1`}>
                        <h4>
                            {t('bariDescription')}
                        </h4>
                    </div>
                </div>
                <div className='text-center bg-transparent pb-5'>
                    <NavLink
                        to="/contatti" className='bg-transparent mt-0 pt-0'>
                        <button
                            className='btnCtaInv fs-5'
                            type='button'>
                            {t('book')}
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default DintorniPage;