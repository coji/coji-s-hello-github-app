import { Box } from '@chakra-ui/react'
import React from 'react'

export const PageShell = ({ children }: { children: React.ReactNode }) => (
  <Box
    display="grid"
    gridTemplateRows="auto 1fr auto"
    height="100svh"
    color="gray.500"
  >
    {children}
  </Box>
)
