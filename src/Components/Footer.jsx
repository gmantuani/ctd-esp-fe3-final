import React, { useContext } from 'react'
import { ContextGlobal } from './utils/globalContext';


const Footer = () => {
  const { state } = useContext(ContextGlobal)
  return (
    <div className={state.bgFlag}>
      <div className='backTop'>
        <p
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BACK TO TOP
        </p>
      </div>
      <footer>
        <img className='logoDh' src="images/DH.png" alt="" />
        <div className='logos'>
          <img src="images/ico-facebook.png" alt="" />
          <img src="images/ico-instagram.png" alt="" />
          <img src="images/ico-whatsapp.png" alt="" />
          <img src="images/ico-tiktok.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;