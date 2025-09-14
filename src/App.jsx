import Header from "./Homepage/Hom"
import Foods from "./Homepage/pass/Foods"

function App(){

  return(
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Foods" element={<Foods/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={ <About/>}/>
     </Routes>
    </>
  )
}export default App