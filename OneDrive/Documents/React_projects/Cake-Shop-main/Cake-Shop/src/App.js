import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import {Container} from "@mui/material"
import { lightGreen } from '@mui/material/colors';
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import ContactUs from "./components/ContactUs";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./components/Form"

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Container>
      <HeroSection/>
      <CardSection/>
      <ContactUs/>
      </Container>
    </ThemeProvider>

  );
}

export default App;
