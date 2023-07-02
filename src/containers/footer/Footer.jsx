import React from 'react';
import footerLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3_footer section__padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient__text'>Don&apos;t wait for others</h1>
      </div>
      <div className='gpt3_footer-btn'>
        <button>Request Early access</button>
      </div>
      <div className='gpt3_footer-links'>
        <div className='gpt3_footer-links-logo'>
          <img src={footerLogo} alt='footer-logo'/>
          <p>32 Robert Crescent, Fetac Town. All Rights reserved</p>
        </div>
        <div className='gpt3_footer-links-box'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links-box'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links-box'>
          <h4>Get in Touch</h4>
          <p>32 Robert Crescent, Fetac Town</p>
          <p>08180387593</p>
          <p>victorbassey767@gmail.com</p>
        </div>
      </div>
      <div className='gpt3_footer-copyright'>
        <p>© Gpt3 2023 @ Javascript mastery</p>
      </div>
    </div>
  );
};

export default Footer;
