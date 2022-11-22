 import Down from '../components/Down';
import {Header} from '../components';
import React from 'react'
import { Outlet } from 'react-router-dom';


const MainLayout:React.FC = () => {
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
            <Outlet/>
        <hr></hr>
        <Down/> 
    </div>
     </div>

  )
}

export default MainLayout;