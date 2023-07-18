import { useState, useEffect, ReactNode } from 'react';
import { GlobalStyle, Container, SectionMain, ScrimMenu } from './GlobalStyle';
import Header from './components/header';
import MenuSideBar from './components/menuSideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SingUp from './pages/SingUp';
import Home from './pages/home';
import Shorts from './pages/shorts';
import Subscriptions from './pages/subscriptions';
import Library from './pages/library';
import History from './pages/history';
import ReportHistory from './pages/reportHistory';
import Watch from './pages/watch';
import { TestePage } from './pages/teste/teste';
import Results from './pages/results';

 

function App() {


  return (
    <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path='/mytube/login'         element={<LayoutLogin> <Login /> </LayoutLogin>} />
        <Route path='/mytube/signup'        element={<LayoutLogin> <SingUp /> </LayoutLogin>} />
        <Route path='/mytube'               element={<LayoutMain> <Home /> </LayoutMain>} />
        <Route path='/mytube/shorts'        element={<LayoutMain> <Shorts /> </LayoutMain>} />
        <Route path='/mytube/subscriptions' element={<LayoutMain> <Subscriptions /> </LayoutMain>} />
        <Route path='/mytube/library'       element={<LayoutMain> <Library /> </LayoutMain>} />
        <Route path='/mytube/history'       element={<LayoutMain> <History /> </LayoutMain>} />
        <Route path='/mytube/reporthistory' element={<LayoutMain> <ReportHistory /> </LayoutMain>} />
        <Route path='/mytube/watch'         element={<LayoutMain> <Watch /> </LayoutMain>} />
        <Route path='/mytube/results'       element={<LayoutMain> <Results /> </LayoutMain>} />

        <Route path='/mytube/teste'         element={<LayoutMain> <TestePage /> </LayoutMain>} />
      </Routes>
    </BrowserRouter>
 
    </>
  );
  
}

interface LayoutProps {
  children: ReactNode;
}

const LayoutMain = ({ children }:LayoutProps) => {

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
      <Header screenWidth={screenWidth} setScreenWidth={setScreenWidth} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Container $openMenu={openMenu} $screenWidth={screenWidth}>
        <MenuSideBar $openMenu={openMenu} setOpenMenu={setOpenMenu} $screenWidth={screenWidth} />
        {screenWidth !== 'desktop' && openMenu ? <ScrimMenu onClick={() => setOpenMenu(false)} /> : null}
        <SectionMain>
          {children}
        </SectionMain>
        </Container>      
    </>
  );
};

const LayoutLogin = ({ children }:LayoutProps) => {
  return (
    <>
      {children}      
    </>
  );
};


export default App;
