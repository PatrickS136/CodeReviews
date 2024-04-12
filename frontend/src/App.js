import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [courses, setCourses] = useState();
  const [course, setCourse] = useState();
  const [reviews, setReviews] = useState([]);

  const getCourses = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/courses");

      setCourses(response.data);
    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getCourseData = async (courseId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/courses/${courseId}`);

        const singleCourse = response.data;

        setCourse(singleCourse);
        setReviews(singleCourse.reviews);
    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getCourses();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home courses={courses} />} ></Route>
            <Route path="/Reviews/:courseId" element ={<Reviews getCourseData = {getCourseData} course={course} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
