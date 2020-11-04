class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formView: 0,
            forms: props.props,
            fornData: {
                'Name': '',
                'Email': '',
                'Password': '',
                'Line1': '',
                'line2': '',
                'City': '',
                'State': '',
                'ZipCode': '',
                'Credit Card Number': '',
                'Expiration Date': '',
                'CCV': '',
                'Billing Zipcode': ''
            }
        }
    }
}
let form = {
    1: []
}
ReactDOM.render(
    <App props={forms} />,
    document.getElementById('app')
)