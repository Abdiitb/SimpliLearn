import { Link } from 'react-router'

function Home() {
  return (
    <div className="hero flex-grow">
      <div className="hero-content text-center">
        <div className="sm:max-w-[60%]">
          <div>
            <h1 className="lg:text-5xl font-bold sm:mb-5 mb-1 md:text-4xl sm:text-3xl text-2xl">Simplify Learning</h1>
            <h1 className="lg:text-5xl font-bold md:text-4xl sm:text-3xl text-2xl">Amplify Understanding</h1>
          </div>

          <p className="py-6 sm:text-2xl text-lg">
            Every topic is like a puzzle waiting to come together.
            When the right pieces are explained in the right order,
            the bigger picture becomes easy to see
          </p>

          <button className="btn btn-primary sm:text-xl text-lg">
            <Link to="/services">Our Services</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
