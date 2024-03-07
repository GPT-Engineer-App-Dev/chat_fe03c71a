import React from "react";
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text, VStack, Avatar, Divider, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSearch, FaEllipsisV, FaPlus } from "react-icons/fa";

const chatHistory = [
  { id: 1, name: "John Doe", message: "Hey, how are you?", time: "15:30" },
  { id: 2, name: "Jane Smith", message: "See you tomorrow!", time: "14:05" },
  { id: 3, name: "Michael Brown", message: "That was fun :)", time: "12:45" },
  // ... add more chat history if needed
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex h="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box w="300px" bg={bg} p={4}>
        <VStack spacing={4}>
          {/* Search input */}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search or start new chat" />
          </InputGroup>

          {/* Chat history */}
          <Stack overflowY="auto" spacing={0} flex={1} w="full">
            {chatHistory.map((chat) => (
              <Box key={chat.id} p={3} _hover={{ bg: useColorModeValue("gray.200", "gray.600") }} cursor="pointer">
                <Flex align="center" justify="space-between">
                  <Avatar name={chat.name} mr={3} />
                  <Box flex={1}>
                    <Heading size="sm">{chat.name}</Heading>
                    <Text fontSize="sm" color="gray.500">
                      {chat.message}
                    </Text>
                  </Box>
                  <Text fontSize="xs" color="gray.500">
                    {chat.time}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Stack>
        </VStack>
      </Box>

      {/* Main content */}
      <Flex flex={1} direction="column" p={4}>
        {/* Chat header */}
        <Flex align="center" justify="space-between" mb={3}>
          <Heading size="md">Chat</Heading>
          <IconButton icon={<FaEllipsisV />} variant="ghost" aria-label="Options" />
        </Flex>

        {/* Messages */}
        <VStack flex={1} overflowY="auto" spacing={4} align="stretch">
          {/* Placeholder for messages */}
          <Text color="gray.500">Select a chat to start messaging</Text>
          {/* Implement message components here */}
        </VStack>

        {/* New message input */}
        <InputGroup size="md" mt={4}>
          <Input placeholder="Type a message" />
          <IconButton icon={<FaPlus />} variant="ghost" aria-label="Send message" isRound />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Index;
