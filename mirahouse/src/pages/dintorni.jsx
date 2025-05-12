import React from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router';

function DintorniPage() {
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
            <div className='heroDintorni mb-5'>

            </div>
            <div className='container'>
                <div>
                    <h1 className='text-center underGranata pb-5 fs-3'>
                        cosa vedere
                    </h1>
                </div>
                <div className='row h-100 mb-5 align-items-center' ref={ref0}>
                    <div className={`col-md-6 col-12 ${animatedClass0}`}>
                        <h4>
                            <strong>Putignano</strong>, incantevole cittadina nel cuore della Puglia, è celebre per il suo antichissimo <strong>Carnevale</strong> , uno degli eventi più lunghi e suggestivi d'Italia. Durante questo periodo, le strade si animano di carri allegorici, maschere creative e festeggiamenti coinvolgenti, offrendo un'esperienza unica e indimenticabile. <br /> <br /> Oltre al Carnevale, Putignano vanta un affascinante centro storico, ricco di chiese, palazzi nobiliari e testimonianze della sua lunga storia.
                        </h4>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='din0'>

                        </div>

                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref1}>
                    <div className='col-md-6 col-12'>
                        <div className='din1'>

                        </div>

                    </div>
                    <div className={`col-md-6 col-12 ${animatedClass1} pt-1`}>
                        <h4>
                            <strong>Alberobello</strong>, con i suoi iconici <strong>trulli</strong>, abitazioni coniche uniche al mondo e patrimonio UNESCO, immerge il visitatore in un'atmosfera magica e fiabesca. <br /><br /> Le <strong>Grotte di Castellana</strong>, un complesso carsico di straordinaria bellezza, svelano un mondo sotterraneo fatto di stalattiti, stalagmiti, canyon e cavità dalle forme suggestive, offrendo un'esperienza speleologica indimenticabile.
                        </h4>
                    </div>
                </div>
                <div className='row h-100 mb-5 align-items-center' ref={ref2}>
                    <div className={`col-md-6 col-12 ${animatedClass2}`}>
                        <h4>
                            La costa adriatica pugliese incanta con la bellezza di Polignano a Mare e Monopoli. <strong>Polignano</strong>, arroccata su una scogliera a picco sul mare, regala panorami mozzafiato, calette nascoste e un centro storico pittoresco, animato da ristoranti e locali caratteristici. <br /><br /> <strong>Monopoli</strong>, con il suo affascinante porto antico, le spiagge dorate e le chiese barocche, offre un mix perfetto di storia, cultura e relax balneare.
                        </h4>

                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='din2'>

                        </div>

                    </div>
                </div>
                <div className='row mb-5 h-100 align-items-center' ref={ref3}>
                    <div className='col-md-6 col-12'>
                        <div className='din3'>

                        </div>

                    </div>
                    <div className={`col-md-6 col-12 ${animatedClass3} pt-1` }>
                        <h4>
                            <strong>Bari</strong>, capoluogo della Puglia, è una città vivace e ricca di storia. Il suo cuore pulsante è la Bari Vecchia, un dedalo di vicoli e piazzette che custodisce tesori come la Basilica di  <strong>San Nicola</strong>, meta di pellegrinaggi da tutto il mondo, e la Cattedrale di San Sabino. <br /><br /> Il <strong>lungomare</strong>, con i suoi palazzi eleganti e la vista sul mare, invita a passeggiate rilassanti, mentre il centro moderno offre negozi, musei e una vivace vita notturna.
                        </h4>
                    </div>
                </div>
                <div className='text-center bg-transparent pb-5'>
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

export default DintorniPage;