import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../Assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="3rem" />
      <Text>MY HUB</Text>
    </HStack>
  );
};

export default NavBar;
