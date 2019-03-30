import React from 'react';
import { Container, Box, Button, Heading, Text, TextField } from 'gestalt';
import ToastMessage from './ToastMessage';

class Signup extends React.Component {
    state = {
        username:'',
        email: '',
        password: '',
        toast: false,
        toastMessage: ''
    }

    handleChange = ({ event, value}) => {
        event.persist();
        this.setState({ [event.target.name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if(!this.isFormEmpty(this.state)) {
            this.showToast('Fill in all fields')
        }
        console.log('submitted');
        
    };

    isFormEmpty = ({ username, email, password }) => {
        return !username || !email || !password;
    };

    showToast = toastMessage => {
        this.setState({ toast:true, toastMessage });
        setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
    }
    
    render() {
        const { toastMessage}
        return (
            <Container>
                <Box
                    dangerouslySetInlineStyle={{
                        __style: {
                            backgroundColor: '#85a8c2'
                        }
                    }}
                    margin={4}
                    padding={4}
                    shape="rounded"
                    display="flex"
                    justifyContent="center"
                >
                    {/* Sign up Form */}
                    <form styles={{
                        display: 'inlineBlock',
                        textAlign: 'center',
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
                            <Heading color="midnight"> Let's Get Started</Heading>
                            <Text italic color="white">Sign-up to order or create your own patch!</Text>
                        </Box>
                        {/* username Input*/}
                        <TextField
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                        {/* Email Address Input*/}
                        <TextField
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={this.handleChange}
                        />
                        {/* Password Input*/}
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <Button inline
                            color="blue"
                            text="Submit"
                            type="submit"
                            alignItems="center"
                        />
                    </form>
                </Box>
                <ToastMessage show= {toast} message={toastMessage} />
            </Container>
        )
    }
}

export default Signup;