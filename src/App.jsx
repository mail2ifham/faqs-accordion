import Faqs from "./component/faqs/Faqs"
import './App.css'
import background from './assets/images/background-pattern-mobile.svg'
import Footer from "./component/footer/Footer"
import Accordion from "./component/accordion/Accordion"

function App() {

  return (
    <main className="app-main" >
      <Faqs/>
      <Footer/>
    </main>
  )
}

export default App
