import { useFetchAllBlogs } from '../../hooks/services/useFetchAllBlogs.js'
import { Link } from 'react-router';

function BlogList() {
    const blogs = useFetchAllBlogs();

    return (
        <div className="overflow-x-auto rounded-box border-2 border-black dark:border-green-500 flex-grow">
            <table className="table">

                <thead>
                    <tr className="dark:text-white text-black">
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {blogs && blogs.length !== 0 && blogs.map((blog, index) => (
                        <tr key={blog._id}>
                            <th>{index + 1}</th>
                            <td>{blog.title}</td>
                            <td>{blog.short_description}</td>
                            <td><Link to={'/services/blogs/' + blog._id}><button className="cursor-pointer btn bg-green-500">View</button></Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default BlogList
