import React from 'react';
import 'animate.css';
import { NavLink } from 'react-router';
import { useInView } from 'react-intersection-observer';
import homeImg from '/assets/home.jpg';
import colazioneImg from '/assets/colazione.jpg';
import lettoImg from '/assets/letto.jpg';
import cucinaImg from '/assets/cucina.jpg';
import caffeImg from '/assets/caffe.jpg';
import centrostoricoImg from '/assets/centrostorico.jpg';
import orologioImg from '/assets/orologio.jpg';
import scaleImg from '/assets/scale.jpg';
import tvImg from '/assets/tv.jpg';
import voltaImg from '/assets/volta.jpg';
import theImg from '/assets/the.jpg';
import fioreImg from '/assets/fiore.jpg';


function StrutturaPage() {
  

    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const animatedClass1 = inView1 ? 'animate__animated animate__fadeInUp' : 'opacity-0';
    const animatedClass2 = inView2 ? 'animate__animated animate__fadeInUp' : 'opacity-0';
    const animatedClass3 = inView3 ? 'animate__animated animate__fadeInUp' : 'opacity-0';



    return (
        <div>
            <div className='heroStruttura mb-5' style={{ backgroundImage: `url(${colazioneImg})` }}>

            </div>
            <div className='container'>
                <div>
                    <h1 className='text-center underGranata pb-5 fs-3'>
                        la nostra struttura
                    </h1>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref1}>
                    <div
                        className='col-md-6 col-12'>
                        <div className='str1' style={{ backgroundImage: `url(${homeImg})`}}>
                           
                        </div>

                    </div>
                    <div className={`col-md-6 col-12 ${animatedClass1} pt-1`}>
                        <h4>
                            Ospitata in un edificio ottocentesco restaurato, la struttura spicca per le sue originali volte a stella e la suddivisione degli spazi su più piani, ricchi di storia. <br /><br /> L'arredamento è sobrio e arricchito da tocchi di originalità.
                        </h4>
                    </div>
                </div>
                <div className='row h-100 mb-5 align-items-center' ref={ref2}>
                    <div className={`col-md-6 col-12 ${animatedClass2}`}>
                        <h4>
                            Godetevi il comfort di questa struttura disposta su due piani: una cucina super accessoriata al primo piano, e camera da letto con bagno e smart-TV al secondo. <br /> <br /> Il nostro bagno è dotato
                            di tutti i comfort:
                            asciugacapelli,
                            doccia shampoo,
                            specchio per il makeup,
                            spazzolini usa e getta,
                            cotton fioc,
                            cuffie per doccia,
                            lima unghie,
                            elastico per i capelli,
                            dischetti per la pulizia del viso,
                            cassa bluetooth,
                            stendibiancheria a muro.
                        </h4>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='str2' style={{ backgroundImage: `url(${lettoImg})`}}>

                        </div>

                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref3}>
                    <div className='col-md-6 col-12'>
                        <div className='str3' style={{ backgroundImage: `url(${cucinaImg})`}}>

                        </div>

                    </div>
                    <div className={`col-md-6 col-12 ${animatedClass3} pt-1`}>
                        <h4>
                            La nostra cucina è completamente attrezzata con seau à glace, calici, frigo, bollitore, frullatore, spremiagrumi, microonde, lavatrice, asse e ferro da stiro, TV Alexa Wifi e una postazione di ricarica multi usb/c. <br /><br /> Troverete tutto il necessario per preparare comodamente i vostri pranzi o la colazione.
                        </h4>
                    </div>
                </div>
                <div className='text-center bg-transparent pt-3 pb-2'>
                    <NavLink
                        to="/contatti" className='bg-transparent mt-0 pt-0'>
                        <button
                            className='btnCtaInv fs-5'
                            type='button'>
                            Prenota
                        </button>
                    </NavLink>
                </div>
                <div className='text-center underGranata pb-5 pt-5'><h3>vedi tutte le immagini</h3></div>
                <div className='row mb-5 h-100 align-items-center'>
                    <div className='col-md-6 col-12'>
                        <div className='str4'  style={{ backgroundImage: `url(${caffeImg})`}}>

                        </div>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='str5' style={{ backgroundImage: `url(${centrostoricoImg})`}}>

                        </div>
                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center'>
                    <div className='col-md-6 col-12'>
                        <div className='str6' style={{ backgroundImage: `url(${orologioImg})`}}>

                        </div>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='str7' style={{ backgroundImage: `url(${scaleImg})`}}>

                        </div>
                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center'>
                    <div className='col-md-4 col-12'>
                        <div className='str10'>

                        </div>

                    </div>
                    <div className='col-md-4 col-12'>
                        <div className='str11'>

                        </div>
                    </div>
                    <div className='col-md-4 col-12'>
                        <div className='str12'>

                        </div>
                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center'>
                    <div className='col-md-6 col-12'>
                        <div className='str8' style={{ backgroundImage: `url(${tvImg})`}}>

                        </div>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='str9' style={{ backgroundImage: `url(${voltaImg})`}}>

                        </div>
                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center'>
                    <div className='col-md-6 col-12'>
                        <div className='str14' style={{ backgroundImage: `url(${theImg})`}}>

                        </div>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='str13' style={{ backgroundImage: `url(${fioreImg})`}}>

                        </div>
                    </div>
                </div>
                <div className='text-center bg-transparent pt-2 pb-5'>
                    <NavLink
                        to="/contatti" className='bg-transparent mt-0 pt-0'>
                        <button
                            className='btnCtaInv fs-5'
                            type='button'>
                            Prenota
                        </button>
                    </NavLink>
                </div>
            </div>
           
        </div>
    );
}

export default StrutturaPage;