import React from 'react'
import reactimg from '../logo.svg';
import nodejs from '../Assets/nodeimage.png';
import flutter from '../Assets/flutter.png';
import git from '../Assets/git-logo.png';
import github from '../Assets/github logo.png'
import bitbucket from '../Assets/bitbucket9553.jpeg';
import jira from '../Assets/Atlassian-Logo-2010s1.png'
import zoho from '../Assets/workplace-logo.png';

const SkillsFrame = () => {
    return (
        <div>
            <h1>Known Frameworks</h1>
            <div>
                <img src={reactimg} style={{height:'40vmin'}}/>
                <img src={nodejs} />
                <img src={flutter} style={{width:'30%'}}/>
            </div>
            <br/>
            <h1>Version Control and Software Experience</h1>
            <div>
            <img src={git} style={{width:'20%'}}/>
            <br/>
            <img src={github} style={{width:'20%'}}/>
            <img src={bitbucket} style={{width:'20%'}}/>
            </div>
            <br/>
                <h1>Productivity Softwares</h1>
            <div style={{columnGap:'20%',display:'flex',marginLeft:'40%'}}>
                <img src={jira} style={{width:'10%'}} />
                <img src={zoho} style={{width:'10%'}} />
            </div>
        </div>
    )
}

export default SkillsFrame
