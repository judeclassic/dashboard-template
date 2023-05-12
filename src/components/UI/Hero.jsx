import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import heroimg from '../../assets/images/11-1-removebg-preview.png'
import Image from 'next/image'


export const Hero = () => {
  return (
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <p className='hero__subtitle'>Trending product in </p>
            <h2>Make Modern Interior</h2>
            <p>losum ipsum color everthigs works for me </p>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className='hero__img'>
            <Image src={heroimg} alt='hero is present here'/>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
