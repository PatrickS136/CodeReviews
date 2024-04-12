import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({courses}) => {

    const navigate = useNavigate();

    function reviews(courseId)
    {
        navigate(`/Reviews/${courseId}`);
    }

  return (
    <div className ='course-carousel-container'>
      <Carousel>
        {
            courses?.map((course) =>{
                return(
                    <Paper key={course.courseId}>
                        <div className = 'course-card-container'>
                            <div className="course-card" style={{"--img": `url(${course.image})`}}>
                                <div className="course-detail">
                                    <a href={course.enrollLink}>
                                        <div className="course-image">
                                            <img src={course.image} alt="" />
                                        </div>
                                    </a>
                                    <div className="course-title">
                                        <h4>{course.title}</h4>
                                    </div>
                                    <div className="course-buttons-container">
                                        <div className="course-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(course.courseId)} >Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero