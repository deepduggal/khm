import React, {Component} from 'react';
import '../styles/Contact.css';
import { Typography } from 'rmwc/Typography';
import { TextField, TextFieldHelperText } from 'rmwc/TextField';
import { Button } from 'rmwc/Button';

class Contact extends Component  {

    constructor () {
        super();
        this.state = {
          name: '',
          email: '',
          phone: '',
          projectDetails: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onProjectDetailsChange = this.onProjectDetailsChange.bind(this);
    }

    onSubmit (e) {

        if (Contact.isBlank(this.state.name) || Contact.isBlank(this.state.phone) || Contact.isBlank(this.state.email) || !Contact.isValidEmail(this.state.email) || Contact.isBlank(this.state.projectDetails)) {
            e.preventDefault();
            // Do errors
        }
        else {
            // Submit
        }

    }

    onNameChange (e) {
        this.setState({
            name: e.target.value
        })
    }

    onEmailChange (e) {
        this.setState({
            email: e.target.value
        });
    }

    onPhoneChange (e) {
        this.setState({
            phone: e.target.value
        });
    }

    onProjectDetailsChange (e) {
        this.setState({
            projectDetails: e.target.value
        });
    }

    static isBlank (str) {
        return str.trim().length < 1;
    }

    static isValidEmail(str) {
        return str.search(Contact.emailRegex) > 0;
    }

    render () {
        return (
            <div id="contact" className="contact">
                <Typography use="display3">Contact</Typography>
                <form autoComplete="false" onSubmit={this.onSubmit}>
                    <TextField fullwidth label="Name" value={this.state.name} onChange={this.onNameChange}/>
                    <TextFieldHelperText>Type something silly!</TextFieldHelperText>

                    <TextField fullwidth label="Phone" value={this.state.phone} onChange={this.onPhoneChange}/>
                    <TextFieldHelperText>Type something silly!</TextFieldHelperText>

                    <TextField fullwidth label="Email" value={this.state.email} onChange={this.onEmailChange}/>
                    <TextFieldHelperText>Type something silly!</TextFieldHelperText>

                    <TextField textarea fullwidth label="Project Details" value={this.state.projectDetails} onChange={this.onProjectDetailsChange}/>
                    <TextFieldHelperText>Type something silly!</TextFieldHelperText>

                    <Button raised>Submit</Button>
                </form>
            </div>
        );
    }
}

Contact.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default Contact;