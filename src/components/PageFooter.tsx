import { Box } from '@chakra-ui/react'
import React from 'react'

export const PageFooter = ({ children }: { children: React.ReactNode }) => (
  <Box as="footer" p="2" textAlign="center">
    {children}
  </Box>
)
