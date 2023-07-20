import React from "react";
class HeaderComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        Header
        <div>Username: {this.props.firstname} {this.props.lastname}</div>
      </div>
    );
  }
}

const Header = HeaderComponent;
export default Header;
