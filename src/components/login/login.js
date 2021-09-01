// import React,{useState} from 'react';
// import "./login.css";
// import axios from "axios";
//  const Login = () => {

//     const [ user, setUser] = useState({
//         email: "",
//         password: "",
//     })

//     const handleChange = e =>{
//         const { name, value } = e.target;     
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () =>{
//         axios.post("http://localhost:9002/login", user)
//         .then(res => alert(res.data.message))
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
//             <div className="button" onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button">Register</div>
//         </div>
//     )
// }

// export default Login;



import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()
    const [emails,setEmails] = useState();
    const [pass, setPass] = useState();

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const [ludo, setLudo] = useState();


    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

        if(e.target.name === "email"){
            if(!user.email.includes("@")){
              setEmails("*Invalid Email.. must contain @");
            } else{
                setEmails("");
            }
        } 

        if(e.target.name === "password"){
            if(user.password.length<5){
                setPass("*Password must contain atleast 5 length");
            } else{
                setPass("");
            }
        }
    }

   
    const login = () => {

       
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
     
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <p className="emailValid">{emails}</p>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <p className="passValid">{pass}</p>
            <div className="button" type="submit" onClick={login}>Login</div>
          
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login;