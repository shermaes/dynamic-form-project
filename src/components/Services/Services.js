import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/img1.png";
import imgCourse2 from "../../assets/img/img2.png";
import imgCourse3 from "../../assets/img/img3.png";
import CardService from "../CardService";

export default function Services() {
  const servicesArray = [
    {
      title: "Woo x I was never there",
      subtitle: "By SCORPIO",
      image: imgCourse1,
      footer: "Let's listen to it🎶🖤",
      link: "https://www.youtube.com/watch?v=4PSuANr_7rQ",
    },
    {
      title: "Cry Baby",
      subtitle: "By The Neighbourhood",
      image: imgCourse2,
      footer: "Let's listen to it🎶🖤",
      link: "https://www.youtube.com/watch?v=r4LGe12tNR8",
    },
    {
      title: "Softcore",
      subtitle: "By The Neighbourhood",
      image: imgCourse3,
      footer: "Let's listen to it🎶🖤",
      link: "https://www.youtube.com/watch?v=ggG9ySCChYw",
    },
  ];
  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Songs I listen to but nobody knows</h2>
            <h4 className="pb-3 text-center"> Give them an opportunity</h4>
            <Row xs={1} md={3} className="g-4 mt-4">
              {servicesArray.map((service, index) => (
                <CardService service={service} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
