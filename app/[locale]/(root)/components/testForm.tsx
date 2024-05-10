'use client'
import { useForm } from 'react-hook-form'
import { createUser, deleteUser } from '@/app/[locale]/(root)/actions'

export default function TestForm(props: any) {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (value: any) => {
    await createUser(value.username)
  }

  const onDeleteUserName = async (username: string, id: number) => {
    await deleteUser(username, id)
  }

  return (
    <div>
      <h1>UserName List</h1>
      <ul>
        {props.userNames.map((item: any) => (
          <li key={item.id}>
            <span>{item.username}</span>
            <span>
              <em>✏️</em>
              <em onClick={() => onDeleteUserName(item.username, item.id)}>❌</em>
            </span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username', { required: true })} type="text" placeholder="username" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
