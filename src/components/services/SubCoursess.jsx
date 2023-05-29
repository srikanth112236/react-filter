import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../assets/Courses.css';
import CoursesData from '../../data/courses/courses.json';
import {Link, useParams} from 'react-router-dom';
import {slugify} from '../../utils/index'
import { Fade } from 'react-awesome-reveal';
const Data = CoursesData;
const SubCoursess = () => {
  const params = useParams();
  const courseSlug = params.slug;

  const getCourseData = Data.filter(data => slugify(data.title) === courseSlug);
  const detailsService = getCourseData[0];
const couseSlug = detailsService.title
  const automotiveData = Data.filter(data => slugify(data.cate ? data.cate : "") === "automotive");
  const businessData = Data.filter(data => slugify(data.cate ? data.cate : "") === "business");
  const constructionData = Data.filter(data => slugify(data.cate ? data.cate : "") === "construction");
  const communityData = Data.filter(data => slugify(data.cate ? data.cate : "") === "community");
  const healthcareData = Data.filter(data => slugify(data.cate ? data.cate : "") === "healthcare");
  const generalData = Data.filter(data => slugify(data.cate ? data.cate : "") === "general");
  console.log(automotiveData);
  console.log(businessData);
  console.log(constructionData);
  console.log(communityData);
  console.log(healthcareData);
  console.log(generalData);
  console.log(detailsService)
  return (
    <div>
      <Header/>
      <Fade   delay={1e2} triggerOnce cascade damping={1e-9}>
      <h1>Courses Avaialble in {detailsService.title}  </h1>
      <div className="container">
        <div className="row">
          {
            Data.filter(data => slugify(data.cate ? data.cate : "") === detailsService.data).map((cData)=>(
             <div className="col-md-3 border border-1 shadow-lg courses mt-3 mb-4 mx-5">
             <Link to={process.env.PUBLIC_URL + `/courses/${slugify(couseSlug)}/${slugify(cData.title)}`}>
              <img src={cData.image} alt={cData.t}/>
              <h3>{cData.title}</h3>
             </Link>
             </div>
            ))
          }
         
        </div>
      </div>
      </Fade>
      <Footer/>
    </div>
  )
}

export default SubCoursess