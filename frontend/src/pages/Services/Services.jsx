import React from 'react'
import { Link } from 'react-router'

function Services() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center my-10 gap-10">
      <h1 className="text-5xl lg:text-8xl border-b-2 dark:border-orange-500 rounded-xl border-black">OUR SERVICES</h1>
      <div className="w-[60%] dark:text-amber-200 text-black">Explore the ways Simply Learn helps make learning easier and more effective.
From structured courses to simplified blogs, everything is designed to help you truly understand — not just memorize.
Whether you're starting out or sharpening your skills, we’re here to support your journey.</div>
      <div className="card lg:card-side bg-transparent shadow-sm w-[60%] outline-2 dark:outline-green-500 border-2 dark:border-green-500 outline-black border-black">
        <figure className="w-[100%]">
          <img
            src="https://elearningindustry.com/wp-content/uploads/2013/09/how-to-use-blogs-in-the-classroom.jpg"
            alt="Album"
            className="w-[100%] h-[100%]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">📝 Blogs That Make Learning Simpler</h2>
          <p>Our blogs are crafted to break down complex topics into clear, easy-to-understand explanations.
            From coding basics to advanced concepts, each post is structured to guide you step by step.
            Whether you're revisiting a tricky subject or exploring something new, our content is made for real understanding — not just quick answers.
            </p>
          <div className="card-actions justify-end">
            <Link to="/services/blogs">
              <button className="btn btn-primary">
                View Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-transparent shadow-sm w-[60%] outline-2 dark:outline-green-500 border-2 dark:border-green-500 outline-black border-black">
        <div className="card-body">
          <h2 className="card-title">📚 Structured Courses for Clear Learning</h2>
          <p>Our courses are designed to take you from confusion to confidence, one step at a time.
Each course follows a logical, beginner-friendly structure — no jargon, just clear guidance.
Whether you're starting from scratch or building on existing skills, you’ll find lessons that explain the why behind every how.
Learn at your own pace with content that’s easy to follow and built to last.</p>
          <div className="card-actions justify-end">
            <Link to="/services/courses">
            <button className="btn btn-primary">View Courses</button>
            </Link>
          </div>
        </div>
        <figure className="w-[100%]">
          <img
            src="https://jaro-website.s3.ap-south-1.amazonaws.com/2023/08/image3-1.png"
            alt="Album" 
            className="w-[100%] h-[100%]"
          />
        </figure>

      </div>

      <div className="card lg:card-side bg-transparent shadow-sm w-[60%] outline-2 dark:outline-green-500 border-2 dark:border-green-500 outline-black border-black">
        <figure className="w-[100%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASmqWmPqbAo9bxdFA6ohKkgaElSKngHSHOw&s"
            alt="Album"
            className="w-[100%] h-[100%]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">👥 Mentorship Program</h2>
          <p>Get guidance from experienced mentors who understand the challenges of learning complex topics.
Our mentorship program offers personalized support, helping you stay on track, ask better questions, and learn with confidence.</p>
          <div className="card-actions justify-end">
            <Link>
              <button className="btn btn-primary">
                COMING SOON
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-transparent shadow-sm w-[60%] outline-2 dark:outline-green-500 border-2 dark:border-green-500 outline-black border-black">
        <div className="card-body">
          <h2 className="card-title">🧪 Practice Quizzes</h2>
          <p>Reinforce what you've learned with interactive quizzes designed to test understanding, not just memory.
Each quiz is built to help you identify gaps, review key concepts, and strengthen your grasp through active recall.</p>
          <div className="card-actions justify-end">
            <Link>
            <button className="btn btn-primary">COMING SOON</button>
            </Link>
          </div>
        </div>
        <figure className="w-[100%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gpDGkul4kz7YIZ1KQgxQGDjt-bnrYJ1xXg&s"
            alt="Album" 
            className="w-[100%] h-[100%]"
          />
        </figure>

      </div>

    </div>
  )
}

export default Services
