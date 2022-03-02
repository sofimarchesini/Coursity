import React from 'react';
import './about.css' 

const AboutPage = () =>{
    return (
        <div className='about-cont container-fluid text-center'>
            <div className='fila-inicial-about row'>
                <div className='about-text'>About us</div>
            </div>
            <div className='cont-text'>
                <div className='text'>Coursity partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.Coursity was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, Coursera is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. Coursera received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.</div>
            </div>
        </div>
    )
}

export default AboutPage;