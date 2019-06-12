import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { connect } from "react-redux";
import UpdateProfile from "./components/UpdateProfile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./common/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route exact path="/" component={Counter} /> */}
            <Route path="/profile" component={Profile} />
            <Route path="/updateProfile" component={UpdateProfile} />
          </Switch>
        </BrowserRouter>
        {/* <div>
          Age : <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button> */}
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     age: state.age
//   };
// };
// const mapDispachToProps = dispach => {
//   return {
//     onAgeUp: () => dispach({ type: "ADD" }),
//     onAgeDown: () => dispach({ type: "SUBSTRACT" })
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(App);
export default App;
