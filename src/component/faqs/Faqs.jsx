import './faqs.css'
import starIcon from '../../assets/images/icon-star.svg'

import { useRef, useState } from 'react'
import Accordion from '../accordion/Accordion';

function Faqs() {

    return <>
        <main className='faqs-main'>
            <div className="heading">
                <img src={starIcon} alt="star icon" />
                <h1>FAQs</h1>
            </div>
            <ul className='faqs-list'>
                <li>
                    <Accordion
                        question={'What is Frontend Mentor, and how will it help me?'}
                        answer={`Frontend Mentor offers realistic coding challenges to help developers improve their frontend 
                    coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                    all levels and ideal for portfolio building.`} />
                </li>
                <li><Accordion
                    question={`Is Frontend Mentor free?`}
                    answer={`Yes, Frontend Mentor offers both free and premium coding challenges, with the free
                            option providing access to a range of projects suitable for all skill levels.`} /></li>
                <li><Accordion
                    question={`Can I use Frontend Mentor projects in my portfolio?`}
                    answer={`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                        way to showcase your skills to potential employers!` } /></li>
                <li><Accordion
                    question={`How can I get help if I'm stuck on a Frontend Mentor challenge?`}
                    answer={`The best place to get help is inside Frontend Mentor's Discord community. There's a help
                        channel where you can ask questions and seek support from other community members.`} /></li>
            </ul>
        </main >
    </>

}


export default Faqs