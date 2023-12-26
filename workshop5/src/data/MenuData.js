import { FaUserGroup,FaHouseChimney,FaCartShopping,FaUserTie } from "react-icons/fa6";

const MenuData =[
    {
        title:'หน้าแรก',
        path:'/',
        icon:<FaHouseChimney/>
    },
    {
        title:'สมาชิก',
        path:'/member',
        icon:<FaUserGroup/>
    },
    {
        title:'สินค้า',
        path:'/product',
        icon:<FaCartShopping/>
    },
    {
        title:'แอดมิน',
        path:'/admin',
        icon:<FaUserTie/>
    }

]

export default MenuData