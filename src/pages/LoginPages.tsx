import { Login } from '../components/Login';

import { Link } from 'react-router-dom'

const LoginPages:React.FC = () => {
  return (
    <div>
    <h1>Login</h1>
    <Login /> 
  <p>
    or <Link to="/register">register</Link>
  </p>
  </div>
    )

}

export default LoginPages;  