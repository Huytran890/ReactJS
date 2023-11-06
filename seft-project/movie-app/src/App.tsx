import { BrowserRouter } from "react-router-dom"
import Body from "./layouts/Body"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import Navbar from "./components/Navbar"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Body />
      </QueryClientProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
