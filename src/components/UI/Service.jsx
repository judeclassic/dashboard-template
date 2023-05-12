import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import {motion} from 'framer-motion'

export const Service = () => {
  return (
    <section className='services'>
    <Container>
        <Row>
             <Col lg="3" md="3" style={{background:'#f0e2da'}}>
                  <motion.div whileHover={{scale:1.1}} className='services__item'>
                      <span>
                      <i className="ri-truck-line"></i>
                      </span>
                      <div>
                          <h3>Free Shipping</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                  </motion.div>
              </Col>
              <Col lg="3" md="3" style={{background:'#cde0fc'}}>
                  <motion.div whileHover={{scale:1.1}} className='services__item'>
                      <span>
                      <i className="ri-refresh-line"></i>
                      </span>
                      <div>
                          <h3>Easy Returns</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                  </motion.div>
              </Col>
              <Col lg="3" md="3" style={{background:'#baebe7'}}>
                  <motion.div whileHover={{scale:1.1}} className='services__item'>
                      <span>
                      <i className="ri-secure-payment-line"></i>
                      </span>
                      <div>
                          <h3>Secure Payment</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                  </motion.div>
              </Col>
              <Col lg="3" md="3" style={{background:'#ceebe9'}}>
                  <motion.div whileHover={{scale:1.1}} className='services__item'>
                      <span>
                      <i className="ri-exchange-dollar-line"></i>
                      </span>
                      <div>
                          <h3>Back Guarantee</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                  </motion.div>
              </Col>
        </Row>
    </Container>
</section>

  )
}
