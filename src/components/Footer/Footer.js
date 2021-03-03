import React from 'react';
import slyles from './Footer.module.css';
import animate from '../animate.module.css';

const Footer = () => {
  const animation = `${animate.animate__animated} ${animate.animate__fadeIn}`;
  const cssClasses = `${slyles.Footer} ${animation}`;
  return (
    <div className={cssClasses}>
      <div className={`${animate.animate__animated} ${animate.animate__fadeIn}`}>
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
    </div>
  );
};

export default Footer;

