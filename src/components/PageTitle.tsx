import { Heading } from '@chakra-ui/react'
import React from 'react'

export const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading p="2" shadow="lg">
    {children}
  </Heading>
)
