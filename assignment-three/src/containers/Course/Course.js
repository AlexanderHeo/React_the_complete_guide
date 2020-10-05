import React, { Component } from 'react';

class Course extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    let course = <p style={{ textAlign: 'center' }}>Please select a course.</p>;
    console.log("props in [Course]:", this.props);

    if (this.props.match.params.id) {
        course = <p style={{ textAlign: 'center' }}>{this.props.match.params.id}</p>
    }
    return (
      <div>
        {course}
      </div>
    );
  }
}

export default Course;
