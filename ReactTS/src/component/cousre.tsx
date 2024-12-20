import {type FC, type PropsWithChildren, type ReactNode } from "react";


type CourseProps = PropsWithChildren<{
    title:string;
    id:number;
    onDelete:(id:number) => void;
}>

const Course: FC<CourseProps> = ({title,children,id,onDelete}) =>{
    return(
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

export default Course;


//----------------------------------------
// import {type PropsWithChildren, type ReactNode } from "react";


// type CourseProps = PropsWithChildren<{title:string}>
// function Course({title,children}:CourseProps){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }

// export default Course;

//----------------------------------------
// import {type ReactNode } from "react";

// interface CourseProps{
//     title:string;
//     children: ReactNode
// }
// function Course({title,children}:CourseProps){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }

// export default Course;


//----------------------------------------
// function Course({title,description}:{
//     title:string;
//     description:string
// }){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }

// export default Course;