import React, { Component } from "react";
import './LoginPage.css'
import Grid from "@material-ui/core/Grid";
import insta_image from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png'

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={insta_image} width="454px"/>
                            </div>
                            <div>
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage_logo" src={insta_logo}/>
                                    <div className="loginpage_signin">
                                        <input className="loginpage_text" type="text" placeholder="Phone number, username, or email"/>
                                        <input className="loginpage_text" type="password" placeholder="Password"/>
                                        <button className="loginpage_button">Log In</button>

                                        <div className="loginpage_ordiv">
                                            <div className="loginpage_divider"></div>
                                            <div className="loginpage_or">OR</div>
                                            <div className="loginpage_divider"></div>
                                        </div>

                                        <div className="loginpage_fb">
                                            <img src={fb} width="15px" style={{ "marginRight": "5px"}}/>Log in with facebook</div>
                                        <div className="loginpage_forgot"> Forgot password?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        );    
    }
     
}

export default LoginPage;