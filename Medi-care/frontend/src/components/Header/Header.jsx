
import {useEffect,useRef} from 'react'; 
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import {NavLink,Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
const navlinks=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find a Doctor'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    },

    {
        path:'/login',
        display:'Login',

    },
    

]
const Header = () => {

    const header= useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                header.current.classList.add('sticky_header');
            }else{
                header.current.classList.remove('sticky_header');
            }
        })
    }
    useEffect(()=>{
        handleStickyHeader()

        return ()=>window.removeEventListener('scroll',handleStickyHeader)
    });

    const toggleMenu=()=>window.removeEventListener("scroll",handleStickyHeader);

    return ( <header className="header flex items-centre" ref={header}>
        <div className="container">
            <div className="flex items-centre justify-between ">
                {/* ========Logo==== */}
                <div>
                    <img src={logo} alt="" />
                </div>

                {/* =======menu===== */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu flex items-centre gap-[2.7rem]">
                     {
                        navlinks.map((link,index)=> (
                        <li key={index}>
                            <NavLink 
                            to={link.path} 
                            className={navClass =>  
                            navClass.isActive  
                            ?"text-primaryColor text-[16px] leading-7 font-[600]"
                            :"text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                            }
                            >
                                 {link.display}
                                </NavLink>

                        </li> 
                     ))}
                    </ul>
                </div>

                {/* ======nav right ==== */}
                <div className="flex items-center gap-4">
                    <div className="hidden">
                        <Link to='/'>
                        <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                            <img src={userImg} className="w-full rounded-full" alt=""  />
                        </figure>
                        </Link>
                    </div>

                    {/* <Link to='/login'>
                        <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-centre
                        justify-center rounded-[50px]">
                        Login
                        </button>
                    </Link> */}

                    <span className="md:hidden" onClick={toggleMenu}>
                        <BiMenu className='w-6 h-6 cursor-pointer' />

                    </span>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;