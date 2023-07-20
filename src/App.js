import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      updateCount: 0,
    }
  }

  handleSubmit = (data) => {
    this.setState({
      firstname: data.firstname,
      lastname: data.lastname,
      updateCount: this.state.updateCount + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <Header firstname={this.state.firstname} lastname={this.state.lastname}></Header>
        <Body handleSubmit={this.handleSubmit}></Body>
        <Footer updateCount={this.state.updateCount}></Footer>
      </div>
    );
  }
}

export default App;
