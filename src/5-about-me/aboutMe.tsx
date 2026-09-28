import { SectionButton } from '../0-main/sectionButton';
import './aboutMe.css';

export function AboutMe() {
    return (
        <section id='about'>
            <figure className='aboutMe-container'>
                <picture>
                    <source media='(min-width: 1024px)' srcSet='/images/3-desktop/5-profile-picture.png' />
                    <source media='(min-width: 744px)' srcSet='/images/2-tablet/5-profile-picture.png' />
                    <img src="/images/1-mobile/5-profile-picture.png" alt="Portrait photo of Kevin Rojas on a white background, wearing a reddish-orange sweatshirt and a cap." />
                </picture>

                <figcaption>
                    <p className='intros'>Let me tell you a little <span className='accent'>about myself</span></p>

                    <p>I have 4 years of experience as a UX/UI Designer, and I'm now starting to venture into the world of development. I also have 8 years of experience as a Graphic Creative at major advertising agencies, with extensive knowledge in BTL, ATL, and Digital.</p>
                </figcaption>
            </figure>

            <SectionButton className='titles' href='#work'>Work with me ↓</SectionButton>
        </section>
    );
}