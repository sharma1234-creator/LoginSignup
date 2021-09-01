// import React, { useState } from "react"
// import "./register.css"
// import axios from "axios"
// import { useHistory } from "react-router-dom"

// const Register = () => {

//     const history = useHistory()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
//         reEnterPassword: ""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password, reEnterPassword } = user
//         if( name && email && password && (password === reEnterPassword)){
       
//             axios.post("http://localhost:9003/register", user).then(res => console.log(res))
           
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     return (
//         <div className="register">
//             {console.log("User", user)}
//             <h1>Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
//             <div className="button" onClick={register} >Register</div>
//             <div>or</div>
//             <div className="button" onClick={() => history.push("/login")}>Login</div>
//         </div>
//     )
// }

// export default Register


// import React, { useState } from "react"
// import "./register.css"
// import axios from "axios"
// import { useHistory } from "react-router-dom"

// const Register = () => {

//     const history = useHistory()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
//         reEnterPassword: ""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password, reEnterPassword } = user
//         if( name && email && password && (password === reEnterPassword)){
//             axios.post("http://localhost:9002/register", user)
//             .then( res => console.log(res))
            
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     return (
//         <div className="register">
//             {console.log("User", user)}
//             <h1>Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
//             <div className="button" onClick={register} >Register</div>
//             <div>or</div>
//             <div className="button" onClick={() => history.push("/login")}>Login</div>
//         </div>
//     )
// }

// export default Register


import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()
    const [emails,setEmails] = useState();
    const [pass, setPass] = useState();
    const [repass, setRePass] = useState();
    // const [name, setName] = useState();
    const [register1,setRegister] = useState();

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

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

        if(e.target.name === "reEnterPassword"){
            if(user.reEnterPassword === user.password){
                setRePass("*RePassword must be same as password")
            } else{
                setRePass("");
            }
        }
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <p className="emailValid">{emails}</p>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <p className="passValid">{pass}</p>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <p className="repassValid">{repass}</p>
            <div className="button" onClick={register} >Register</div>

            
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register