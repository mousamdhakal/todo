import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text) {
      this.props.addTask(this.state);
      this.setState({
        text: "",
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label"> Add new task</label>
        <input
          className="form__input"
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
      </form>
    );
  }
}

export default AddTask;
