import React from 'react';
import slyles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={slyles.Footer}>
      <a className={`${slyles.rsLogo} unselectable`} href={'https://rs.school/js'} rel="noreferrer" target={'_blank'}>
        <object type="image/svg+xml" data="./img/rs_school_js-logo.svg" className={`${slyles.rsSVG} unselectable`} >
          Your browser does not support SVG
        </object>
      </a>
      <div className={`${slyles.description} unselectable`}>
        <span>
          Produced by Vladimir Leontiev as part of the training course "The Rolling Scopes"
        </span>
        <span>2021</span>
      </div>

      <a  className={`${slyles.githubLogo} unselectable`} 
          href={'https://github.com/vladimirleontev281/react-game'} 
          rel="noreferrer" 
          target={'_blank'}
      >
        <img src={'./img/GitHub_Logo_White.png'} className={slyles.githubImg} alt='GitHub logo' />
      </a>
    </div>
  );
};

export default Footer;

