import logoSvg from '../assets/img/armor-logo.svg';
function Down(){
    return(
      <div className="Cart">
        <ul>
                <li className="active">Weapon:
                <img width="30" src={logoSvg} alt="Weapon logo" /> </li>
                <li>Час работи:9:00-18:00</li>
                <li>Прийом замовлення: 24/7</li>
                <li>м.Чернігів вул.Шевченка 13 </li>
                <li className="text">Зв'язатися за телефоном:<a href = "tel:+380663323724" > (066) 332 3724</a> </li>
                <li className="text"> Написати лист на: <a href = "mailto:nikitotr@gmail.com" > nikitotr@gmail.com </a></li>
              </ul>
              <div>
              <iframe className="displayed" width="480" height="300" src="https://www.youtube.com/embed/XXC_cUgV6DI" title="Бойове спорядження. Що взяти на війну для виконання бойових завдань?" frameBorder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            </div>
    )
  }
  export default Down 