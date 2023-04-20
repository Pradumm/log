import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./register.css"
const Register = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    const [user, setuser] = useState([])

    const Navigate = useNavigate()
    const HandleForm = () => {

        const book = {
            name,
            email,
            pass
        }

        setuser([...user, book])
        setemail("")
        setname("")
        setpass("")

       

    }

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(user))
    })

    return (

        <>



            <div>
                <h2 className='text-center'> Create An Account </h2>
            </div>
            <form className=''>

                <div class="  mb-3 col-sm-mb-0">
                    <input type="text" class="form-control" aria-describedby="emailHelp"
                        value={name} onChange={(e) => setname(e.target.value)} />
                    <label for="exampleInputEmail1" class="form-label"> Your Name</label>
                </div>
                <div class="mb-3 col-sm-mb-0  ">
                    <input type="email" class="form-control" aria-describedby="emailHelp"
                        value={email} onChange={(e) => setemail(e.target.value)} />
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
                    <span> Have already a account <Link to="/Login">Login here</Link> </span>
                </div>

            </form>

        </>

    )
}

export default Register