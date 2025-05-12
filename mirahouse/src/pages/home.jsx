import React from 'react';
import Map from '../components/map';
import { NavLink } from 'react-router';
import 'animate.css';

function HomePage() {
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
                <h3 className='pt-5 pb-5 underGranata'>dove siamo</h3>
                <div className='map-container d-flex justify-content-center h-100 animate__animated animate__fadeInUp'>
                    <Map />
                    <div className='w-50 position p-2'>
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

                <h3 className='pt-5 underGranata'>i nostri servizi</h3>
            </main >
        </div >
    );
}

export default HomePage;