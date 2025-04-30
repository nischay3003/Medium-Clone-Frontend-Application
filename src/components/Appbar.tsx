
import { Link } from "react-router-dom";
import {Avatar} from "./BlogCard";
export const Appbar = () => {
    // const name = localStorage.getItem("name") || "Guest";
    return <div className="border-b flex justify-between px-10 py-4 items-center"> 
        <Link to ={'/blogs'} className="no-underline flex flex-col justify-center cursor-pointer" >
            Medium
        </Link>
        
        <div className="flex flex-cols  justify-center">
            <Link to={'/publish'} className="no-underline flex flex-col justify-center cursor-pointer">
            <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none flex flex-col focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
            </Link>
            <Avatar size={"big"} name={"Nischay"} />
        </div>
        </div>
}