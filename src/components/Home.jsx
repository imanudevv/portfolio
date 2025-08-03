import './Home.css';
import myImg from '../assets/myimg.png'; // ✅ Correct path

const Home = () => {
  return (
    <div className='bg'>
      <div className="greet">
        <img src={myImg} alt="myimg" className="profile-img" />
        <h1>
          Hi, I’m Anudev <br />
          a Fullstack Developer crafting seamless web experiences with MERN & Python.
        </h1>
        
      </div>
    </div>
  );
};

export default Home;