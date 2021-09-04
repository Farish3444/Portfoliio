import React from 'react'
import dartlogo from '../Assets/dart-logo.png'
import python from '../Assets/python-programming-language.png';
import js from '../Assets/jsimage.png'

const SkillsIndex = () => {
    return (
        <div style={{marginLeft:'10%',margin:'10%'}}>
            <h1 style={{fontSize:'50px'}}> SPECIALIST IN </h1>
            <br/>
            <h1 style={{marginLeft:'-90%'}}> Known Languages 💻  </h1>
            <div style={{display:'flex',columnGap:'10%'}}>
            <img src={python} style={{width:'20%'}}/>          
            <img src={js} style={{width:'30%'}}/>          
            <img src={dartlogo} style={{width:'30%'}}/>
            </div>          
        </div>
    )
}

export default SkillsIndex