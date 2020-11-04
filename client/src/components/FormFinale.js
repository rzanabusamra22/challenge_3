import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormFinale extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Your Details" />
                    <TextField
                        hintText="Enter Your CreditCardNumber"
                        floatingLabelText="CreditCardNumber"
                        onChange={handleChange('creditCardNumber')}
                        defaultValue={values.creditCardNumber}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your ExpirationDate"
                        floatingLabelText="ExpirationDate"
                        onChange={handleChange('expirationDate')}
                        defaultValue={values.expirationDate}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your CCV"
                        floatingLabelText="CCV"
                        onChange={handleChange('ccv')}
                        defaultValue={values.ccv}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your BillingZipcode"
                        floatingLabelText="BillingZipcode"
                        onChange={handleChange('billingZipcode')}
                        defaultValue={values.billingZipcode}
                    />
                    <br />
                    <RaisedButton
                        label="Next"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
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
export default FormFinale
