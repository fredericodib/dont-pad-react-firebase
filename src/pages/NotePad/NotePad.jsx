import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./style.css";
import firebase from "../../UI/firebase";

class Text extends Component {
  state = {
    text: "",
  };

  componentDidMount() {
    this.addListner();
  }

  componentWillUnmount() {
    this.removeListner();
  }

  _onChange = (value) => {
    this.setState({ text: value }, () => {
      const { location } = this.props;
      const db = firebase.firestore();

      db.collection("notepad")
        .doc(btoa(location.pathname.replace(/\/*$/, "")))
        .set({ text: value });
    });
  };

  addListner = () => {
    const { location } = this.props;
    const db = firebase.firestore();

    this.observer = db
      .collection("notepad")
      .doc(btoa(location.pathname.replace(/\/*$/, "")))
      .onSnapshot((docSnapshot) => {
        if (docSnapshot.data()) {
          this.setState({ text: docSnapshot.data().text });
        }
      });
  };

  removeListner = () => {
    this.observer();
  };

  render() {
    const { text } = this.state;
    return (
      <textarea
        className="Text"
        value={text}
        onChange={(e) => this._onChange(e.target.value)}
      />
    );
  }
}

export default withRouter(Text);
