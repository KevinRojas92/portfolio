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

                    <p>I’m a UX/UI designer with 4+ years designing digital products, most recently fintech platforms and design systems. Working side by side with engineers led me to code, and now I build what I design. Before product, I spent 8+ years as an art director in advertising, with campaigns recognized at the Echo and Caples Awards.</p>
                </figcaption>
            </figure>

            <SectionButton className='titles' href='#work'>Work with me ↓</SectionButton>
        </section>
    );
}