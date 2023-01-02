import React from 'react'
import { Container, Card, CardBody } from 'reactstrap'


const Home = () => {

  return (
    <div className='mt-5'>
      <Container style={{width: '18rem'}} className="p-2">
        <Card>
          <CardBody className='bg-success text-white'>
          <h2>Home Page</h2>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export default Home
