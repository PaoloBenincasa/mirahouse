import React from 'react';
import Map from '../components/map';
import { NavLink } from 'react-router';
import 'animate.css';
import { useInView } from 'react-intersection-observer';


function HomePage() {
    const [ref0, inView0] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const animatedClass0 = inView0 ? 'animate__animated animate__fadeInUp' : 'opacity-0';

    return (
        <div>
            <div className='hero d-flex justify-content-center align-items-end pb-0 text-center fs-1'>
                <div className='bg-transparent animate__animated animate__fadeInUp'>
                    <h1 className='txtWhite bg-transparent pb-0 mb-0 '>
                        MiRa House <br />
                        le bellezze di Puglia a portata di mano.
                    </h1>
                    <div className='text-center bg-transparent pb-3'>
                        <NavLink
                            to="/contatti" className='bg-transparent mt-0 pt-0'>
                            <button
                                className='btnCta fs-5'
                                type='button'>
                                Prenota
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <main className='d-flex align-items-center flex-column' >
                <h3 className='pt-5 pb-4 underGranata'>i nostri servizi</h3>
                <div className='container service'>
                    <div className='row justify-content-around text-center animate__animated animate__fadeInUp mb-3 mt-4'>
                        <div className='col-3'>
                            <h5>
                                comfort e stile
                            </h5>
                        </div>
                        <div className='col-3'>
                            <h5>
                                wi-fi gratuito
                            </h5>
                        </div>
                        <div className='col-3'>
                            <h5>
                                cucina completa
                            </h5>
                        </div>
                    </div>
                    <div className='row justify-content-around text-center animate__animated animate__fadeInUp mb-3 mt-3'>
                        <div className='col-3'>
                            <h5>
                                posizione centrale
                            </h5>
                        </div>
                        <div className='col-3'>
                            <h5>
                                servizio attento
                            </h5>
                        </div>
                        <div className='col-3'>
                            <h5>
                                bagno accessoriato
                            </h5>
                        </div>
                    </div>
                </div>

                <h3 className='pt-5 pb-5 underGranata'>dove siamo</h3>

                <div className={`container d-flex justify-content-center h-100 ${animatedClass0}`} ref={ref0}>
                    <div className='row'>
                        <div className='col-md-7 col-12'>
                            <Map />
                        </div>
                        <div className='col-md-5 col-12 position p-3'>
                            La struttura si trova all' ingresso del centro storico di Putignano (dal Latino Putignanum) e vicina ad una delle tre porte del paese, <br /> la Porta Barsento. <br /> <br />La sua posizione é ottimale perché vicina alla parte commerciale del paese: bar, tabacchi, ristoranti, pizzeria, farmacia, negozio di prodotti tipici a km 0 e tanto altro. <br /> <br /> Putignano, celebre per il suo antico Carnevale e situata strategicamente nel cuore della Puglia, è ideale per esplorare le vicine Grotte di Castellana e le coste di Polignano a Mare e Monopoli. Da qui si raggiungono facilmente Alberobello con i suoi trulli UNESCO, Ostuni la "città bianca", e Bari con la sua affascinante città vecchia e la Basilica di San Nicola.
                            <br /><br />
                            <strong>
                                indirizzo <br />
                            </strong>
                            via Porta Barsento, 66 <br />
                            70017 Putignano, Italia <br /> <br />
                            <strong>
                                orari <br />
                            </strong>
                            check-in: 15.30 - 18.00 <br />
                            check-out: entro le 10.30
                        </div>
                    </div>
                </div>
                <div className='text-center bg-transparent pt-5 pb-5'>
                    <NavLink
                        to="/contatti" className='bg-transparent mt-0 pt-0'>
                        <button
                            className='btnCtaInv fs-5'
                            type='button'>
                            Prenota
                        </button>
                    </NavLink>
                </div>
            </main >
        </div >
    );
}

export default HomePage;