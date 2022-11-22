
import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/cartempty.jpg';

export const CartEmpty: React.FC = () => (
  
    <div className="cart cart--empty">
            <h2>Корзина пуста <span>😕</span></h2>
            <p>
              Ви ще не обрали товар!<br/>
              Але це завжди можна виправити 😉
            </p>
            <img src={cartEmptyImg} alt="Empty cart" />
            <Link to="/Home" className="button button--black">
              <span>Вернутись назад</span>
            </Link>
          </div>
)


