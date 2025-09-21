import './Home.css';
import myImg from '../assets/bg.png'; // ✅ Correct path

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg'>
      <div className="greet">
        <img src={myImg} alt="myimg" className="profile-img" />
        <h1>
           I'm </h1>
           <h2>Anudev.vp</h2>
           <h3>Full StackDeveloper</h3>

        <div className="button-container">
           <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;