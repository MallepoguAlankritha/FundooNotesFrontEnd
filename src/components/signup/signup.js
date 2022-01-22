import React from "react";
import './signup.css';
import { Register } from '../../../src/Services/userService'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from '../../image/img.jpg'
import Image1 from '../../image/GoogleIcon.png'
const emailRegex = /^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const SignUp = () => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [regexObj, setRegexObj] = React.useState({ firstNameBorder: false, lastNameBorder: false, emailBorder: false, paasswordBorder: false })
    const [regexhelpertext, sethelpertext] = React.useState({ firstNameHelperText: "", lastNameHelperText: "", emailHelperText: "", passwordHelperText: "" })

    const getMail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const getFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const getLastName = (e) => {
        setLastName(e.target.value)
    }
    const submit = () => {
        if (email === "" && password === "" && firstName === "" && lastName === "") {
            setRegexObj({ ...regexObj, firstNameBorder: true, lastNameBorder: true, emailBorder: true, passwordBorder: true })
            sethelpertext({ ...regexhelpertext, firstNameHelperText: "Enter a correct First Name", lastNameHelperText: "Enter a correct Last Name", emailHelperText: "Enter correct email", passwordHelperText: "Enter correct password" })
        }
        else {
            const firstNameValidPattern = firstNameRegex.test(firstName)
            const lastNameValidPattern = lastNameRegex.test(lastName)
            const emailValidPattern = emailRegex.test(email)
            const passwordValidPattern = passRegex.test(password)
            console.log("12", firstNameValidPattern);
            console.log("22", lastNameValidPattern);
            console.log("33", emailValidPattern);
            console.log("44", passwordValidPattern);
            if (firstNameValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    firstNameBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    firstNameHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    firstNameBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    firstNameHelperText: "Enter the correct first name"
                }))
            }
            if (emailValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailHelperText: "Enter the corret email"
                }))
            }
            if (passwordValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordHelperText: "Enter the corret password"
                }))
            }
            if (lastNameValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    lastNameBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    lastNameHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    lastNameBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    lastNameHelperText: "Enter the corret lastname"
                }))
            }
            if (emailValidPattern === true && passwordValidPattern === true && firstNameValidPattern === true && lastNameValidPattern === true) {
                let obj = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password
                }

                Register(obj).then((res) => {
                    console.log(res)
                })
                    .catch((err) => {
                        console.log(err)
                    })
                console.log(obj);
            }
        }
    }
    return (
        <div className="Box-class">
            <div className="container">
                <div className="form-class">
                    <div className="image">
                      <img src= {Image} alt="Img" style={{width:"80px"}}></img>
                     </div>
                    <div className='heading'>
                        <p>Create Your Google account</p>
                    </div>
                    <div className='name'>
                        <div className='firstname'>
                        <TextField id="outlined-basic" onChange={getFirstName} error={regexObj.firstNameBorder} helperText={regexhelpertext.firstNameHelperText} label="FirstName" variant="outlined" size ="small" />
                        </div>
                        <div className='lastname'>
                        <TextField id="outlined-basic" onChange={getLastName} error={regexObj.lastNameBorder} helperText={regexhelpertext.lastNameHelperText} label="LastName" variant="outlined" size ="small" />
                        </div>
                    </div>
                    <div className='email'>
                    <TextField id="outlined-basic" onChange={getMail} error={regexObj.emailBorder} helperText={regexhelpertext.emailHelperText} label="Email" variant="outlined" size ="small" />
                    </div>
                    <div className='textarea'>
                        You can use letters, numbers & periods
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                        <TextField id="outlined-basic" onChange={getPassword} error={regexObj.passwordBorder} helperText={regexhelpertext.passwordHelperText} label="Password" variant="outlined" size ="small" />
                        </div>
                        <div className='confirm'>
                        <TextField id="outlined-basic" label="Confirm" variant="outlined" size ="small" />
                        </div>
                    </div>
                    <div className='meta-text'>
                        Use 8 or more characters with a mix of letters,numbers,
                        symbols
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" id="Show password" name="Show password" value="box"></input>
                        <label for="Show password">  Show password</label>
                    </div>
                    <div className='button'>
                        <div className='link'>
                            <h4><a href='sign'>SignIn Instead</a></h4>
                        </div>
                        <div className="button-end">
                            <Button onClick={submit} variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                <img src= {Image1} alt="Img" style={{width:"120px"}}></img>
                </div>
            </div>
        </div>
    )
}

export default SignUp 