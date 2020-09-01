import React from 'react';
import Github from './../../assets/images/github.png';
import './Contact.scss';

const Contact = () => {
    return <div className="contact"><a href="https://www.github.com/gokhanipek"><img alt="github" className="contact-image" src={Github} /></a></div>
}

export default Contact;