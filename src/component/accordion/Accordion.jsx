import React from 'react'
import { useState } from 'react';
import minusIcon from '../../assets/images/icon-minus.svg'
import plusIcon from '../../assets/images/icon-plus.svg'
import './accordion.css'

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(null)

    function handleClick(){
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div className="wrapper">
            <div className="question" onClick={() => handleClick()}>
                <h2 >{question}</h2>
                <img src={isOpen ? minusIcon : plusIcon} alt="" />
            </div>
            <p className={isOpen ? "answer answer-open" : "answer"}>
                {answer}
            </p>
        </div>

    )
}
export default Accordion;
