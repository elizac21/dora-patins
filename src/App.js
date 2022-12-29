import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import { CarrinhoPage } from "./pages/Carrinho/CarrinhoPage";
import { AppContext } from "./store/AppContext";



const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
        </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
