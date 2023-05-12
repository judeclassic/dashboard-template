import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'
import {motion} from 'framer-motion'

export const Social = () => {
  return (
    <section className="socials">
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-2'>
          <h2 className='section__title'>Join Our Socials</h2>
        </Col>
       <div className="social_row">
  <div className="social_column">
    <div className="card">
      <p><i className="fa fa-user"></i></p>
      <span><i class="ri-discord-line ri-3x" ></i></span>
      <h3>Discord</h3>
      <p><Link href='#'><motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}}className='buy__btn'>Join Now</motion.button></Link></p>
    </div>
  </div>

  <div className="social_column">
    <div className="card">
      <p><i className="fa fa-check"></i></p>
      <span><i class="ri-facebook-line ri-3x" ></i></span>
      <h3>Facebook</h3>
      <p><Link href='#'><motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}}className='buy__btn'>Join Now</motion.button></Link></p>
    </div>
  </div>
  
  <div className="social_column">
    <div className="card">
      <p><i className="fa fa-smile-o"></i></p>
      <span><i class="ri-telegram-line ri-3x" ></i></span>
      <h3>Telegram</h3>
      <p><Link href='#'><motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}} className='buy__btn'>Join Now</motion.button></Link></p>
    </div>
  </div>
  
  <div className="social_column">
    <div className="card">
      <p><i className="fa fa-coffee"></i></p>
      <span><i class="ri-instagram-line ri-3x" ></i></span>
      <h3>Instagram</h3>
      <p><Link href='#'><motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}}className='buy__btn'>Join Now</motion.button></Link></p>
    </div>
  </div>
</div>

      </Row>
    </Container>
   </section>
  )
}
