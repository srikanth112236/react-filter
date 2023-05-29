import React from 'react'
import '../../assets/Courses.css';
import CoursesData from '../../data/courses/courses.json';
import {Link} from 'react-router-dom';
import {slugify} from '../../utils/index'
import { Fade } from 'react-awesome-reveal';
const Data = CoursesData;
const CoursesMain = () => {
  return (
    <div>
     <Fade   delay={1e2} triggerOnce cascade damping={1e-9}>
      <h1>Courses</h1>
      <div className="container">
        <div className="row">
          {
            Data.slice(0,6).map((cData)=>(
             <div className="col-md-3 border border-1 shadow-lg courses mt-3 mb-4 mx-5">
             <Link to={process.env.PUBLIC_URL + `/courses/${slugify(cData.title)}`}>
              <img src={cData.image} alt={cData.t}/>
              <h3>{cData.title}</h3>
             </Link>
             </div>
            ))
          }
         
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default CoursesMain