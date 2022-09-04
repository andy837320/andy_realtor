import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Button,
  Text,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  // if (isLoading) return <Box>Loading...</Box>;
  // if (error) return <Box>{error.message}</Box>;

  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Link href="/">
        <Box cursor="pointer">
          <Image
            src="/arpanrealtors.jpg"
            alt="clickable image"
            width="130"
            height="80"
          />
        </Box>
      </Link>
      <Spacer />

      <Box paddingRight="6" fontSize="lg">
        <Button fontWeight="bold" paddingRight="4" bg="blue.200">
          {user ? (
            <>
              <Text color="red.500" fontWeight="bold">
                Welcome {user.name}!!!
              </Text>
              <a href="/api/auth/logout">Logout</a>
            </>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </Button>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
