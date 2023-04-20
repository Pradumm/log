import React, { useEffect, useState } from 'react'
import { Link, useNavigate, } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const Navigate = useNavigate()

  const HandleForm = () => {

    const localuser = JSON.parse(localStorage.getItem("item"))

    localuser.map((item) => {
      // console.log("---------", item.email)
      if (item.email === email && item.pass === pass) {
        localStorage.setItem("loggin", true)
        Navigate("/Profle")
      } else {
        alert("Email is not valid")
      }


    })



  }
  return (

    <>
      <div className=" container-fluid d-flex justify-content-center align-items-center py-5  text-white bg-dark" style={{ height: "100hv" }}>
        <div className='bg-secondary py-5 px-5  rounded-2'>
          <div>
            <h2 className='text-center text-white'> Login </h2>
          </div>
          <form className=''>

            <div class="mb-3 col-sm-mb-0  ">
              <input type="email" class="form-control" aria-describedby="emailHelp"
                value={email} onChange={(e) => setemail(e.target.value)} />
              {email}
              <label for="exampleInputEmail1" class="form-label"> Your email</label>
            </div>
            <div class="mb-3 col-sm-mb-0">
              <input type="password" class="form-control" aria-describedby="emailHelp"
                value={pass} onChange={(e) => setpass(e.target.value)} />
              <label for="exampleInputEmail1" class="form-label"> Password</label>
            </div>

            <div className='my-3 text-center col-sm-mb-0'>
              <button type="button" class="btn btn-primary" onClick={HandleForm}>Submit</button>
            </div>
            <div className='text-center mt-3'>
              <span> Have already a account <Link to="/"> register</Link> </span>
            </div>

          </form>
        </div>
      </div>

    </>

  )
}

export default Login