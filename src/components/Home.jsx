import './Home.css';
import myImg from '../assets/bg.png'; // ✅ Correct path
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='bg'>
      <div className="greet">
        <img src={myImg} alt="myimg" className="profile-img" />
        <h1>
           I'm </h1>
           <h2>Anudev.vp</h2>
           <h3>Full StackDeveloper</h3>

        <div className="button-container">
          <button onClick={()=>navigate("Hireme")}>Hire Me</button>
           <button onClick={()=>navigate("contact")}>Contact</button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;