import {useState,useEffect} from "react";
import axios from "axios";
import {BACKEND_URL} from "../config";

interface Blog{
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token") || ""}`
            }
        }).then(response => {
            console.log("response",response);
            if (response.status !== 200) {
                throw new Error("Failed to fetch blogs");
            }
             setBlogs(response.data);
            console.log("Blogs",blogs);
            setLoading(false);
    }).catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
    });
    }, []);
            
    return {
        loading,
        blogs
    }
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true);
    const [blog,setBlog]=useState<Blog>();
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token") || ""}`
            }
        }).then(response => {
            console.log("response",response);
            if (response.status !== 200) {
                throw new Error("Failed to fetch blogs");
            }
             setBlog(response.data);
            // console.log("Blogs",blogs);
            setLoading(false);
    }).catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
    });
    }, []);
            
    return {
        loading,
        blog
    }
}