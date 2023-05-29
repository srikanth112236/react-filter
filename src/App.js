import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Courses from './Courses';
import SubCourses from './SubCourses';
import IndividualCourse from './IndividualCourse';
import MyForm from './components/MyForm';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
      
          <Route path='/' exact element={<Home/>}/>
          <Route path='/courses' exact element={<Courses/>}/>
          <Route path='/courses/:slug' exact element={<SubCourses/>}/>
          <Route path='/courses/:slug/:slug' exact element={<IndividualCourse/>}/>
          <Route path='/form' exact element={<MyForm/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App