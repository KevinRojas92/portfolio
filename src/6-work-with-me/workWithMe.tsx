import { SectionButton } from '../0-main/sectionButton';
import './workWithMe.css';

export function WorkWithMe() {
    return (
        <section id='work' className='workWithMe-container'>
            <div>
                <h2 className='titles'>Let's talk</h2>

                <p className='tag-line'>Available for freelance projects and remote roles: UX/UI design, web design and development.</p>

                <div className='data-container'>
                    <p><a href='tel:+17373962731'>+1 (737) 396 2731</a></p>
                    <p><a href='mailto:kevinrojasdg@gmail.com'>kevinrojasdg@gmail.com</a></p>
                </div>
            </div>

            <SectionButton href='https://www.behance.net/kevinrojasux' target='_blank'>behance.net/kevinrojasux</SectionButton>
        </section>
    );
}