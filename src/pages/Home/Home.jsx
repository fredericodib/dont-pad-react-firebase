import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class Home extends Component {
  state = {
    url: "",
  };

  render() {
    const { url } = this.state;
    return (
      <div className="Home">
        <h1>DONTPAD</h1>
        <input
          type="text"
          value={url}
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <Link to={url}>Ir</Link>
      </div>
    );
  }
}

export default Home;
