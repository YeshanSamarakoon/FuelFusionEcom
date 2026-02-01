import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import Navbar from '../Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { TbShoppingCartBolt } from "react-icons/tb";  
import user from '../../assets/user.svg';
import { Shop } from '../../context/Shop';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const {getTotalCartItems} = useContext(Shop);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]);

  return (
    <header className='max-padd-container w-full z-50'>
      <div className='flexBetween py-3'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center gap-x-2'>
          <img src={logo} alt='logoImg' height={60} width={60} />
          <div className='bold-24 hidden xs:flex italic'>FUELFUSION</div>
        </Link>
        {/*Navigation bar*/}
        <div className='flexCenter gap-x-4'>
          {/*desktop navbar */}
          <div>
            <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 medium-20 rounded-full px-2 py-1"} />
          </div>
          {/*mobile navbar */}
          <div className='md:hidden'>
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "flex flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-20 ring-1 ring-slate-900/5 transition-all duration-500 z-50"
                  : "hidden flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-20 ring-1 ring-slate-900/5 transition-all duration-500 z-50 -right-[100%]"
              }`}
            />
          </div>
          {/*Buttons*/}
          <div className='flexBetween gap-x-3 sm:gap-x-2 bold-16'>
            <div className='md:hidden'>
              {!menuOpened ? (
                <MdMenu className=' cursor-cell  text-3xl hover:text-secondary duration-500' onClick={toggleMenu} />
              ) : (
                <MdClose className=' cursor-cell  text-3xl hover:text-secondary duration-500' onClick={toggleMenu} />
              )}
            </div>
            <div className='flexBetween sm:gap-x-0'>
              <NavLink to={'/cart'} className={'flex'}>
                <TbShoppingCartBolt className='p-2 h-12 w-12 hover:text-secondary duration-500' />
                <span className='relative flexCenter w-5 h-5 rounded-xl bg-secondary text-primary medium-14 -top-2 right-3'>{getTotalCartItems()}</span>
              </NavLink>
              <NavLink to={'/Login'} className={'btn-secondary flexCenter gap-x-5 bold-16 rounded-full'}>
                <img src={user} alt="" height={19} width={19} />
                LOGIN 
              </NavLink> 
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;