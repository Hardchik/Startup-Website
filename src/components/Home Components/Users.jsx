import React from "react";
import { Stack, Text, Avatar } from "@chakra-ui/react";

const Users = () => {
  return (
    
    <Stack gap={10} bgColor={"#F3F4F8"} p={10}  >
      <Text textAlign={"center"} fontSize={"150%"} fontWeight={700}>
        Who Uses?
      </Text>
      <Stack
        alignSelf={"center"}
        w={"50%"}
        justify={"space-evenly"}
        direction
        gap={10}
      >
        <Stack align={"center"} gap={3}>
          <Avatar size={"2xl"}></Avatar>
          <Stack align={"center"}>
            <Text fontSize={"120%"} fontWeight={500}>
              DOCTOR
            </Text>
            <Text fontSize={"90%"} fontWeight={100}>
              Lorem Ipsum
            </Text>
          </Stack>
        </Stack>
        <Stack align={"center"} gap={3}>
          <Avatar size={"2xl"}></Avatar>
          <Stack align={"center"}>
            <Text fontSize={"120%"} fontWeight={500}>
              PATIENT
            </Text>
            <Text fontSize={"90%"} fontWeight={100}>
              Lorem Ipsum
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Users;
