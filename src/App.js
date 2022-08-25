import './App.css';
import { Input } from './Input';
import image from './4034741.jpg';
import imageTwo from './pictureOne.webp'

function App() {
  return (
    <div className='container'>
      {/* <div>
      <img src={image} width="100px" alt='plan' />
      </div> */}
      <div>
      <h1>MY PLAN</h1>
      <Input/>
      </div>
      <img src={image} width="320px" height="280px" alt='calendar'/>
    </div>
  );
}

export default App;
