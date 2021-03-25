import React from 'react';
import '../css/login.css';
import '../css/bootstrap.min.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
class LoginForm extends React.Component {
    render() {

        const loginfrm = (
            <div class="container">
              
                <form class="logfr">
                    <div class="contlog">
                        
                    
                <h1>login</h1>
                    <div class="input">
                        <div class="input-group">
                            <span class="input-group-text" id="addon-wrapping"> <AlternateEmailIcon /></span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                                id="email"/>

                        </div>

                    </div>

                    <div class="input">

                        <div class="input-group">
                            <span class="input-group-text" id="addon-wrapping">   <LockOpenIcon /> </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                                id="email"/>

                        </div>

                    </div>
                    {
                        /*    <div>
                        <input type="password" id="pwd" class="input"/>
                    </div>*/
                    }

                    <button type="submit" class="btn btn-success" id="btn-success">Login</button>
                    <button class="btn btn-secondary" id="btn-reset">Sign-up</button>
                    </div>
                </form>

            </div>
        );

        return loginfrm;
    }
}

export default LoginForm;