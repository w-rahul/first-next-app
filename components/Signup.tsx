"use client"

import { signup } from "@/app/actions/user"
import { useState } from "react"

export const Signup = () =>{

  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")

    return <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center text-black"> 
        <div className="border p-8 bg-zinc-900 rounded-3xl"> 
            <input className="m-2 p-3 rounded-xl " type="text" placeholder="Name" 
            onChange={(e)=>{
              setemail(e.target.value)
            }} />
            <br />
            <input className="m-2 p-3 rounded-xl" type="text" placeholder="Password" 
            onChange={(e)=>{
              setpassword(e.target.value)
            }}/>
            <br />
            <div className="flex justify-center m-3">
            <button className="bg-white text-black p-3 rounded-xl" 
            onClick={()=>{
              signup(email,password)
            }}>Sign up</button>
            </div>
        </div>
      </div>
    </div>
}