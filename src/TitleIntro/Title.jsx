import React from 'react'
import '../App.css';
import developer from '../Assets/developer.svg'

const Title = () => {
    return (
        <div>
    <h1 style={{fontSize:'100px'}}>I'm 𝔽𝕒𝕣𝕚𝕤𝕙 🎮</h1>
     <h1> A Passionate Front End Developer with high Level UI/UX Skills</h1>
     <img  src={developer} alt='' style={{height:'40vmin'}}/>
        </div>
    )
}

export default Title
