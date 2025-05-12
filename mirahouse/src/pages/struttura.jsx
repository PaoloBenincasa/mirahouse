import React from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';


function StrutturaPage() {
    const [ref1, inView1] = useInView({
        triggerOnce: true, 
        threshold: 0.5,   
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true, 
        threshold: 0.5,   
    });

     const [ref3, inView3] = useInView({
        triggerOnce: true, 
        threshold: 0.5,   
    });

    const animatedClass1 = inView1 ? 'animate__animated animate__fadeInUp' : '';
    const animatedClass2 = inView2 ? 'animate__animated animate__fadeInUp' : '';
    const animatedClass3 = inView3 ? 'animate__animated animate__fadeInUp' : '';

    return (
        <div>
            <div className='heroStruttura mb-5'>

            </div>
            <div className='container'>
                <div>
                    <h1 className='text-center underGranata pb-5 fs-3'>
                        la nostra struttura
                    </h1>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref1}>
                    <div className='col-6 '>
                        <div className='str1'>

                        </div>

                    </div>
                    <div className={`col-6 ${animatedClass1}`}>
                        <h4>
                            Ospitata in un edificio ottocentesco restaurato, la struttura spicca per le sue originali volte a stella e la suddivisione degli spazi su più piani, ricchi di storia. <br /><br /> L'arredamento è sobrio e arricchito da tocchi di originalità.
                        </h4>
                    </div>
                </div>
                <div className='row h-100 mb-5 align-items-center' ref={ref2}>
                    <div className={`col-6 ${animatedClass2}`}>
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
                    <div className='col-6'>
                        <div className='str2'>

                        </div>

                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref3}>
                    <div className='col-6'>
                        <div className='str3'>

                        </div>

                    </div>
                    <div className={`col-6 ${animatedClass3}`}>
                        <h4>
                            La nostra cucina è completamente attrezzata con seau à glace, calici, frigo, bollitore, frullatore, spremiagrumi, microonde, lavatrice, asse e ferro da stiro, TV Alexa Wifi e una postazione di ricarica multi usb/c. <br /><br /> Troverete tutto il necessario per preparare comodamente i vostri pranzi o la colazione.
                        </h4>
                    </div>
                </div>
                <div className='text-center underGranata'><h3>vedi tutte le immagini</h3></div>
            </div>
        </div>
    );
}

export default StrutturaPage;