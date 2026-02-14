import React, { useState } from "react";
import "./Programs.css";

import nursing from "../../assets/nursing.jpg";
import pharmacy from "../../assets/pharmacy.jpg";
import accounting from "../../assets/accounting.jpg";
import laboratory from "../../assets/laboratory.jpg";
import management from "../../assets/management.jpg";
import resource from "../../assets/resource.jpg";
import development from "../../assets/development.jpg";

const courses = [
  {
    id: 1,
    image: nursing,
    name: "Nursing",
    description: "Professional nursing education with strong clinical practice.",
    levels: ["Degree"],
    modes: ["regular"],
  },
  {
    id: 2,
    image: pharmacy,
    name: "Pharmacy",
    description: "Study pharmaceutical sciences and patient care.",
    levels: ["Degree"],
    modes: ["regular"],
  },
  {
    id: 3,
    image: accounting,
    name: "Accounting and Finance",
    description: "Financial management and accounting principles.",
    levels: ["Degree", "Diploma"],
    modes: ["regular", "night"],
  },
  {
    id: 4,
    image: laboratory,
    name: "Medical Laboratory Science",
    description: "Laboratory diagnostics and medical testing.",
    levels: ["Degree", "Diploma"],
    modes: ["regular"],
  },
  {
    id: 5,
    image: management,
    name: "Management",
    description: "Leadership and organizational management skills.",
    levels: ["Degree"],
    modes: ["regular"],
  },
  {
    id: 6,
    image: resource,
    name: "Human Resource Management",
    description: "People management and organizational development.",
    levels: ["Diploma"],
    modes: ["regular", "night"],
  },
  {
    id: 7,
    image: development,
    name: "Web Development & Database Administration",
    description: "Modern web technologies and database systems.",
    levels: ["Diploma"],
    modes: ["regular", "night"],
  },
];

const Programs = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  return (
    <div className="programs">
      
      <header className="programs-header">
        <h1>Our Courses</h1>
      </header>

      <div className="programs-filters">
        <button onClick={() => setFilteredCourses(courses)}>All</button>
        <button
          onClick={() =>
            setFilteredCourses(
              courses.filter(
                c => c.levels.includes("Degree") && c.modes.includes("regular")
              )
            )
          }
        >
          Regular Degree
        </button>
        <button
          onClick={() =>
            setFilteredCourses(
              courses.filter(
                c => c.levels.includes("Diploma") && c.modes.includes("regular")
              )
            )
          }
        >
          Regular Diploma
        </button>
        <button
          onClick={() =>
            setFilteredCourses(
              courses.filter(c => c.modes.includes("night"))
            )
          }
        >
          Night Programs
        </button>
      </div>

      <div className="programs-grid">
        {filteredCourses.map(course => (
          <div className="program-card" key={course.id}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <span>
              {course.levels.join(" / ")} • {course.modes.join(" /")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
