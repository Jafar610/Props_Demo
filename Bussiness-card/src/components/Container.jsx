import { Component } from "react";
import Card from "./Card";
import "./Card.css";
import Data from "../assets/card.js";
class Container extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Bussiness Card App</h1>
          {/* <Card
            title="Bussiness Card"
            color="firstColor"
            name="Jafar Mohamed"
            position="Software Developer"
            company="Brothers INC"
            email="Jaf@gmail.com"
          />

          <Card
            title="Bussiness Card"
            color="secColor"
            name="Akmel Mohamed"
            position="Designer"
            company="Brothers INC"
            email="Aki@gmail.com"
          />

           <Card
            title="Bussiness Card"
            color="thColor"
            name="Tofik Mohamed"
            position="Student"
            company="Brothers INC"
            email="Tofik@gmail.com"
          /> */}
          {Data.map((singleData, i) => {
            let {title, color, name, position, company, email, phone} = singleData;
            return(
              <Card
              key={i}
              title={title}
              color={color}
              name={name}
              position={position}
              company={company}
              email={email}
              phone={phone}
             />
            );
            
          })}
        </div>
      </>
    );
  }
}
export default Container;
