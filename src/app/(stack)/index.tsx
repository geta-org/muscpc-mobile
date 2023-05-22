import { Text, VStack } from "native-base";

export default function Home() {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" bg="gray.900">
      <Text color="gray.100" fontSize="2xl">
        Hello World
      </Text>
    </VStack>
  );
}
