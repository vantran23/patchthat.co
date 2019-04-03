import React from 'react';
import { Box, Toast } from 'gestalt';

const ErrorMessage = ({ show, message }) => (
    show && (
        <Box
            dangerouslySetInlineStyle={{
                __style: {
                    bottom: 50,
                    left: "50%",
                    transform: "translatex(-50%)"
                }
            }}
            position="fixed"
        >

            <Toast color="orange" text={message} />
        </Box>

    )

);







export default ErrorMessage;