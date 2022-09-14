import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import View from "./component/student/View";
import Edit from "../src/component/student/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
