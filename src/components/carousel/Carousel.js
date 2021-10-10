import { Carousel } from "react-bootstrap"

const Carasel = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 h-20"
      src="https://pbs.twimg.com/media/E8g4FYiXMAQRYe6?format=jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Exclusivos</h3>
      <p>Juegos Físicos y Digitales de la familia Playstation</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 h-20"
      src="https://i.pinimg.com/originals/4a/e3/24/4ae324abfa1298b049fd4a94a4923a1a.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Xbox GamePass</h3>
      <p>Juegos Físicos y Digitales de la familia Xbox</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-20"
      src="https://www.vortez.net/contentteller.php?ct=news&action=file&id=18653"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Juga en tu PC</h3>
      <p>Steam keys con descuento.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carasel
