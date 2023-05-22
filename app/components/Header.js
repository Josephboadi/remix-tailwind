import React from 'react';
// import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/white.png';
import smalllogo from '../assets/logo.jpeg';
import { MdMenuOpen, MdClose, MdMenu, MdSettingsPower } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
// import useLogout from "../hooks/useLogout";
import { Form, useNavigate } from '@remix-run/react';

const Header = ({ toggle, toggleLogo, toggleSidbar, toggleSide }) => {
  return (
    <header className='w-full h-[8vh] bg-[#fff]  flex flex-row items-center'>
      <div className='flex-1 flex items-center mr-4'>
        <div className='flex items-center gap-3 flex-1'>
          <div className='flex items-center sm:ml-2 gap-3'>
          <img
          src={smalllogo}
          alt='Logo'
          className={`block sm:hidden w-[40px] h-[40px] object-contain rounded-full`}
        />
            {toggle ? (
              <MdMenuOpen
                onClick={toggleLogo}
                className='hidden sm:block text-2xl text-[#26a69a] cursor-pointer hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300'
              />
            ) : (
              <MdClose
                onClick={toggleLogo}
                className='hidden sm:block text-2xl text-[#26a69a] cursor-pointer hover:rotate-180 hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300'
              />
            )}

            {toggleSide ? (
              <MdClose
                onClick={toggleSidbar}
                className='block sm:hidden text-2xl text-[#26a69a] cursor-pointer hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300'
              />
            ) : (
              <MdMenu
                onClick={toggleSidbar}
                className='block sm:hidden text-2xl text-[#26a69a] cursor-pointer hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300'
              />
            )}

            <div className='flex-1 flex justify-center items-center'>
              
              <h1 className='text-[#26a69a] text-lg font-bold'> CalAuth</h1>
            </div>
          </div>
        </div>
        <Form method='post' action='/logout' id='logout-form'>
          <button className='cta'>
            <MdSettingsPower className=' text-3xl text-[#26a69a] font-black shadow-sm cursor-pointer hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300' />
          </button>
        </Form>
        {/* <div onClick={signOut}>
          <BiLogOutCircle className=" text-3xl text-red-500 font-black shadow-sm cursor-pointer hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
