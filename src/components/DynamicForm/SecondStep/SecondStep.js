import { Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";

export default function SecondStep() {
  const options = [
    { id: 1, value: "football", label: "Football ⚽" },
    { id: 2, value: "computer", label: "Computer 💻" },
    { id: 3, value: "play", label: "Play Videogames 🎮" },
    { id: 4, value: "music", label: "Play Music 🎼" },
    { id: 5, value: "photo", label: "Photography 📷" },
    { id: 6, value: "swim", label: "Swim 🥽" },
    { id: 7, value: "run", label: "Run 👟" },
  ];

  const [selectOption, setSelectOption] = useState(null);

  const hobbiesSer = JSON.stringify(selectOption);
  localStorage.setItem("hobbies", hobbiesSer);

  const onChangeAdditionalHobbie = (e) => {
    const sport = e.target.value;

    localStorage.setItem("adittionalHobbie", sport);
  };
  return (
    <div>
      <h2>Select your favorite Hobbies</h2>
      <h4>Tell me about you</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="7">
            <Select
              defaultValue={selectOption}
              onChange={setSelectOption}
              options={options}
              isSearchable
              isMulti
            />
          </Col>
          <Col lg="7" className="mt-4">
            <h5>Not there? Write it down here</h5>
            <Form.Control
              type="text"
              placeholder="Karate"
              onChange={(e) => onChangeAdditionalHobbie(e)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
