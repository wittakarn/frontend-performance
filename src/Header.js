import { memo } from "react";

function HeaderComponent({ firstname, lastname }) {
  return (
    <div className="container">
      Header
      <div>Username: {firstname} {lastname}</div>
    </div>
  );
}

const Header = memo(HeaderComponent);
export default Header;
