import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormFinale from './FormFinale';
import Conform from './Conform';


export class UserForm extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zipCode: '',
        creditCardNumber: '',
        expirationDate: '',
        ccv: '',
        billingZipcode: ''
    }
    //move to next step 
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //move to previous step 
    prevtStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    //handle feilds change 
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { name, email, password, line1, line2, city, state, zipCode, creditCardNumber, expirationDate, ccv, billingZipcode } = this.state;
        const values = { name, email, password, line1, line2, city, state, zipCode, creditCardNumber, expirationDate, ccv, billingZipcode }
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevtStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormFinale
                        nextStep={this.nextStep}
                        prevStep={this.prevtStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Conform
                        nextStep={this.nextStep}
                        prevStep={this.prevtStep}
                        values={values}
                    />
                )
            case 4:
                return <h1>Thank You</h1>
        }
    }
}

export default UserForm
