import React from 'react';
import image from '../soap.png'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';

const Header = () =>{
// PUEDO EJECUTAR JAVASCRIPT ACA    



    return <>
       
        <header>
        
    <div className='brand-container'>
        <div className='name-logo-container'>
        <Link to='/'>
        <h1>
          Jaboon
        </h1>
        </Link>
          {/* <div className='logo-div'>
          <img src={image} alt="Logo de la pagina, un dispensador de jabon y espuma." />
          </div> */}
        </div>
    </div>
    <nav>
        <ul >
          <li>
          <Link to='/category/soapbar'>Jabones</Link>
          </li>
          <li>
          <Link to='/category/misc'>Miscelaneos</Link>
          </li>
          <li>
            {/* <a href='/Nosotros' className='a-link-nav'>Nosotros</a> */}
            <Link to='/nosotros'>Nosotros</Link>
          </li>
        </ul>
        <CartWidget/>
    </nav>
  </header>
        
      
  </>
}

export default Header;