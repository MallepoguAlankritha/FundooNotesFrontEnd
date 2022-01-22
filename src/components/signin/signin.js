import React from "react";
import './sign.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from '../../image/img.jpg'

function Signin() {
    return (
        <div className="Container">
     <div className="image">
 
            <img src= {Image} alt="Img" style={{width:"50px"}}></img>
        </div>
              <div className='sign'>
                    <h2>Sign In</h2>
               </div>
                    <div className='use'>
                          <h5>Use Your Google Account</h5>
                </div>
                 <div className='email'>
                    <TextField id="outlined-basic" label="email" variant="outlined" size ="small" />
                   </div>
                <div className="password">
                     <TextField id="outlined-basic" label="password" variant="outlined" size ="small" />
                     </div>
                 <div className='textletter'>
                        Not your computer? Use Guest mode to sign in.
                        </div>
                <div className='account'>
                    <h2 className='accountcolor'><a id = "GFG"href='sign.css'>Create account</a></h2>
                    <div className='btm'>
                        <Button variant="contained">Next</Button>
                    </div>
                </div>
            </div>
    );

}
export default Signin; 