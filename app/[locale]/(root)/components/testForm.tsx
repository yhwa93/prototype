'use client'
import { useForm } from 'react-hook-form'
import { createUser } from '@/app/[locale]/(root)/actions'

export default function TestForm(props: any) {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (value: any) => {
    await createUser(value.username)

    console.log(value.username)
  }

  return (
    <div>
      <h1>UserName List</h1>
      <ul>
        {props.userNames.map((item: any, idx: number) => (
          <li key={item.username}>{item.username}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username', { required: true })} type="text" placeholder="username" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
