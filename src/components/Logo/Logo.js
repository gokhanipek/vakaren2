import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Vakaren from './../../assets/images/vakaren.png'; 
import './Logo.scss';

const Logo = ({classes, onClickHandler}) => {
    useEffect(() => {
        document.documentElement.addEventListener('mousemove', eyeMovementAnimation)
        return () => {
          document.documentElement.removeEventListener('mousemove', eyeMovementAnimation);
        }
      }, [])

      const eyeMovementAnimation = event => {
        let eye = document.querySelectorAll('.eye');
        eye.forEach(e => {
          let x = (e.getBoundingClientRect().left) + (e.clientWidth / 2)
          let y = (e.getBoundingClientRect().top) + (e.clientHeight / 2)
          let radian = Math.atan2(event.pageX - x, event.pageY - y)
          let rot = (radian * (180 / Math.PI) * -1) + 270;
          e.style.transform = "rotate(" + rot + "deg)";
        })
      }

    return (
        <div className={`logo-container ${classes}`}>
          <div className="face">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </div>
          <Link to="/" onClick={() => { onClickHandler() }}>
            <img className="logo" alt="vakaren" src={Vakaren} width='270px'/>
          </Link>
        </div>
    )
}

export default Logo;
