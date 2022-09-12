import React from 'react'
import NewUserForm from './NewUserForm';

export default function NewUser(props: any) {

  const saveUserDataHandler = (enteredUserData: any) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString()
    }
    
    props.onAddUser(userData)
  }

  return (
    <div className='new-user'>
        <NewUserForm onSaveUserData={saveUserDataHandler}/>
    </div>
  )
}
