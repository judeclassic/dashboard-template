import React from 'react'
import {Container,Row,Col} from 'reactstrap'


export const RoadMap = () => {
  return (
    <section className="Road__map">
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-5' id='road__map'>
          <h2 className='section__title'>PROJECT ROAD MAP</h2>
        </Col>
       <div className="comment_row">
  <div className="comment_column">
    <div className="card" style={{borderColor:'green'}}>
      <p>Stage 1</p>
      <h3>Create Community</h3>
    </div>
  </div>

  <div className="comment_column">
    <div className="card" style={{borderColor:'yellow'}}>
    <p>Stage 2</p>
      <h3>Get Seed Investors</h3>
    </div>
  </div>
  
  <div className="comment_column">
    <div className="card" style={{borderColor:'red'}}>
    <p>Stage 3</p>
      <h3>Launch Project</h3>
    </div>
  </div>
</div>

      </Row>
    </Container>
   </section>
  )
}
