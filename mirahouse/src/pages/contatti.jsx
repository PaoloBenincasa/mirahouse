import theImg from '/assets/the.jpg';
import fioriImg from '/assets/fiori.jpg';
import { useTranslation } from 'react-i18next';


function ContattiPage() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='heroContatti mb-5' style={{ backgroundImage: `url(${theImg})` }}>

            </div>
            <div className='container'>
                <h1 className='text-center underGranata pb-5 fs-3'>
                    {t('contact')}
                </h1>
                <div className='row h-100 mb-5 align-items-center'>
                    <div className='col-md-6 col-12'>
                        <h2 className='fs-1'>
                            {t('bookYourStay')}
                        </h2>
                        <h4>
                            {t('contactText')}
                        </h4>
                        <h4 className='underGranata'>
                            {t('phone')}
                        </h4>
                        <h5>
                            <a className='nav-link' href="tel:+393514641282">+39 351 464 1282</a>
                        </h5>
                        <h4 className='underGranata'>
                            {t('email')}
                        </h4>
                        <h5>
                            <a className='nav-link' href="mailto:mirahouse.barsento@gmail.com">mirahouse.barsento@gmail.com</a>
                        </h5>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='con0' style={{ backgroundImage: `url(${fioriImg})` }}>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ContattiPage;