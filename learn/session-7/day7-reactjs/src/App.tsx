import { useState } from "react"
import UserList from "./components/UserList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
function App() {
  // const [show, setShow] = useState<boolean>(false);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      {/* <div>
        <button onClick={() => setShow(!show)}>Click me</button>
      </div>
      {show && <UserList />} */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
