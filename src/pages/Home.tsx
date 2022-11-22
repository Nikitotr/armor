import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';


// import Categories from '../components/Categories';
// import Pagination from '../components/Pagination';
// import Sort from '../components/Sort';
// import WeaponBlock from '../components/WeaponBlock';
// import { Skeleton } from 'components/WeaponBlock/Skeleton';
 import {Skeleton, Sort, Categories, Pagination, WeaponBlock } from '../components';


import { useAppdispatch } from 'redux/store';
import { selecFilter } from 'redux/filter/selectors';
import { selectWeaponData } from 'redux/weapon/selectors';
import { setCategoryId, setCurrentPage } from 'redux/filter/slice';
import { fetchWeapons } from 'redux/weapon/asyncActions';
import image from './image.jpg';
import { Slider } from 'components/slider/slider';
// import { Slider } from 'components/slider';


const Home:React.FC = () => {
  
  // const { email} = useAuth(); //рег
  const navigate = useNavigate();
  const dispatch = useAppdispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);


  const {items, status} = useSelector(selectWeaponData);
  const {categoryId, sort, currentPage, searchValue} = useSelector(selecFilter);
  
 

  const onChangeCategory = React.useCallback ((index:number) => { 
    dispatch(setCategoryId(index));
  }, []);

  const onChangePage = (page:number) => {
    dispatch(setCurrentPage(page));
  };
  
const getArmor = async () => {
  
    const order =sort.sortProperty.includes('-') ? 'asc' : 'desc'; 
    const sortBy = sort.sortProperty.replace('-', '');
    const category  = categoryId > 0 ? `category=${categoryId}`: '';
    const search = searchValue ? `&search=${searchValue}` : '';


  dispatch(
    fetchWeapons({
    order,
    sortBy,
    category,
    search,
    currentPage: String(currentPage),
  }),
  );
window.scrollTo(0, 0);
};
// якщо змінили параметри і був перший рендер 
// React.useEffect(() => {
//   if (isMounted.current) {
//     const params = {
//       categoryId: categoryId > 0 ? categoryId : null,
//       sortProperty: sort.sortProperty,
//       currentPage,
//     };
//     const queryString = qs.stringify(params, {skipNulls: true});

//     navigate(`?${queryString}`);
//   }
//   if (window.location.search){
//     console.log(111)
//     dispatch(fetchWeapons({} as SearchWeaponParamss ));
//   }
// }, [categoryId, sort.sortProperty, currentPage, searchValue]);

// якщо був перший рендер то перевіряємо URL-параментр та зберігаємо в редуксі.
//   React.useEffect(() => {
//     if (window.location.search) {
//       const params =qs.parse(window.location.search.substring(1)) as unknown as SearchWeaponParamss;
//       const sort = sortList.find(obj => obj.sortProperty === params.sortBy);
    
//         dispatch(setFilters({
//           searchValue: params.search,
//         categoryId: Number(params.category),
//           currentPage: Number (params.currentPage),
//           sort: sort || sortList[0],

//         }));
//       }
//       isMounted.current = true; 
//     },
// []) ;

//   // якщо був перший рендер то запрашиваем товар

   React.useEffect(() => {
     getArmor();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  
  const armor = items.map((obj:any) => <WeaponBlock key={obj.id} {...obj} />
  );
  
  // id ={object.id}
  //   title={object.title } 
  //   price={object.price} 
  //   imageUrl={object.imageUrl} 
  //   sizes={object.sizes}
  //   types={object.types}
  //   />);
  
  const skeletons = [...new Array(6)].map((_, index)=> <Skeleton key={index} />);
   
    
    


    
    return (
      
      <div className="container">
         <Slider reviews={[
      {
        id: 1,
        name:'WeaponAndArmor', 
        jobPosition: 'Магазин для людей, а не для орків', 
        text: 'Захисти себе від ворога! Тут ти зможеж придбати зброю та спорядження', 
        image: image,
      },

      {
        id: 2, 
        name:'Володимир Зеленський', 
        jobPosition: 'Президент', 
        text: 'Дуже задоволений данним сайтом', 
        image: image,
      },
    ]}/> 
                 <div className="content__top">
          <Categories value ={categoryId}
           onChangeCategory={onChangeCategory} />
          <Sort value ={sort}/>
        </div>

        
        
        <h2 className="content__title">Вся амуніція</h2>
        {/* <button
        onClick= {()=> dispatch(removeUser())}
         > log out from {email}</button>    */} 
        {
          status === 'error' ? (
          <div className="content__error-info"> 
            <h2>Виникла помилка<span>😕</span></h2>
            <p>
              Не вдалося завантажити сторінку
            </p>
          </div> ) : ( <div className="content__items"> {status === 'loading' ? skeletons: armor} </div>
        )}
          

        
        <Pagination currentPage = {currentPage} onChangePage={onChangePage}/>
        
        </div>
        
   
      //  <Navigate to="/login" />
      
    )
        };
        export default Home;