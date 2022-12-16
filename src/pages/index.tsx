import { Heading, Box, Center } from '@chakra-ui/react'
import { PageShell } from '~/components/PageShell'
import { PageTitle } from '~/components/PageTitle'
import { PageBody } from '~/components/PageBody'
import { PageFooter } from '~/components/PageFooter'

export default function Home() {
  return (
    <PageShell>
      <PageTitle>Coji&apos;s Hello GitHub App!</PageTitle>
      <PageBody>Hello!</PageBody>
      <PageFooter>Copyright &copy; coji</PageFooter>
    </PageShell>
  )
}
