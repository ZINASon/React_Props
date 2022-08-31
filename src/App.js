import './App.css';
// import Definition from './component/Definition';
// import Projects from './component/Projects';
// import ContactMe from './component/ContactMe';
// import Navbar from './component/Navbar';
import Child from './Profile/Child';
import photo from './Profile/ZinaSondes.jpg';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
   
      <Child fullName="Zina Sondes" bio="Computer Sciences engineer" profession="FullStack developper" handleName>{photo}</Child>
    </div>
  ); 
}

export default App;
