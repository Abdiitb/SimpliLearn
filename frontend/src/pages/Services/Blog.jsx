import { useParams } from 'react-router';
import { useFetchBlog } from '../../hooks/services/useFetchBlog';

function Blog() {
    const { id } = useParams();
    const blog = useFetchBlog(id);
    

    return (
        <div className="flex flex-col flex-grow justify-center items-center">
            {blog && Object.keys(blog).length !== 0 && (
                <div key={blog._id} className="flex flex-col gap-5 w-[80%]">
                    <div className="text-3xl"><strong>{blog.title}</strong></div>
                    <div>{blog.description.introduction}</div>
                    {blog.description.mainContent.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                    <div>{blog.description.conclusion}</div>
                </div>
            )}
        </div>
    )
}

export default Blog
