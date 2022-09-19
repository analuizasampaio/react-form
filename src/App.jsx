import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./pages/Content";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conteudo" element={<Content />} />
        <Route path="/formulario" element={<Form />} />

        <Route path="*" element={<h1>Uh, oh. Page not Found"</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
