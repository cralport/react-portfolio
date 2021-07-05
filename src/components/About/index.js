import React from 'react';
import profilePicture from '../../assets/me-arches.jpg'

function About() {
    return (
        <section className='my-5'>
            <div>
                <h2 id='about'>About Me</h2>
                <img src={profilePicture} className='my-2' style={{width='20%'}} alt='me at arches' />
                <p>I am Cory Alport, a full stack developer.  I am based out of Salt Lake City, Utah.  I am new to web development and I am excited to start my journey in this field. </p>
            </div>
        </section>
    );
}


export default About;