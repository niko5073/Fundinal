import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {dark, light } from './styles/Theme';

import  Navbar  from './components/Navbar';
import  Home  from './components/sections/Home';
import  Mission  from './components/sections/Mission';
import  Faq  from './components/sections/Faq';
import  Footer  from './components/Footer';


function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navbar />
      <Home />
      <Mission />
      <Faq />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
