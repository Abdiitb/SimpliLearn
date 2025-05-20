import React from 'react'
import { useParams } from 'react-router';
import { useFetchCourse } from '../../hooks/services/useFetchCourse.js';

function Course() {
    const { id } = useParams();
    const course = useFetchCourse(id);

  return (
      <div className="flex flex-col flex-grow justify-center items-center">
      {course && Object.keys(course).length !== 0 && (
          <div key={course._id} className="flex flex-col gap-5 w-[80%]">
          <div className="text-3xl">{course.title}</div>
          <div>{course.short_description}</div>
          <div>{course.description}</div>
          <div>Price: {course.paid ? course.price : "Free"}</div>
      </div>
    )}
    </div>
  )
}

export default Course
