import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Your Details" />
                    <TextField
                        hintText="Enter Your Name"
                        floatingLabelText="Name"
                        onChange={handleChange('name')}
                        defaultValue={values.name}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Password"
                        floatingLabelText="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    <br />
                    <RaisedButton
                        label="Next"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails
