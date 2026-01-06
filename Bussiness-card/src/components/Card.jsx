import { Component } from "react";
export default class Card extends Component {
  render() {
     let {color, title, name, position, company, email} = this.props;
    return (
      <>
       
       <div className={`${color}`}>
          <h3>{title}</h3>
          <p>Name: {name}</p>
          <p>Position: {position}</p>
          <p>Company: {company}</p>
          <p>Email: {email}</p>
        </div>
      </>
    );
  }
}
