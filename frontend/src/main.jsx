import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services.jsx'
import Contact from './pages/Contact/Contact.jsx'
import About from './pages/About/About.jsx'
import CourseList from './pages/Services/CourseList.jsx'
import Course from './pages/Services/Course.jsx'
import BlogList from './pages/Services/BlogList.jsx'
import Blog from './pages/Services/Blog.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/courses' element={<CourseList />} />
      <Route path='/services/courses/:id' element={<Course />} />
      <Route path='/services/blogs' element={<BlogList />} />
      <Route path='/services/blogs/:id' element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
