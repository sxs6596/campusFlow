import "./styles/Account.css";
import { Card, Avatar, Flex, Box, Text, Container, Heading } from "@radix-ui/themes";
export default function Accounts() {
  const first_name = localStorage.getItem("first_name");
  const email = localStorage.getItem("email");

  // let fullname = localStorage.getItem("loggedinusername");
  // userData = JSON.parse(userData)
  return (
    <>
    <Container>
     <Heading size="6" gap="4" highContrast>Account</Heading>
      <Card style={{ maxWidth: 500 }}>
        <Flex gap="3" align="center">
          <Avatar
            size="5"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="5" weight="bold">
              {first_name}
            </Text>
            <Text as="div" size="5" color="gray">
              {email}
            </Text>
          </Box>
        </Flex>
      </Card>
      </Container>
    </>
  );
}
