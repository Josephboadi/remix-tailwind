import { useState, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import DynamicIcons from './DynamicIcons';
import { Link } from '@remix-run/react';

const SidebarItem = ({
  item,
  toggle,
  mouseHover,
  mouseCLick,
  setMouseHover,
  setMouseCLick,
  showLable,
  hideLable,
  highlightMenu,
  open,
  setOpen,
  subToggle,
  mtitle,
  setMtitle,
}) => {
  // const [open, setOpen] = useState(false);
  // const [openIs, setOpenIs] = useState(false);
  // const [mtitle, setMtitle] = useState('');

  // const subToggle = (title) => {
  //   if (open) {
  //     setOpen(false);
  //     setMtitle('');
  //   } else {
  //     setOpen(true);
  //     setMtitle('');
  //     setMtitle(title);
  //   }
  // };

  // useEffect(() => {
  //   // const subToggle = (title) => {
  //   //   if (open) {
  //   //     setOpen(false);
  //   //     setMtitle('');
  //   //   } else {
  //   //     setOpen(true);
  //   //     // setMtitle('');
  //   //     setMtitle(title);
  //   //   }
  //   // };
  //   // return subToggle;
  // }, [mtitle]);

  // const checkToggle = ({ title }) => {
  //   if (title) {
  //     setMtitle('');
  //   } else {
  //     setMtitle(title);
  //   }
  // };

  // console.log(mtitle);

  if (item?.isParent) {
    return (
      <div
        className={
          mtitle === item?.Title ? 'sidebar-item open ' : 'sidebar-item '
        }
      >
        <div
          className={`sidebar-title cursor-pointer mt-4 ${
            toggle ? 'ml-1' : 'ml-2'
          } -mb-2 transition ease-in-out delay-150 duration-300`}
          onClick={() => subToggle(item?.Title)}
        >
          <span className='flex items-center gap-4'>
            <DynamicIcons
              name={item?.icon}
              onMouseOver={() => showLable({ title: item?.Title })}
              style={`${
                item?.Title === 'System Setups'
                  ? 'text-3xl hover:text-4xl'
                  : item?.Title === 'Other Banks'
                  ? 'text-xl hover:text-2xl'
                  : item?.Title === 'Final Signatures'
                  ? 'text-md hover:text-lg'
                  : item?.Title === 'Staff New Signatures'
                  ? 'text-md hover:text-lg'
                  : ''
              } cursor-pointer ${toggle ? 'hidden' : 'block'}`}
            />
            <BsThreeDots
              onMouseOver={() => showLable({ title: item?.Title })}
              className={`text-xl  cursor-pointer hover:text-2xl ${
                toggle ? 'block' : 'hidden'
              }`}
            />
            <p
              className={`${
                toggle
                  ? 'hidden'
                  : 'block transition ease-in-out delay-600 duration-500'
              }`}
            >
              {item?.Title}
            </p>
            {/* <p
              className={`${
                toggle ? 'block' : 'hidden'
              } transition ease-in-out delay-600 duration-500`}
            >
              {item?.Title}
            </p> */}
          </span>
          <i
            className={`${
              toggle
                ? 'hidden'
                : 'bi-chevron-down toggle-btn transition ease-in-out delay-600 duration-500 mr-3 block'
            }`}
          ></i>
          {/* <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i> */}
        </div>
        {mtitle && (
          <div
            className={`${
              mtitle === item?.Title
                ? 'h-auto pt-[0.25em] overflow-hidden block'
                : 'h-0 hidden'
            } ${toggle ? '-ml-4 w-[50px]' : 'w-full'} pb-4 `}
          >
            {item?.children?.map((child, index) => (
              <SidebarItem
                key={index}
                item={child}
                toggle={toggle}
                mouseHover={mouseHover}
                mouseCLick={mouseCLick}
                setMouseHover={setMouseHover}
                setMouseCLick={setMouseCLick}
                showLable={showLable}
                hideLable={hideLable}
                highlightMenu={highlightMenu}
              />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className=' mt-6'>
        <Link to={item?.path}>
          <div
            onClick={() => highlightMenu({ title: item?.path })}
            onMouseOver={() => showLable({ title: item?.Title })}
            onMouseOut={() => hideLable()}
            className={`${
              toggle ? 'pl-4' : 'pl-2 ml-4'
            } flex gap-4 items-end  hover:bg-[#e9e8e8] py-2 ${
              mouseCLick === item?.path
                ? 'text-[#26a69a] bg-[#e9e8e8]'
                : 'text-black'
            }  hover:text-[#26a69a] transition ease-in-out delay-150 duration-300 rounded-tl-2xl rounded-bl-2xl relative `}
          >
            <div
              className={` ${mouseCLick === item?.path ? 'curve1' : 'hidden'} ${
                toggle && 'w-[34px]'
              } `}
            ></div>
            <div
              className={` ${mouseCLick === item?.path ? 'curve2' : 'hidden'} ${
                toggle && 'w-[34px]'
              } `}
            ></div>
            <DynamicIcons
              name={item?.icon}
              onMouseOver={() => showLable({ title: item?.Title })}
              // className=" text-2xl  cursor-pointer hover:text-3xl"
              style={`${
                item?.Title === 'System Setups'
                  ? 'text-3xl hover:text-4xl'
                  : item?.Title === 'Signatures'
                  ? 'text-md hover:text-lg'
                  : item?.Title === 'Bank New Signatures'
                  ? 'text-md hover:text-lg'
                  : 'text-xl hover:text-2xl'
              } cursor-pointer`}
            />

            <p className={`${toggle ? 'hidden' : 'block'}`}>{item?.Title}</p>

            <p
              className={`${
                mouseHover === item?.Title && toggle
                  ? 'block fixed left-[60px]'
                  : 'hidden'
              } text-[#26a69a] bg-[#e9e8e8] px-4 py-2 rounded-tl-2xl rounded-bl-2xl z-[1001] transition ease-in-out delay-600 duration-500`}
            >
              {item?.Title}
            </p>
          </div>
        </Link>
      </div>
    );
  }
};

export default SidebarItem;
