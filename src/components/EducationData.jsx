import React, { useState, useEffect } from 'react';

function MyEducation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./educations.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div id="education_title">
        <h1>Education</h1>
      </div>
      {data.map(item => (
        <div>
          <h2 className="degree-title">{item.degree}</h2>
          <p className="education-institution">{item.institution}</p>
        </div>
      ))}
    </div>
  );
}

export default MyEducation;



















// import {useState, useEffect} from "react";

// export default function Education() {
    
//     const [educationDegree, setEducationDegree] = useState("");
  

//     useEffect(() => {
//         const getEducation = async () => {
//             let response = await fetch(
//                 "./education.json"
//             );
//             let data = await response.json();
//             console.log(data);
//             setEducationDegree(data.degree);
            
//         }
//         getEducation();
//     }, []);

   

//     return(
//         <div>
//             <h2>This is a Degree</h2>
//             <div>
//                 {educationDegree}
//             </div>
//         </div>
//     );
// }