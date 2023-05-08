import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';

function App() {
  const [openMenu , setOpenMenu] = useState(false);
  const [screenWidth , setScreenWidth] = useState('mobile');

      //Function Scren Width
      function resize() {
        const screen = window.innerWidth;
        if( screen <= 700) {
          setScreenWidth('mobile');
        }else if( screen < 1270 ){
          setScreenWidth('tablet');
        }else if( screen >= 1270){       
          setScreenWidth('desktop');
        }

        if(screenWidth !== 'desktop' && openMenu){
          setOpenMenu(false)
        }else if(screenWidth === 'desktop' && !openMenu){
          setOpenMenu(true)
        }
      }

      window.onresize = resize;
      useEffect(() => {
        resize();
      }, [screenWidth]);

  return (
    <>
    <Header screenWidth={screenWidth} setScreenWidth={setScreenWidth} openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <Main openMenu={openMenu} screenWidth={screenWidth} setOpenMenu={setOpenMenu} />
    </>
  );
  
}

export default App;
