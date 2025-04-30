import { use, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
export const Publish = () => {
    const [content, setContent] = useState("");
    const [title,setTitle]= useState("");
    const navigate = useNavigate();

    return (
        
        <div>
            <Appbar/>
        
        <div className="max-w-4xl mx-auto mt-8 p-4">
        
      <div className="bg-white border rounded-xl shadow-sm p-6 space-y-6">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full text-4xl font-bold bg-transparent outline-none placeholder-gray-400 border-b pb-2"
        />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your story..."
          className=" pl-6 mt-4 mb-4 w-full min-h-[300px] resize-none border rounded-lg bg-transparent outline-none placeholder-gray-400 text-lg leading-relaxed"
        />

        {/* Publish Button */}
        <div className="flex justify-end">
          <button onClick={postRequest}className="px-6  mt-12 py-2 bg-black text-white rounded-3xl hover:bg-gray-800 transition">
            Publish
          </button>
        </div>
    </div>
    </div>

    )
    async function postRequest(){
        console.log("post inputs",content);
        
        const response = await axios.post(
            `${BACKEND_URL}/api/v1/blog`,
            {
            title,
            content
            },
            {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
            }
        );
        const data = response.data;
        console.log("response:",response);
        console.log("data:",data);
        if (response.data.id) {
            console.log("Blog published successfully");
            alert("Blog published successfully");
            navigate(`/blog/${data.id}`);
            // Optionally, redirect or show a success message
        } else {
            console.error("Error publishing blog:", data.message || "Unexpected error occurred");
        }
    }
}