'use server'
import db from '../../../lib/db'
import { prefix } from 'stylis'

export async function createUser(formData: any) {
  console.log('Create This User ========>', formData)

  await db.users.create({
    data: {
      username: formData,
    },
  })
}

export async function deleteUser(username: string, id: number) {
  console.log('Delete This User ========>', username, id)

  await db.users.delete({
    where: {
      id,
      username,
    },
  })
}

export async function updateUser(prevData: any, updateData: any) {
  console.log('Update This User ========>', prevData, updateData)

  await db.users.update({
    where: {
      id: prevData.id,
      username: prevData.username,
    },
    data: {
      username: updateData,
    },
  })
}

export async function getUserNames() {
  const userNames = await db.users.findMany({
    select: {
      id: true,
      username: true,
    },
  })

  return userNames
}
