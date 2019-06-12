import Redux from "redux";
import React, { Component } from "react";
import { connect } from "react-redux";

interface props {
  name: any;
  history: [];
  onUpdate: any;
}
class Profile extends React.Component<props, {}> {
  //   constructor(props) {
  //     super(props);
  //     mapStateToProps(this.state);
  //   }
  render() {
    return (
      <div>
        <div>Profile Name: {this.props.name}</div>
        <div>
          {this.props.history.map((el: { name: string }) => (
            <li>{el.name}</li>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log("mapStatetoProps");
  // console.log(state);
  return {
    name: state.name,
    history: state.history
  };
};
const mapDispachToProps = dispach => {
  return {
    onUpdate: e => {
      dispach({ type: "UPDATE_PROFILE", val: e.target.name.value });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Profile);
