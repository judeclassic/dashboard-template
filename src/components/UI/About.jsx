import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import about from '../../assets/images/2-removebg-preview.png'
import Image from 'next/image'


export const About = () => {
  return (
    <section className='about__section'>
    <Container>
      <Row>
      <Col lg='6' md='6'>
          <div className='about__img'>
            <Image src={about} alt='about is present here'/>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="about__content" id='about'>
            <h2>ABOUT US</h2>
            <p> Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
                Optio nostrum accusantium iste,
                 voluptas cumque provident!
                  Consequatur officiis animi
                   rem tempore voluptate cumque hic
                   Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
                Optio nostrum accusantium iste,
                 voluptas cumque provident!
                  Consequatur officiis animi
                   rem tempore voluptate cumque hic
                   Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
                Optio nostrum accusantium iste,
                 voluptas cumque provident!
                  Consequatur officiis animi
                   rem tempore voluptate cumque hic
                   Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
                Optio nostrum accusantium iste,
                 voluptas cumque provident!
                  Consequatur officiis animi
                   rem tempore voluptate cumque hic
                   Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
                Optio nostrum accusantium iste,
                 voluptas cumque provident!
                  Consequatur officiis animi
                   rem tempore voluptate cumque hic</p>
          </div>
        </Col>
      
      </Row>
    </Container>
    </section>
  )
}
