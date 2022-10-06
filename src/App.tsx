import { Flex, Grid } from "@atmoutsourcing/siakit";
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header";
import Router from './routes/Router'
import Global from './styles/global';

function App() {

  return (
    <Grid columns={"180px 1420px"}>
      <BrowserRouter>
        <Global />
        <Header />
        <Router />
      </BrowserRouter>
    </Grid>
  )
}

export default App
