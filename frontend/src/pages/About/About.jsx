import React from 'react'

function About() {
  return (
    <div className="flex-grow flex flex-col gap-[10vh] mt-10">
      {/* Vision */}
      <div className="hero bg-transparent h-fit">
        <div className="hero-content flex-col lg:flex-row border-2 dark:border-green-500 rounded-2xl border-black">
          <img
            src="https://life.futuregenerali.in/Content/images/about/vision.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">OUR VISION</h1>
            <p className="py-6">
              To make learning feel simple, accessible, and meaningful for everyone — turning confusion into clarity, one concept at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}

      <div className="hero bg-transparent h-fit">
        <div className="hero-content">
          <div className="w-[60%]">
            <h1 className="text-5xl font-bold">CORE VALUES</h1>
            <div className="py-6">
              <ul>
                <li><strong className="text-amber-300">Clarity First:</strong> We believe every concept can be explained simply — and that’s always our starting point.</li>
                <li><strong className="text-amber-300">Structure Matters:</strong> Good learning is built on good structure. Our content is crafted to follow a logical, learner-friendly flow.</li>
                <li><strong className="text-amber-300">Curiosity-Driven:</strong> We value questions, not just answers. Our platform encourages exploration and continuous learning.</li>
                <li><strong className="text-amber-300">Respect Every Learner:</strong> No matter where someone starts, we treat every learning journey with patience and care.</li>
                <li><strong className="text-amber-300">Keep Improving:</strong> Just like learning, we’re always evolving — listening to feedback and refining our content to do better every day.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="hero bg-transparent h-fit mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse border-2 dark:border-green-500 rounded-2xl border-black">
          <img
            src="https://life.futuregenerali.in/Content/images/about/mission.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">OUR MISSION</h1>
            <p className="py-6">
              To break down complex subjects into clear, well-structured lessons through blogs and courses that guide learners step by step.
We aim to create a space where anyone can understand even the hardest topics — no matter their background.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
