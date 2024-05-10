'use client'
import { useForm } from 'react-hook-form'
import { createUser, deleteUser, updateUser } from '@/app/[locale]/(root)/actions'
import { useState } from 'react'

export default function TestForm(props: any) {
  const { register, watch, setValue, getValues, handleSubmit } = useForm()
  const [targetName, setTargetName] = useState({})
  const [showModal, setShowModal] = useState<boolean>(false)
  const updateUserName = getValues('new_username')
  const watchUpdateUserName = watch('new_username', '')

  const onSubmit = async (value: any) => {
    await createUser(value.username)
  }

  const onDeleteUserName = async (username: string, id: number) => {
    await deleteUser(username, id)
  }

  const onUpdateSubmit = async () => {
    //update data
    await updateUser(targetName, watchUpdateUserName)

    console.log(targetName)
    console.log(watchUpdateUserName)
  }

  return (
    <div>
      <h1>UserName List</h1>
      <ul>
        {props.userNames.map((item: any) => (
          <li key={item.id}>
            <span>{item.username}</span>
            <div>
              <p
                onClick={() => {
                  //open Modal
                  setShowModal(true)

                  //set prev Name
                  setTargetName({ username: item.username, id: item.id })

                  //set default value
                  setValue('new_username', item.username)
                }}
              >
                ✏️
              </p>
              <p onClick={() => onDeleteUserName(item.username, item.id)}>❌</p>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input autoFocus={true} {...register('username', { required: true })} type="text" placeholder="username" />
        <button type="submit">submit</button>

        {showModal && (
          <div>
            <h1>사용자 이름 수정하기</h1>
            <input {...register('new_username', { required: true })} autoFocus={true} type="text" />
            <button type="button" onClick={onUpdateSubmit}>
              수정하기
            </button>
            <div onClick={() => setShowModal(false)}>닫기</div>
          </div>
        )}
      </form>
    </div>
  )
}
