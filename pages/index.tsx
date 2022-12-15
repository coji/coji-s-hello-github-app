import { Heading, Box, Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr auto"
      minH="100vh"
      color="gray.500"
    >
      <Heading p="4">Coji&apos;s Hello GitHub App!</Heading>

      <Center bgColor="gray.100">Hello!</Center>

      <Box p="4" textAlign="center">
        Copyright &copy; coji
      </Box>
    </Box>
  )
}
