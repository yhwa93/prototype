'use server'
import db from '../../../lib/db'

export async function createUser(formData: any) {
  console.log(formData)

  await db.users.create({
    data: {
      username: formData,
    },
  })
}

export async function getUserNames() {
  const userNames = await db.users.findMany({
    select: {
      username: true,
    },
  })

  return userNames
}
