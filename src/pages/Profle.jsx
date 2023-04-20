import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profle = () => {
 
    const Navigate = useNavigate()
   const Logoutuser= ()=>{
     localStorage.removeItem("loggin")
     Navigate("/")
   }

    return (
        <>

            <div className="container-fluid d-flex justify-content-center align-items-center py-5  text-white bg-dark" style={{ height: "100hv" }}>
                <div>
                    <h2 className='text-white'> Welcome</h2>
                    <button type="button" class="btn btn-outline-light" onClick={Logoutuser}>LogOut</button>
                </div>


            </div>

        </>
    )
}

export default Profle