import React, { Component } from "react";
import './LoginPage.css'
import Grid from "@material-ui/core/Grid";
import insta_image from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'
import SignIn from "../SignIn/SignIn";

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

                                        <SignIn/>

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

                                <div className="loginpage_signupoption">
                                    <div className="loginpage_signin">
                                        Don't have an account? <span style={{"fontWeight":"bold","color":"#0395f6"}}>Sign up</span>
                                    </div>
                                    <div className="loginpage_signup">
                                        Have an account? <span style={{"fontWeight":"bold","color":"#0395f6"}}>Sign in</span>
                                    </div>
                                </div>

                                <div className="loginpage_downloadsection">
                                    <div>
                                        Get the app.
                                    </div>
                                    <div className="loginpage_option">
                                        <img src={appstore} className="loginpage_dwimg" width="136px"/>
                                        <img src={playstore} className="loginpage_dwimg" width="136px"/>
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