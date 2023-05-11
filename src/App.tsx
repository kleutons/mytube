import { useState, useEffect } from 'react';
import { GlobalStyle, Container, ScrimMenu, SectionMain } from './GlobalStyle';

import Header from './components/header';
import MenuSideBar from './components/menuSideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Shorts from './pages/shorts';
import Subscriptions from './pages/subscriptions';
import Library from './pages/library';
import Login from './pages/login';
import History from './pages/history';
import ReportHistory from './pages/reportHistory';

function App() {
  const [openMenu , setOpenMenu] = useState(false);
  const [screenWidth , setScreenWidth] = useState('mobile');

  //Disable Scroll Body
  if(openMenu && screenWidth !== 'desktop'){
    document.body.style.overflow = "hidden";
  }else{
      document.body.style.overflow = "auto";
  }

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [screenWidth]);

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    
      <Header screenWidth={screenWidth} setScreenWidth={setScreenWidth} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      
        <Container $openMenu={openMenu} $screenWidth={screenWidth}>
            <MenuSideBar $openMenu={openMenu} $screenWidth={screenWidth} />
            {screenWidth !== 'desktop' && openMenu ? <ScrimMenu onClick={() => setOpenMenu(false)} /> : null}
            <SectionMain>
              <Routes>
                <Route path='/mytube/' element={<Home />} />
                <Route path='/mytube/shorts' element={<Shorts />} />
                <Route path='/mytube/subscriptions' element={<Subscriptions />} />
                <Route path='/mytube/library' element={<Library />} />
                <Route path='/mytube/history' element={<History />}/>
                <Route path='/mytube/login' element={<Login />}/>
                <Route path='/mytube/reporthistory' element={<ReportHistory />}/>
              </Routes>
            </SectionMain>
        </Container>
      </BrowserRouter>
    </>
  );
  
}

export default App;
