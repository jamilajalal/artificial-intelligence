
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Partnyorlar from './components/Partnyorlar';
import Apply from './components/Apply';
import AwardsContainer from './components/AwardsContainer';


function App() {
  return (
    <>
   <Navbar/>
   <Introduction />
   <Partnyorlar />
   <Apply />
   <AwardsContainer />


 
    </>

  );
}

export default App;
