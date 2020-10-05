import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    handleSelectedCourse = (id, name) => {
        console.log(id)
        this.setState({ selectedCourseId: id, selectedCourseName: name });
    }

    render () {
        const courses = this.state.courses.map( course => {
            return (
              <div key={course.id}>
                <Link to={"/courses/" + course.id}>
                  <article
                    className="Course"
                    onClick={() => this.handleSelectedCourse(course.id, course.name)}
                  >
                    {course.title}
                  </article>
                </Link>
              </div>
            );
        })
        console.log('props in [Courses]:', this.props)
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">{courses}</section>

                <Route path={this.props.match.url + '/:id'} exact component={Course} />
            </div>
        );
    }
}

export default Courses;
