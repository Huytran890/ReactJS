import Greeting from "./assets/components/Greeting"
import ScrollToTop from "./assets/components/ScrollToTop"

function App() {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: "1200px", margin: '0 auto' }}>
        <Greeting />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
