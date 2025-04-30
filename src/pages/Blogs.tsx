
import { BlogCard } from "../components/BlogCard"
import{ Appbar } from "../components/Appbar"
import { useBlogs }  from "../hooks/index"
import { Skeleton } from "../components/Skeleton"
export const Blogs=()=>{
    
    const {loading,blogs}=useBlogs();
    if(loading){
        return<div>
        <Appbar/>
        <div >
            <div>
        <Skeleton/>
        
        </div>
        </div>
        </div>
    }
    else{


        return <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className="">
                {blogs.map((blog)=>
                    <BlogCard 
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}  
                    authorName={blog.author.name || "Anonymous"}
                   content={blog.content}
                   publishedDate="2023-10-01" />
                      )}
                
                
        </div>
        
        </div>
        </div>
    }
}