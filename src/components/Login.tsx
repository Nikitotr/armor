import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../redux/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAuth/redux-hooks';


const Login:React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              console.log(user);
              dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.refreshToken,
              }));
              navigate('/Home');
          })
          .catch(() => alert('Invalid user!'))
  }

  return (
      <Form
          title="sign in"
          handleClick={handleLogin}
      />
  )
}

export {Login}


