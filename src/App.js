import Navbarcus from './Components/Navbar'
import Slider from './Components/Slider'
import Content from './Components/Content'

function App() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center">
      <Navbarcus /> 
      <Slider />
      <Content />
    </div>
  );
}

export default App;
