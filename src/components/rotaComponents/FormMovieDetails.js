import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormMovieDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Movie Details" />
          <TextField
            hintText="Enter Movie Title"
            floatingLabelText="Title"
            onChange={handleChange("title")}
            defaultValue={values.title}
          />
          <br />
          <TextField
            hintText="Enter The Movie Director"
            floatingLabelText="Director"
            onChange={handleChange("director")}
            defaultValue={values.director}
          />
          <br />
          <TextField
            hintText="Enter The Movie Genre"
            floatingLabelText="Genre"
            onChange={handleChange("genre")}
            defaultValue={values.genre}
          />
          <br />
          <TextField
            hintText="Enter The Movie Release Date"
            floatingLabelText="Release Date"
            onChange={handleChange("releaseDate")}
            defaultValue={values.releaseDate}
          />
          <br />
          <TextField
            hintText="Enter The Movie Description"
            floatingLabelText="Description"
            onChange={handleChange("description")}
            defaultValue={values.description}
          />
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default FormMovieDetails;
