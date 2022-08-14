import { Container, Row, Col } from 'react-bootstrap'
import './Services.css'
import imgCourse1 from '../../assets/img/img1.png'
import imgCourse2 from '../../assets/img/img2.png'
import imgCourse3 from '../../assets/img/img3.png'

export default function Services() {
  //este objeto lo vamos a recorrer para mostrar su contenido, para poder ecorrerlo usaremos otro componente
  const servicesArray = [
    {
      title: "Woo x I was never there - (mashup)",
      subtitle: "By SCORPIO",
      image: imgCourse1,
      footer: "Let's listen to it🎶🖤",
      link: "#!",
    },
    {
      title: "Cry Baby",
      subtitle: "By The Neighbourhood",
      image: imgCourse2,
      footer: "Let's listen to it🎶🖤",
      link: "#!",
    },
    {
      title: "Softcore",
      subtitle: "By The Neighbourhood",
      image: imgCourse3,
      footer: "Let's listen to it🎶🖤",
      link: "#!",
    },
  ];
  return (
    <div className='services p-4 mt-5'>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={8}>
           <h2 className='text-center'>Songs I listen to but nobody knows</h2>
            <h4 className='pb-3 text-center'> Give them an opportunity</h4>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
