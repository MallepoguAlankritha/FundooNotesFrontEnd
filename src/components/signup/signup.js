import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from '../../image/img.jpg'
import Image1 from '../../image/GoogleIcon.png'
const SignUp = () => {
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
                        <TextField id="outlined-basic" label="FirstName" variant="outlined" size ="small" />
                        </div>
                        <div className='lastname'>
                        <TextField id="outlined-basic" label="LastName" variant="outlined" size ="small" />
                        </div>
                    </div>
                    <div className='email'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" size ="small" />
                    </div>
                    <div className='textarea'>
                        You can use letters, numbers & periods
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                        <TextField id="outlined-basic" label="Password" variant="outlined" size ="small" />
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
                            <Button variant="contained">Next</Button>
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