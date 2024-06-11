import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'animate.css'
import 'remixicon/fonts/remixicon.css' // icons
import Nav from './components/Nav'
import Footer from './components/Footer'
import Section from './components/Section'
import Home from './components/Home'
import Teachers from './components/Teachers'
import Holidays from './components/Holidays'
import Contact from './components/Contact'
import NotFound  from './components/NotFound'

const App = () =>{
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;

// import {useState} from 'react'
// const App = () =>{
//   const [fontSize,setFontSize] = useState(40)

//   const change = () =>{
//     setFontSize(fontSize === 40 ? 100 : 40)
//   }
 
//     return(
//         <div>
//             <h1 style={{
//               fontSize: fontSize,
//               color: fontSize === 40 ? 'red' : 'blue'
//             }}>CodingOtt</h1>
//             <button onClick={change}>Change</button>
//         </div>
// )}

// export default App;