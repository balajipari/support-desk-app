import SideBar from './layouts/SideBar';
import TopNavigation from './layouts/TopNavigation';
import ContentSlider from './layouts/ContentSlider';
import { Outlet, useLocation } from 'react-router-dom';

const AppLayout = () => { 
  const pathSegments = useLocation().pathname.split('/');
  const location = pathSegments[pathSegments.length - 1];
  return (
    <div className='h-full overflow-hidden'>
    <SideBar />
    <div className='ml-16'>
      <TopNavigation title={location} />
      <div className='grid grid-cols-9 gap-4' >
        <div className='col-span-6'>
          <Outlet context={location}/>
        </div>
        <div className='col-span-3 border-l-2'>
          <ContentSlider data={location} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AppLayout