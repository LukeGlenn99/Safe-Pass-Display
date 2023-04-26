import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function AboutUs() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src='./images/Image4.png' />
        <Card.Body>
          <Card.Title className='textheader'>Luke Glenn</Card.Title>
          <Card.Text className='text'>Dept. of  Electrical and Computer Engineering</Card.Text>
          <Card.Text className='text'>Georgia Southern University</Card.Text>
          <Card.Text className='text'>Statesboro, USA</Card.Text>
          <Card.Text className='text'>Manufacturing and Design Lead</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:lg10422@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= './images/Image1.png'/>
        <Card.Body>
          <Card.Title className='textheader'>Chase Haggard</Card.Title>
          <Card.Text className='text'>Dept. of  Electrical and Computer Engineering</Card.Text>
          <Card.Text className='text'>Georgia Southern University</Card.Text>
          <Card.Text className='text'>Statesboro, USA</Card.Text>
          <Card.Text className='text'>Research Lead</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:ch29174@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src='./images/Image3.png'/>
        <Card.Body>
        <Card.Title className='textheader'>Joyel Brimidge </Card.Title>
          <Card.Text className='text'>Dept. of  Electrical and Computer Engineering</Card.Text>
          <Card.Text className='text'>Georgia Southern University</Card.Text>
          <Card.Text className='text'>Statesboro, USA</Card.Text>
          <Card.Text className='text'>Coding Lead</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:jb52788@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
      <Card >
        <Card.Img variant="top" src="./images/Image2.png"/>
        <Card.Body>
        <Card.Title className='textheader'>Rayan Alhabardi</Card.Title>
          <Card.Text className='text'>Dept. of  Electrical and Computer Engineering</Card.Text>
          <Card.Text className='text'>Georgia Southern University</Card.Text>
          <Card.Text className='text'>Statesboro, USA</Card.Text>
          <Card.Text className='text'>Networking Communications</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:ra0787@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default AboutUs;