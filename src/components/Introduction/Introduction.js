import './Introduction.css'
import { Container, Row, Col, Button } from "react-bootstrap";
//los p que se ven dentro de los classname son los padding
// el segundo button que tiene nuestro formulario es solo para darle una sombra al button que si realiza la accion
// el d-flex (display-flex) se para todo y lo pone en la misma fila
// el button start create lleva un href con el que nos redigiremos a otra pagina al clickear en el
// en el css estamos hablando de childs cuando hablamos de los buttons, por que es esto?
// el first-child es el primer button que se encuentra de arriba a abajo al leer el codigo
// y asi sucesivamente, esto nos permite darle estilos distintos a componentes de una misma naturaleza
export default function Introduction() {
    return(
        <div className="introduction p-3 p-lg-5 mt-5">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs={12} md={8}>
              <h1 className="pl-2 text-center">
                Welcome to my first dynamic form {" "}
                <span className="pt-2 pb-4">
                  Not really important info but thanks for filling it out!
                </span>
              </h1>
              <h4 className="text-center pt-3">
                Hi, I´m Sher Maestre, im 23 years old and i like to make programms
                and develop with js. I also like to kill demons on doom when I have free time.
              </h4>
              <div className="d-flex container-actions mt-5">
                <div className="container-buttons">
                  <Button
                    className="p-3"
                    onClick={() => console.log("Click button")}
                  >
                    Get in touch
                  </Button>
                  <Button className="p-3">Get in touch</Button>
                </div>
                <div className="btn-start-create">
                  <a href="#dynamic-form">Start to create ➡️🤙</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
};
