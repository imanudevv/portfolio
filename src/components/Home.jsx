import './Home.css';
import myImg from '../assets/bg.png'; // ✅ Correct path

const Home = () => {
  return (
    <div className='bg'>
      <div className="greet">
        <img src={myImg} alt="myimg" className="profile-img" />
        <h1>
           I'm </h1>
           <h2>Anudev.vp</h2>
           <h3>Full StackDeveloper</h3>

        <div className="button-container">
          <button>Hire Me</button>
          <button className='b2'>Contact Me</button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;