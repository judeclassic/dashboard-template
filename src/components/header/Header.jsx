import React from 'react'
import {motion} from 'framer-motion'
import {Container,Row} from 'reactstrap';
import logo from '../../assets/images/hero-img.png';
import Image from 'next/image';

export const Header = () => {
  
  
  return (
    <header className="header" >
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
               <Image src={logo} alt=""/>
               <div>
                <h1>
                  Easi 
                </h1>
               </div>
              </div>              
            </div>
        </Row>
      </Container>
    </header>
  )
}
