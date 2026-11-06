import { SectionButton } from '../0-main/sectionButton';
import './skills.css';

export function Skills() {
    return (
        <section id='skills'>
            <div className='skills-container'>
                <div className='skills-inner-container'>
                    <div>
                        <h2 className='subtitles'>Design</h2>

                        <p>Figma<span> / </span>Figma Make<span> / </span>AI prototyping<span> / </span>Illustrator<span> / </span>Photoshop<span> / </span>After Effects<span> / </span>InDesign<span> / </span>Adobe XD</p>
                    </div>

                    <div>
                        <h2 className='subtitles'>Development</h2>

                        <p>TypeScript<span> / </span>React<span> / </span>Vue<span> / </span>Git<span> / </span>Vite.js<span> / </span>Motion<span> / </span>HTML5<span> / </span>CSS<span> / </span>JavaScript<span> / </span>Material UI</p>
                    </div>
                </div>
            </div>

            <SectionButton className='titles' href='#about'>About me ↓</SectionButton>
        </section>
    );
}