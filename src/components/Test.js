import React, { useState } from 'react'

const Test = () => {
    const [email , setEmail]= useState('')
    const [emails , setEmails]= useState('')


    const submit =(e)=>{
        e.preventDefault()
        localStorage.setItem('email', email)
    // console.log(emails)
    setEmails(localStorage.getItem('email'))

    }

  return (
    <div>
        <form action="">
            <input type="email" onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit" onClick={(e)=>submit(e)}>submit</button>
        </form>
        <div className="sss">
            <h5>{emails}</h5>
        </div>
    </div>
  )
}

export default Test