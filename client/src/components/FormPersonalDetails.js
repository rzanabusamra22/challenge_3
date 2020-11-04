import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevtStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Your Details" />
                    <TextField
                        hintText="Enter Your line1"
                        floatingLabelText="line1"
                        onChange={handleChange('line1')}
                        defaultValue={values.line1}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your line2"
                        floatingLabelText="line2"
                        onChange={handleChange('line2')}
                        defaultValue={values.line2}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your State"
                        floatingLabelText="State"
                        onChange={handleChange('state')}
                        defaultValue={values.state}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your ZipCode"
                        floatingLabelText="ZipCode"
                        onChange={handleChange('zipCode')}
                        defaultValue={values.zipCode}
                    />
                    <br />
                    <RaisedButton
                        label="Next"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br />
                    <RaisedButton
                        label="Previous"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
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
export default FormPersonalDetails
