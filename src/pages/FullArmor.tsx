import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


 const FullArmor: React.FC = () => {
    
    const [armor, setArmor] = React.useState<{
      imageUrl: string;
      title: string;
      description: string;
      price: number;
    }>({
      imageUrl: '',
      title: '',
      description: '',
      price: 0,
    });
    const {id} = useParams();
    const navigate = useNavigate();

React.useEffect(() => {
async function fetchArmor() {
    try {
    const {data}= await axios.get('https://6303346c0de3cd918b2fc4ea.mockapi.io/items/' + id);
    setArmor(data);
    } catch (error) {
       alert('Ошибка при загрузці товару');
       navigate('/home');
    }
}
fetchArmor();
}, []);
if (!armor) {
    return <>Завантаження...</>;
}

  return (
    <div className="container">
        <img src={armor.imageUrl} />
        <h2>{armor.title}</h2>
        <p> {armor.description}</p>
        <h4> {armor.price}</h4>
        <Link to= "/Home">
        <button  className="button button--outline button--add">
            <span>Повернутись назад</span>
          </button>
          </Link>
    </div>
  )
}
export default FullArmor;
