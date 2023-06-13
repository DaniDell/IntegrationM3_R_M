import React from 'react';
import style from './About.module.css'
import image from '../../image/dani.jpg';


const About = () => {
    return (
        <>
        <h2 className={style.title}>Daniela Dell Acqua - Henry Flex 2023</h2>
        
        <div className={style['container']}>
            
        <a href="https://github.com/DaniDell/Integration_R_M" target="_blank" rel="noopener noreferrer">
        <p className={style['bio']}> She studied design at Buenos Aires University and UX/UI at Coderhouse. These are her first code lines, tap here to see the repo. </p>
        </a>


        <a className={style['porfolio']} href="https://www.behance.net/dandellacqua">Visit her Behance</a>
        <img src={image} alt="Daniela Dell Acqua" className={style.Img} /> 
        
        </div>  
          
        </>
    )
}

export default About;