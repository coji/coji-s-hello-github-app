import { Center } from '@chakra-ui/react'
import React from 'react'

export const PageBody = ({ children }: { children: React.ReactNode }) => (
  <Center as="main" p="2" bgColor="gray.100">
    {children}
  </Center>
)
