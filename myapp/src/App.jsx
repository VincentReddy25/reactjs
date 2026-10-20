import './App.css'
import Navbar from './components/Navbar'
// import Props from './components/Props'

import GlobalData from './components/GlobalData'

function App() {
  return (
    <>
      <GlobalData>
        <Navbar />
      </GlobalData>

      {/* <Props name="Vincent" age="23" /> */}
    </>
  )
}

export default App

