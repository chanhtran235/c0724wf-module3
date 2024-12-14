import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/accountAction";
import {useNavigate} from "react-router-dom";
import {checkLogin} from "../services/accounServcie";
function LoginComponent() {

    const account = useSelector(state =>state.user.account )
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async ()=>{
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        const loginInfo ={
            username: username,
            password: password
        }
        console.log(loginInfo);
        // call API để checkLogin => kiểm trả có trong dB => OK
         const account = await checkLogin(loginInfo);
         dispatch(login(account));
         navigate("/products")
    }
    return (
        <form>
            <h3>Login</h3>
            <div>
                <label>Username</label>
                <input ref={usernameRef} name={'username'}/>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordRef} name={'password'}/>
            </div>
            <div>
              <button onClick={handleLogin} type={'button'}>Login</button>
            </div>
        </form>
    )
}
export default LoginComponent ;