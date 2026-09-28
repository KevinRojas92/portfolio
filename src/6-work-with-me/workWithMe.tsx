import { SectionButton } from '../0-main/sectionButton';
import './workWithMe.css';

export function WorkWithMe() {
    return (
        <section id='work' className='workWithMe-container'>
            <div>
                <h2 className='titles'>Let's talk</h2>

                <div className='data-container'>
                    <p>+1 (737) 396 2731</p>
                    <p>kevinrojasdg@gmail.com</p>
                </div>
            </div>

            <SectionButton href='https://www.behance.net/kevinrojasux' target='_blank'>behance.net/kevinrojasux</SectionButton>
        </section>
    );
}