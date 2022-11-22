import React from 'react';
//import { Value } from 'sass';
type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
}

const categories =['Всі' , ' Бойові пістолети' , 'Травматичні пістолети', 'Гвинтівки', 'Патрони', 'Інше'];
export const Categories: React.FC <CategoriesProps>= React.memo (({ value, onChangeCategory}) =>{
    return(
      <div className="categories">
              <ul>
              {categories.map((categoyName, index) =>( 
              <li  key={index} 
              onClick = {() =>  onChangeCategory(index)}
               className={value ===  index ?'active' : ''}>
                {categoyName}
                </li> 
                ))}
              </ul>
            </div>
    )
  });
  // export default Categories;
  