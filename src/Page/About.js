import React from 'react'
import { Container, Card, CardBody } from 'reactstrap'

const About = () => {

  return (
    <div className='mt-5'>
      <Container style={{width: '18rem'}} className="p-2">
        <Card>
          <CardBody className='bg-primary text-white'>
          <h2>About Page</h2>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export default About
