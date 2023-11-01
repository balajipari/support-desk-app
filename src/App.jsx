import SideBar from './layouts/SideBar';
import ContentContainer from './layouts/ContentContainer';
import './App.css';
import TopNavigation from './layouts/TopNavigation';
import { ContentSlider } from './layouts/ContentSlider';

function App() {

  return (
    <div className="h-full overflow-hidden">
    <SideBar />
    <div className='ml-16'>
      <TopNavigation title='tickets' />
      <div className='grid grid-cols-4 gap-4' >
        <div className="col-span-3">
        <ContentContainer/>
        </div>
        <ContentSlider />
      </div>
    </div>
    </div>
  )
}

export default App
