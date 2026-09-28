import { SectionButton } from '../0-main/sectionButton';
import './portfolio.css';

export function Portfolio() {
    return (
        <section id='portfolio'>
            <div className='portfolio-container'>
                <ul>
                    <li>
                        <figure>
                            <a href='https://parcial-2-adm-rojas-kevin.vercel.app' target='_blank'>
                                <picture>
                                    <source media='(min-width: 1024px)' srcSet='/images/3-desktop/1-image-split-bills.png' />
                                    <source media='(min-width: 744px)' srcSet='/images/2-tablet/1-image-split-bills.png' />
                                    <img className='radius-right' src='/images/1-mobile/1-image-split-bills.png' alt="Mockup of the Split Bills app displayed on an iPhone, placed on a wooden table." />
                                </picture>
                            </a>

                            <figcaption className='padding-left'>
                                <h2 className='subtitles'>Split Bills</h2>
                                <p>App to split bills with your partner or friends.</p>
                                <span>Developed & Designed</span>
                            </figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <a href='https://streamcast.vercel.app' target='_blank'>
                                <picture>
                                    <source media='(min-width: 1024px)' srcSet='/images/3-desktop/3-image-stream-cast.png' />
                                    <source media='(min-width: 744px)' srcSet='/images/2-tablet/3-image-stream-cast.png' />
                                    <img className='radius-right' src='/images/1-mobile/3-image-stream-cast.png' alt="Mockup of the Stream Cast website displayed on an iPad, placed on a gray background." />
                                </picture>
                            </a>

                            <figcaption className='padding-left'>
                                <h2 className='subtitles'>Stream Cast</h2>
                                <p>Website to help you find your ideal movie.</p>
                                <span>Developed & Designed</span>
                            </figcaption>
                        </figure>
                    </li>
                </ul>

                <ul>
                    <li>
                        <figure>
                            <a href='https://hc2p.ar/' target='_blank'>
                                <picture>
                                    <source media='(min-width: 1024px)' srcSet='/images/3-desktop/2-image-hc2p.png' />
                                    <source media='(min-width: 744px)' srcSet='/images/2-tablet/2-image-hc2p.png' />
                                    <img className='radius-left' src='/images/1-mobile/2-image-hc2p.png' alt="Mockup of the HC2P website displayed on an iMac and an iPhone, over a grin metalic table." />
                                </picture>
                            </a>

                            <figcaption className='padding-right'>
                                <h2 className='subtitles'>HC2P</h2>
                                <p>Architecture studio website.</p>
                                <span>Developed</span>
                            </figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <a href='https://myweather-nu.vercel.app' target='_blank'>
                                <picture>
                                    <source media='(min-width: 1024px)' srcSet='/images/3-desktop/4-image-myweather.png' />
                                    <source media='(min-width: 744px)' srcSet='/images/2-tablet/4-image-myweather.png' />
                                    <img className='radius-left' src='/images/1-mobile/4-image-myweather.png' alt="Mockup of the MyWeather app displayed on an iPhone, placed in a pocket." />
                                </picture>
                            </a>

                            <figcaption className='padding-right'>
                                <h2 className='subtitles'>MyWather</h2>
                                <p>A fun way to check the weather.</p>
                                <span>Developed & Designed</span>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>

            <SectionButton className='titles' href='#skills'>Skills ↓</SectionButton>
        </section>
    );
}