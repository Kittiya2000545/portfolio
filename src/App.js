import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {

  return (
    <BrowserRouter> {/* การประกาศเราท์เตอร์ สำหรับกำหนดพาทที่ไปหน้าต่างๆ */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* กำหนดพาท / ให้ไปที่ไฟล์ home.js */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
