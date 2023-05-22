import { Outlet } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { Footer, Header, Side } from '../components';
import { sidebarRoutes } from '../common/mockdata';

export default function LayoutPage() {
  const [toggle, setToggle] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    setRoute(sidebarRoutes);
    return;
  }, []);

  const toggleLogo = () => {
    setToggle((prev) => !prev);
  };

  const toggleSidbar = () => {
    setToggleSide((prev) => !prev);
  };

  return (
    <div className='h-screen flex w-screen flex-row overflow-hidden'>
      {/* <div className='fixed left-0 right-0'>
        <Header
          toggle={toggle}
          toggleLogo={toggleLogo}
          toggleSidbar={toggleSidbar}
          toggleSide={toggleSide}
        />
      </div> */}
      <div
        className={` absolute z-[1000] left-0 bottom-0 top-0 sm:static ${
          toggleSide ? 'block' : 'hidden sm:block'
        } ${
          toggle ? 'w-[50px]' : 'w-[280px]'
        }  bg-white bg-gradient-to-r from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255)] bg-transparent  overflow-hidden hover:overflow-y-auto transition-all ease-in-out delay-100 duration-200`}
      >
        <Side
          route={route}
          toggleSide={toggleSide}
          toggle={toggle}
          toggleSidbar={toggleSidbar}
          toggleLogo={toggleLogo}
        />
      </div>
      <div className='flex flex-col flex-1 overflow-hidden scroll-side'>
        {/* <div
          className={`sm:mt-[8vh] absolute top-[8vh] z-[1000] left-0 bottom-0 sm:static ${
            toggleSide ? 'block' : 'hidden sm:block'
          } ${
            toggle ? 'w-[50px]' : 'w-[280px]'
          }  bg-white bg-gradient-to-r from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255)] bg-transparent  overflow-hidden hover:overflow-y-auto transition-all ease-in-out delay-100 duration-200`}
        >
          <Side
            route={route}
            toggleSide={toggleSide}
            toggle={toggle}
            toggleSidbar={toggleSidbar}
          />
        </div> */}
        <div
          className={`fixed ${
            toggle ? 'left-[10px] sm:left-[50px]' : 'sm:left-[280px] left-[10px]'
          } right-0`}
        >
          <Header
            toggle={toggle}
            toggleLogo={toggleLogo}
            toggleSidbar={toggleSidbar}
            toggleSide={toggleSide}
          />
        </div>
        <div className='mt-[8vh] h-[92vh] flex-1  overflow-hidden bg-white'>
          <div className='flex-1 bg-[#e9e8e8] h-[86vh] overflow-auto rounded-tl-3xl rounded-bl-3xl p-10 rounded-tr-3xl rounded-br-3xl'>
            <Outlet />
          </div>
          <div className='h-[6vh] w-full bg-[#fff] shadow-lg flex items-center'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
