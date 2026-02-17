import { courses } from "./Programs";
import { Link } from "react-router-dom";


const ProgramsSection = () => {
  const homeCourses = courses.slice(1, 4);

  return (
    <section className="small-programs">
      <h2 className="heading">Our Trending Courses</h2>

      <div className="programs-grid">
        {homeCourses.map(course => (
          <div className="program-card" key={course.id}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
          
        ))}
       
      </div>

      <Link to="/programs" className="view-all-btn">
        View All Programs
      </Link>
    </section>
  );
};

export default ProgramsSection;
