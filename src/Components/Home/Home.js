import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className="inspobackground"><div/>
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home5.png'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Safe Pass Display</h3>
          <p>Aimed to improve travel safety</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/electronics1.png'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Our fabricated model</h3>
          <p>Housing all of the electronics</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home3.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Do Not Pass</h3>
          <p>This state is shown when the HC-SR04 sensor is triggered</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home4.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Safe To Pass</h3>
          <p>This state is shown until an event triggers the sensor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home2.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Finished fabricated model</h3>
          <p>Shown is our teams finished models</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default Home;