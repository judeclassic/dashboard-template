import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Image from 'next/image'
import mission from '../../assets/images/92-removebg-preview.png'

export const Misson = () => {
  return (
    <section className='mission__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="mission__content" id='mission'>
            <h2>Mission AND VISION</h2>
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
                   rem tempore voluptate cumque hic </p>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className='mission__img'>
            <Image src={mission} alt='mission is present here'/>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
