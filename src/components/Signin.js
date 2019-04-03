import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import ToastMessage from "./ToastMessage";
import firebase from '../firebase';
import AuthContext from '../context/auth';


class Signin extends React.Component {
  state = {
    email: "",
    password: "",
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
      })
       


    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
    console.log("submitted");
  };

  isFormEmpty = ({ email, password }) => {
    return !email || !password;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast } = this.state;

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
            {/* Sign In Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Welcome Back</Heading>
              <Text italic color="white">
                Please enter the following to sign-in
              </Text>
            </Box>

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
          
            <Button inline color="blue" text="Submit" type="submit" />
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

export default Signin;
