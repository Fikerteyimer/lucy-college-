import React from 'react';
import './About.css';
import about1 from "../../assets/about1.jpg";
import thinking from "../../assets/thinking.png";
import academic from "../../assets/academic.png";
import collaboration from "../../assets/collaboration.png";
import inclusivity from "../../assets/inclusivity.png";
import honesty from "../../assets/honesty.png";
import expertise from "../../assets/expertise.png";

const About = () => {
  return (
    <section className="about-page">

      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <div className="about-description">
          <div className="about-text">
            <h2>Who Is <span className='span'>Lucy?</span></h2>
            <p>
              Lucy Medical, Business & Technology College is a forward-thinking
              institution dedicated to shaping skilled professionals for today’s
              fast-changing world. We bring together medical sciences, business
              excellence, and modern technology under one purpose — to prepare
              students for real careers, not just certificates.
            </p>
            <br/>
            <p>
              At Lucy Medical, Business & Technology College, we provide a diverse
              range of programs designed to equip students with the skills and
              knowledge needed for successful careers across medical science,
              business & management, and technology & innovation.
            </p>
          </div>

          <img src={about1} alt="Medical, business and technology learning" />
        </div>
      </section>
     <section className="about-content">
  <div className="vision-mission-flow">

    <div className="mission-flow">
      <h2>Our<span className='span'> Mission</span> </h2>
      <p>
        To deliver quality, practice-oriented education through dedicated teaching,
        innovative learning environments, and industry-relevant programs,
        preparing students for successful and ethical careers.
      </p>
    </div>

    <div className="vision-flow">
      <h2>Our <span className='span'>Vision</span></h2>
      <p>
        To empower learners with knowledge, skills, and confidence,
        shaping future leaders in medical, business, and technology fields,
        and making a meaningful impact in the community and beyond.
      </p>
    </div>

  </div>
    
  <div className="college-value">
    <div className='our-values'><h2><span className='span'>Our </span>Values</h2></div>
    <div className='college-values'>
      <div className='about-container'>
        <img src={academic} alt="academics symbol"/>
        <h3>Academics</h3>
        <p>At Lucy Medical, Business & Technology College, 
          our academic programs are designed to combine strong theoretical 
          foundations with practical, real-world skills. We emphasize quality teaching, 
          updated curricula, and hands-on learning to prepare students for professional excellence, 
          innovation, and lifelong learning.</p>
       
      </div>

      <div className='about-container'>
        <img src={thinking} alt="critical thinking symbol"/>
        <h3>critical thinking</h3>
        <p>Lucy Medical, Business and Technology College is committed to 
          shaping skilled, ethical, and innovative professionals. We combine quality 
          education with practical training to prepare students for real-world challenges
           in healthcare, business, and technology, empowering them to create impact
            and lead with confidence.</p>
        
      </div>

      <div className='about-container'>
        <img src={collaboration} alt="collaboration symbol"/>
        <h3>collaboration</h3>
        <p>We believe great ideas grow when people work together.
           Through collaboration, we build a supportive community 
           where students learn from one another and develop strong 
           teamwork skills for their future careers.</p>

        
      </div>

      <div className='about-container'>
        <img src={inclusivity} alt="inclusivity symbol"/>
        <h3>Inclusivity</h3>
        <p>Inclusivity is central to our mission.
           We are committed to providing equal opportunities 
           and a supportive learning environment that celebrates 
           diversity and promotes mutual respect.</p>

        
      </div>
      <div className='about-container'>
        <img src={honesty} alt="honesty symbol"/>
        <h3>Honesty</h3>
        <p>We uphold honesty in all academic and professional practices.
Transparency and integrity guide our decisions and actions.
We encourage ethical behavior, trust, and accountability.
This builds a strong foundation for responsible future leaders.</p>

        
      </div>

      <div className='about-container'>
        <img src={expertise} alt="expertise symbol"/>
        <h3>Expertise</h3>
        <p>Our expertise is rooted in experienced instructors and industry-aligned programs.
          We combine strong academic foundations with practical, hands-on training.
          Students learn from professionals who understand real-world challenges.
          This ensures graduates are confident, skilled, and career-ready.</p>

        
      </div>
      </div>
     
    </div>
</section>
    </section>
  );
};

export default About;