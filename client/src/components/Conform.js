import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Conform extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS fORM TO EXPRESS//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { name, email, password, line1, line2, city, state, zipCode, creditCardNumber, expirationDate, ccv, billingZipcode } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Conform Your Data" />
                    <List>
                        <ListItem
                            primaryText="Name"
                            secondaryText={name}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Password"
                            secondaryText={password}
                        />
                        <ListItem
                            primaryText="Name"
                            secondaryText={name}
                        />
                        <ListItem
                            primaryText="Line1"
                            secondaryText={line1}
                        />
                        <ListItem
                            primaryText="Line2"
                            secondaryText={line2}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="State"
                            secondaryText={state}
                        />
                        <ListItem
                            primaryText="ZipCode"
                            secondaryText={zipCode}
                        />
                        <ListItem
                            primaryText="CreditCardNumber"
                            secondaryText={creditCardNumber}
                        />
                        <ListItem
                            primaryText="ExpirationDate"
                            secondaryText={expirationDate}
                        />
                        <ListItem
                            primaryText="CCV"
                            secondaryText={ccv}
                        />
                        <ListItem
                            primaryText="BillingZipcode"
                            secondaryText={billingZipcode}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Conform Next"
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
export default Conform
