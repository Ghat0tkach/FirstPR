import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    // <div
    //   className="border border-slate-300 p-4 rounded-md shadow-sm
    // bg-white transition"
    // >
    //   <p className="text-sm text-slate-400">{props.date}</p>

    //   <Link href={`/posts/${props.slug}`}>
    //     <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
    //   </Link>
    //   <p className="text-slate-700">{props.author}</p>
     
    // </div>

    <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden pr-10">
  <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
  
    <span className="text-2xl font-semibold">{props.title}</span>
    
    <p>{props.date}</p>
  </div>
  <Link href={`/posts/${props.slug}`}>
  <h2 className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" >ReadMe</h2>
  </Link>
</div>
  );
};

export default PostPreview;
