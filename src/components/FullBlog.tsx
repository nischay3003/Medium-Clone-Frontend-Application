
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

interface BlogProps {
    title: string;
    author: string;
    id: string;
    content: string;
    date: string;
}

// const FullBlog: React.FC<BlogProps> = ({ title, author, id, content, date }) => {
//     console.log("FullBlog component rendered with props:", { title, author, id, content, date });
//     return (
//         <div className="min-h-screen bg-gray-100 py-10 px-4">
//             <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//                     <p>
//                         By <span className="font-medium text-gray-700">{author}</span>
//                     </p>
//                     <p>{new Date(date).toLocaleDateString()}</p>
//                 </div>
//                 <div className="border-t border-gray-300 pt-6">
//                     <p className="text-gray-700 leading-relaxed">{content}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
 export const FullBlog = ({ title, author, id, content, date }: BlogProps) => {
    return (
        <div>
           <Appbar/>
           <div className="flex justify-center">
            
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl">
            <div className=" col-span-8">
                <div className="text-3xl font-extrabold">
                    {title} 

                </div>
                <div className="text-slate-500 pt-2">
                    Posts on {new Date(date).toLocaleDateString()}
                </div>
                <div className="pt-4">
                    {content}
                </div>

            </div>    
            <div className=" col-span-4">
                <div className="text-slate-500  text-lg">
                    Author
                </div>
                <div className="flex w-full"> 
                <div className="flex flex-col justify-center pr-4">
                    <Avatar size={"big"} name={author} />
                </div>
                <div>
                <div className="uppercase text-xl font-bold  ">{author}</div>
                
                <div className="text-sm italic text-gray-600 mt-2 capitalize text-slate-400">
                    {author} is an insightful writer who shares engaging and thought-provoking ideas.
                </div>
                </div>
                </div>
                
            </div>
            
            

            
         </div>

         </div>
         </div>
    )
}

export default FullBlog;