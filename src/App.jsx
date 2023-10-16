
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"


import './assets/css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <>
      <Header />
      <Main deleletIcon = {faTrash} addIcon={faPlus} />
      <Footer />
    </>
  )
}

export default App
