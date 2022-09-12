import React, { useState } from 'react'


export default function NewUserForm(props: any) {

  const [enteredName, setEnteredName] = useState ("")
  const [enteredBirthday, setBirthday] = useState("")
  const [enteredSalary, setSalary] = useState("")
  const [enteredGender, setGender] = useState("")

  //Stores value in state
  const nameChangeHandler = (event: any) => {
    setEnteredName(event.target.value);
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

  const submitHandler = (event: any) => {
    event.preventDefault()

    const userData = {
      name: enteredName,
      birthday: enteredBirthday,
      salary: enteredSalary,
      gender: enteredGender
    }
    
    props.onSaveUserData(userData)
    setEnteredName("")
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
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>
        <div className='new-user'>
          <label>Birthday</label>
          <input
            type="date"
            min="2022-06-09"
            onChange={birthdayChangeHandler}
            value={enteredBirthday}
          />
        </div>
        <div className='new-user'>
          <label>Salary</label>
          <input
            type="number"
            min="100"
            onChange={salaryChangeHandler}
            value={enteredSalary}
          />
        </div>
        <div className='new-user'>
          <label>Gender</label>
          <input
            type="text"
            onChange={genderChangeHandler}
            value={enteredGender}
          />
        </div>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  )
}
