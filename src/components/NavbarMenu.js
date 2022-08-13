import { Container, Navbar } from "react-bootstrap";
//el target="_blank" es para que el link que se encuentra en esa etiqeuta se abra en otra pagina web el noreferrer es para que no siga el enlace automaticamente
export default function NavbarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">
            Dynamic <b>Form</b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:{" "}
              <a
                href="https://github.com/shermaes"
                target="_blank"
                rel="noreferrer"
              >
                Sher Maestre
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
