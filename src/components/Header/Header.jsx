import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      {`Learn React with ${process.env.REACT_APP_NAME}. Welcome to the BEST Docker course eva!`}
      <Link to="/posts">Posts</Link>
    </header>
  );
};

export default Header;
