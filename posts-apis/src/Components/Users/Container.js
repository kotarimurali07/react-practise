import React from "react";
import Presentation from "./Presentation";
function Container() {
  return (
    <div>
      <Presentation />
    </div>
  );
}

export default Container;

// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import Presentation from './Presentation'
// function Container() {
//     // const [users,setusers]=([]);
//     // useEffect(()=>{
//     //     axios.get('https://jsonplaceholder.typicode.com/users')
//     //     .then((response)=>{
//     //         console.log(response)
//     //         setusers(response.data)
//     //        // console.log(response.data)
//     //     })
//     //     .catch((err)=>{console.log(err)})
//     // })
//     return (
//         <div>
//             <Presentation
//             // users={users}
//             // setusers={setusers}
//             />
//         </div>
//     )
// }

// export default Container
