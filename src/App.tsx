import { Flex, Grid } from "@atmoutsourcing/siakit";
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header";
import Router from './routes/Router'
import Global from './styles/global';

function App() {

  return (
    <Grid columns={"12.5vw 87.5vw"}>
      <BrowserRouter>
        <Global />
        <Header />
        <Router />
      </BrowserRouter>
    </Grid>
  )
}

export default App

