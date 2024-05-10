'use server'
import TestForm from '@/app/[locale]/(root)/components/testForm'
import { getUserNames } from '@/app/[locale]/(root)/actions'

export default async function Home() {
  const userNames = await getUserNames()

  return (
    <div>
      <TestForm userNames={userNames} />
    </div>
  )
}
