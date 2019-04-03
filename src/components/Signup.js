import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import ToastMessage from "./ToastMessage";
import ErrorMessage from "./ErrorMessage";
import firebase from '../firebase';
import AuthContext from '../context/auth';

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    toast: false,
    toastMessage: "",
    error:""
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
      })
      // .catch((error) => {
      //   const {errorMessage} = error
      //   this.showToast({errorMessage})
  
      //  })





    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
    console.log("submitted");
  };

  isFormEmpty = ({ username, email, password, confirmPassword }) => {
    return !username || !email || !password || !confirmPassword;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  // showError = ErrorMessage => {
  //   this.setState({ error: true, ErrorMessage });
  // };

  render() {
    const { toastMessage, toast } = this.state;
    // const { error } = this.state;
    //const displayError = error === '' ? '' : <h1>{error}</h1>
  
    return (

      <Container>
      
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#6f7aa8"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign Up Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Sign Up Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's Get Started</Heading>
              <Text italic color="white">
                Sign-up to order or create your own patch!
              </Text>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            {/* Email Address Input */}
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="confirmPassword"
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <Button inline color="blue" text="Submit" type="submit" />
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
        {/* <ErrorMessage show={error} message={ErrorMessage} /> */}
      </Container>
    );
  }
}


export default Signup;
