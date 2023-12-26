import {Link} from 'react-router-dom'
import { FaBars} from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';
import MenuData from './data/MenuData';


const Navigations=()=>{

    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = ()=>setShowMenu(!showMenu)



    return(

        <aside>

            <div className='navbar'>
                <div className='nav-toggle'>
                <Link to='#'className='menu-bar'>
                <FaBars onClick={toggleMenu}/>
                </Link>
                </div>
           

           <nav className={showMenu ? 'nav-menu active':'nav-menu'}>

            <ul className='nav-menu-item' onClick={toggleMenu}>

                <li className='nav-toggle'>
                    <Link to='#'className='menu-bar'>

                        <FaWindowClose onClick={toggleMenu}/>
                        
                    </Link>
                </li>

                
                {MenuData.map((menu,index)=>{

                    return(

                    <li className='menu-text'key={index}>
                    <Link to={menu.path}>
                        {menu.icon}
                        <span>{menu.title}</span>
                    </Link>
                    </li>

                    )

                })}
                

                
            </ul>

           </nav>
           </div>

        </aside>

    )

}

export default Navigations