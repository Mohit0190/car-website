import './App.css'
import Header from './components/Header'

import Section from './components/Section'
import data from './assets/carInfo.json'

// import image2 from './assets/model-3.jpg'
// import image3 from './assets/model-x.jpg'
// import image4 from './assets/model-y.jpg'


function App() {


  return (
    <>
   <Header/>
   {/* <Home/> */}
   {
    data.map((element)=>{
     return( <Section title={element.title} desc={element.description}  key={element.id} range={element.range} time={element.time} speed={element.topSpeed}/>);
    })
   }
   
    </>
  )
}

export default App
