import React from 'react'
import { Container, Flex, Spacer } from '@chakra-ui/react'
const LoginScreenTest = () => {
  return (
    <div>
    <Container>
        <Flex direction ="column">
        <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
    </Container>
    </div>
  )
}

export default LoginScreenTest