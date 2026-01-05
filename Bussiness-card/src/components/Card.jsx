import { Component } from "react";
import "./Card.css";
export default class Card extends Component {
  render() {
    return (
      <>
        <div className="container">
            <h1>Bussiness Card App</h1>
          <div className = {`${this.props.color}`}>
            <h3>{this.props.title}</h3>
            <p>Name: {this.props.name}</p>
            <p>Title: {this.props.position}</p>
            <p>Company: {this.props.company}</p>
            <p>Email: {this.props.email}</p>
          </div>

          {/* <div className="secColor">
            <h3>Business Card</h3>
            <p>Name: Jane Smith</p>
            <p>Title: Product Manager</p>
            <p>Company: Innovative Apps</p>
            <p>Email: jane.smith@example.com</p>
          </div>

          <div className="thColor">
            <h3>Business Card</h3>
            <p>Name: Mike Johnson</p>
            <p>Title: UX Designer</p>
            <p>Company: Creative Designs</p>
            <p>Email: mike.johnson@example.com</p>
          </div> */}
        </div>
      </>
    );
  }
}
