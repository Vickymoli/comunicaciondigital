import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import "./Home.css";
import Logo from '../../assets/logofinal.png';
import { Link, useNavigate } from 'react-router-dom';


const Video = () => {
    return (
      <iframe
        title="video"
        src="https://player-vz-06a59c82-d9a.tv.pandavideo.com/embed/?v=bb381b5f-46cb-48bd-b283-5f69301926d2"
        style={{ border: 'none', width: '720px', height: '360px' }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={true}
        fetchPriority="high"
      ></iframe>
    );
  };


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

return(
    <div className='home'>

        <img src={Logo} className='logo'></img>
        
        <h1 className='title'>
            Gana 100 dolares en 1 dia
        </h1>

        <p className='bajada'> Este curso es la oportunidad perfecta que estabas buscando.</p>


        <Video/>
       


        <p>
            Toca aqui para saber más 👇
        </p>


        <Link to="https://web.whatsapp.com/" className="button">Quiero unirme al grupo de Whatsapp</Link> 
        
    </div>


    )

};

export default Home;
