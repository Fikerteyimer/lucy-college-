import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero.jpg"; 
const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="small-about">
      
      <h1>Why you choose us?</h1>
      <p>
        Our faculty consists of experienced educators and industry professionals 
        who bring real-world insights into every classroom. They are dedicated 
        not only to teaching but also to mentoring students, helping them grow 
        both academically and personally. Students at Lucy Business and Tech College 
        benefit from a hands-on approach to learning, with access to state-of-the-art 
        facilities, modern computer labs, and cutting-edge technology that create 
        a dynamic and engaging environment.
      </p>
      <button className="btn" onClick={() => navigate('/about')}>More About Us</button>
    </div>
  );
}

export default AboutSection;
