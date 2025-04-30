import FullBlog from "../components/FullBlog";
import { Skeleton } from "../components/Skeleton";
import {useBlog} from "../hooks/index";
import {useParams} from "react-router-dom";

export const Blog = () => {
    const {id}=useParams();
    const {loading,blog}=useBlog({id: id || ""});
    console.log("blog",blog);
        if(loading){
            return <div> <Skeleton/></div>
        }
    return <div>
        {blog ? (
            <>
                <FullBlog id={blog.id} title={blog.title} content={blog.content} author={blog.author.name|| "Anonymous"} date="2023-10-01" />
            </>
        ) : (
            "Blog not found"
        )}
    </div>
}