import Redux from "redux";
import React, { Component } from "react";
import { connect } from "react-redux";
import { string } from "prop-types";

interface props {
  name: any;
  history: [];
  onUpdate: any;
}

class UpdateProfile extends React.Component<props, {}> {
  //   constructor(prop) {
  //     super(prop);
  //     this.state = { name: "" };

  //     this.updateName = this.updateName.bind(this);
  //     this.changeName = this.changeName.bind(this);
  //   }

  //   updateName = e => {
  //     e.preventDefault();
  //     console.log(e.target.name.value);
  //     // console.log(this.state.name);
  //   };

  //   changeName = e => {
  //     this.setState({ name: e.target.value });
  //   };

  render() {
    return (
      <form onSubmit={this.props.onUpdate}>
        <input type="text" name="name" defaultValue={this.props.name} />
        <button type="submit">Update Name</button>
        <div>
          {this.props.history.map((el: { name: string }) => (
            <li>{el.name}</li>
          ))}
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.name,
    history: state.history
  };
};
const mapDispachToProps = dispach => {
  return {
    onUpdate: e => {
      e.preventDefault();
      dispach({ type: "UPDATE_PROFILE", val: e.target.name.value });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(UpdateProfile);
