//Goal here is to check whether user exists in local db, if not, create the entry
//tsconfig.json L23 path alias '@' for anything route
import { prisma } from "@/utils/db"
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  const userMatchInDb = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    }
  })

  if (!userMatchInDb) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }
  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()

  return(
    <div>
      Loading...
    </div>
  )
}

export default NewUser