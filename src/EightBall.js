import "./EightBall.css";
import { useState } from "react";

function EightBall({ answers }) {
  const [background, setBackground] = useState("black");
  const [message, setMessage] = useState("Think of a Question.");

  const changeMessage = () => {
    const itemNumber = Math.floor(Math.random() * answers.length);
    // console.log(itemNumber);
    // console.log(answers[itemNumber])
    setBackground(answers[itemNumber].color);
    setMessage(answers[itemNumber].msg);
  };

  return (
    <>
      <div className="EightBall-background">
        <div
          className="EightBall-content"
          style={{ backgroundColor: background }}
          onClick={changeMessage}
        >
          <div className="Eightball-message">{message}</div>
        </div>
      </div>
    </>
  );
}

export default EightBall;
