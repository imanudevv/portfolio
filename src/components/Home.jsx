import './Home.css';
import myImg from '../assets/bg.png'; // ✅ Correct path

const Home = () => {
  return (
    <div className='bg'>
      <div className="greet">
        <img src={myImg} alt="myimg" className="profile-img" />
        <h1>
           I’m </h1>
           <h2>Anudev.vp</h2>
           <h3>Full StackDeveloper</h3>


        <button>Hire Me</button>
        <button>Contact Me</button>
          
        
      </div>
    </div>
  );
};

export default Home;