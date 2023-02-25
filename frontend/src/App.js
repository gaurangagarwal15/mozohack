import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Mangement from "./Pages/Mangement";
import Doctor from "./Pages/Doctor";
import Pricing from "./Pages/Pricing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="management" element={<Mangement />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
