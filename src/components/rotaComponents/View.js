import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List,ListItem }from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class View extends Component {
    //process data to API
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values: { firstName, lastName, email, title, director, genre, releaseDate, description}}= this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                    primaryText="First Name"
                    secondaryText={ firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Title"
                            secondaryText={title}
                        />   
                        <ListItem
                            primaryText="Director"
                            secondaryText={director}
                        />
                        <ListItem
                            primaryText="Genre"
                            secondaryText={genre}
                        /> 
                        <ListItem
                            primaryText="Release Date"
                            secondaryText={releaseDate}
                        /> 
                        <ListItem
                            primaryText="Description"
                            secondaryText={description}
                        /> 
                        
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm $ Continue"
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
export default View;