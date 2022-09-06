import React, { useState } from 'react'


export default function NewUserForm(props: any) {

  const [name, setName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [salary, setSalary] = useState("")
  const [gender, setGender] = useState("")


  const nameChangeHandler = (event: any | undefined) => {
    setName(event.target.value)
  }

  const birthdayChangeHandler = (event: any | undefined) => {
    setBirthday (event.target.value)
  }

  const salaryChangeHandler = (event: any | undefined) => {
    setSalary(event.target.value)
  }

  const genderChangeHandler = (event:any | undefined) => {
    setGender(event.target.value)
  }

  const submitHandler = (event: any | undefined ) => {
    event.preventDefault()

    const userData = {
      fullName: name,
      birthday: new Date(birthday),
      salary: salary,
      gender: gender
    }

    props.onSaveUserData(userData)
    setName("")
    setBirthday("")
    setSalary("")
    setGender("")
  }


  return (
    <form onSubmit={submitHandler}>
      <div className='new-user__container'>
        <div className='new-user'>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-user'>
          <label>Birthday</label>
          <input
            type="date"
            min="2022-06-09"
            value={birthday}
            onChange={birthdayChangeHandler}
          />
        </div>
        <div className='new-user'>
          <label>Salary</label>
          <input
            type="number"
            min="100"
            value={salary}
            onChange={salaryChangeHandler}
          />
        </div>
        <div className='new-user'>
          <label>Gender</label>
          <input
            type="text"
            value={gender}
            onChange={genderChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  )
}
