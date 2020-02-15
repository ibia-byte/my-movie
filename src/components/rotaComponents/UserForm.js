import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormMovieDetails from "./FormMovieDetails";
import View from "./View";
import Success from "./Success";
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    director: "",
    genre: "",
    releaseDate: "",
    description: ""
  };
  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  //handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    //const { step } = this.state;
    this.setState({});
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      title,
      director,
      genre,
      releaseDate,
      description
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      title,
      director,
      genre,
      releaseDate,
      description
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormMovieDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <View
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}
export default UserForm;
