import { useEffect, useState } from 'react';
import logo from '../assets/calbank-logo.webp';
import smalllogo from '../assets/logo.jpeg';
import SidebarItem from './SidebarItem';
// import logo from '../assets/user.jpeg';
import { FaUserEdit } from 'react-icons/fa';

import { useLocation } from '@remix-run/react';
import { MdClose } from 'react-icons/md';

const Side = ({ route, toggle, toggleSidbar, toggleSide }) => {
  const location = useLocation();
  // const { userInfo } = useSelector((state) => state.userData);
  // const {userInfo} = useAuth()
  const [mouseHover, setMouseHover] = useState('');
  const [mouseCLick, setMouseCLick] = useState('');

  // console.log(location);

  const [open, setOpen] = useState(false);
  const [openIs, setOpenIs] = useState(false);
  const [mtitle, setMtitle] = useState('');

  const subToggle = (title) => {
    if (title === mtitle) {
      setOpen(false);
      setMtitle('');
    } else {
      setOpen(true);
      // setMtitle('');
      setMtitle(title);
    }
  };

  useEffect(() => {
    setMouseCLick(
      location?.pathname === '/'
        ? '/'
        : location?.pathname === '/othernewuploads'
        ? '/othernewuploads'
        : location?.pathname === '/bankuploadnew'
        ? '/bankuploadnew'
        : location?.pathname === '/banks'
        ? '/banks'
        : location?.pathname === '/editsignatures'
        ? '/editsignatures'
        : location?.pathname === '/newuploads'
        ? '/newuploads'
        : location?.pathname === '/users'
        ? '/users'
        : location?.pathname === '/branches'
        ? '/branches'
        : location?.pathname === '/finalsignatures'
        ? '/finalsignatures'
        : location?.pathname === '/otherfinalsignatures'
        ? '/otherfinalsignatures'
        : location?.pathname === '/uploadnew'
        ? '/uploadnew'
        : ''
    );
    return;
  }, [route]);

  const showLable = ({ title }) => {
    setMouseHover(title);
  };

  const hideLable = () => {
    setMouseHover('');
  };

  const highlightMenu = ({ title }) => {
    setMouseCLick(title);
    if (toggleSide) {
      toggleSidbar();
    }
  };

  // <div className={`flex ${toggle ? 'w-[50px] ' : 'w-[50px] sm:w-[280px]'}`}>

  //     </div>

  return (
    <div>
      <div className='flex flex-col justify-center items-start py-2 pl-2 transition ease-in-out delay-150 duration-300 '>
        {toggle ? (
          <>
            <img
              src={smalllogo}
              alt='Logo'
              className={`hidden sm:block w-[40px] h-[40px] object-contain rounded-full bg-white`}
            />

           
          </>
        ) : (
          <img
            src={logo}
            alt='Logo'
            className={`hidden sm:block w-[150px] h-[40px] object-contain`}
          />
        )}

        <div className=' flex justify-between items-center w-full'>
        <img
          src={smalllogo}
          alt='Logo'
          className={`block sm:hidden w-[40px] h-[40px] object-contain rounded-full`}
        />

        {toggleSide && (
          <MdClose
            onClick={toggleSidbar}
            className='block sm:hidden text-2xl text-[#26a69a] cursor-pointer hover:text-3xl hover:-translate-y-0 hover:scale-110 transition ease-in-out delay-150 duration-300'
          />
        )}
        </div>
        
        {/* <div c  */}
      </div>

      {/* {userInfo &&
        userInfo?.data?.Menu?.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            toggle={toggle}
            toggleSidbar={toggleSidbar}
            toggleSide={toggleSide}
            mouseHover={mouseHover}
            mouseCLick={mouseCLick}
            setMouseHover={setMouseHover}
            setMouseCLick={setMouseCLick}
            showLable={showLable}
            hideLable={hideLable}
            highlightMenu={highlightMenu}
          />
        ))} */}
      <div className=' mt-20'>
        {route?.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            toggle={toggle}
            toggleSidbar={toggleSidbar}
            toggleSide={toggleSide}
            mouseHover={mouseHover}
            mouseCLick={mouseCLick}
            setMouseHover={setMouseHover}
            setMouseCLick={setMouseCLick}
            showLable={showLable}
            hideLable={hideLable}
            highlightMenu={highlightMenu}
            open={open}
            setOpen={setOpen}
            subToggle={subToggle}
            mtitle={mtitle}
            setMtitle={setMtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Side;
