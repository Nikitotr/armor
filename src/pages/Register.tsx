
import { Link } from 'react-router-dom'
import { SignUp } from '../components/SignUp';

const Ragiste:React.FC = () => {
  return (
    <div>
        <h1>Регістрація</h1>
        <SignUp />
  <p>
    Вже зареєстровані? <Link to="/LoginPages"> 
    <p className= "button"> Війти в акаунт </p> </Link>
  </p>
    </div>
  )
}

export default Ragiste;