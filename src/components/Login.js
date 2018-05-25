import React, { Component } from 'react';


// Material UI Component
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';

// Service
import AuthenticationService from '../services/AuthenticationService';

class Login extends Component {
  alignCenter = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  cardWidth = {
    width: '500px'
  }

  floatActionButtonRight = {
    float: 'right'
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pasword: ''
    }
  }

  render () {
    return (
      <div style={this.alignCenter}>
        <Card style={this.cardWidth}>
          <CardHeader
            title="Login App"
            subtitle="Login to continue!!!"
          />
          <CardTitle title="Login" />
          <CardText>
            <TextField 
              type="email"
              fullWidth={true}
              floatingLabelText="Email Address"
              value={this.state.email}
              onChange={ (e) => this.onChangeEmail(e) }
            />
            <TextField 
              type="password"
              fullWidth={true}
              floatingLabelText="Password"
              value={this.state.password}
              onChange={ (e) => this.onChangePassword(e) }
            />
          </CardText>
          <CardActions>
            <RaisedButton 
              label="Submit"
              primary={true}
              onClick={ (e) =>this.submitForm(e) }
            />
          </CardActions>
        </Card>
      </div>
    );
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  submitForm() {
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    AuthenticationService.post(user)
      .then(response => {
        if(response.success === true) {
          this.props.history.push('/dashboard');
        }
        console.log('response', response)
    });
  }
}

export default withRouter(Login);