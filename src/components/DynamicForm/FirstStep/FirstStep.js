import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardFruit from "./CardFruit";
import "./FirstStep.css";

export const fruits = [
  {
    id: 1,
    icon: "🍇",
    name: "Grapes",
    description:
      "Grapes can help your body metabolize fatty acids and improve your overall metabolism, all of which can help with weight loss.",
  },
  {
    id: 2,
    icon: "🍍",
    name: "Pineapple",
    description:
      "Pineapples add to your daily value of vitamin B6, copper, thiamin, folate, potassium, magnesium, niacin, riboflavin, and iron.",
  },
  {
    id: 3,
    icon: "🍌",
    name: "Banana",
    description:
      "Rich in potassium and moisture, it hydrates and moisturizes dry skin, making your skin soft, glowy and supple. ",
  },
];

export default function FirstStep() {
  const [selectedCard, setselectedCard] = useState(null);

  const clickCard = (fruit) => {
    setselectedCard(fruit.id);

    localStorage.setItem("fruitName", fruit.name);
    localStorage.setItem("iconFruit", fruit.icon);
  };

  return (
    <div>
      <h2>Choose your favorite fruit</h2>
      <h4>Select your fruit and click the button "Next Step"</h4>
      <Container className="p-5 text-center">
        <Row>
          {fruits.map((fruit, index) => (
            <CardFruit
              fruit={fruit}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
