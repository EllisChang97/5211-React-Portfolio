import React, { useState, useEffect } from 'react';

function MyProject() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div id="projects_title">
        <h1>Projects</h1>
      </div>
      <div id="projects_container">
          
            {data.map(item => (
              <div className="a_project">
                  
                  <h2>{item.title}</h2>
                  <img className="project_image" src={item.image} />
                  <p className="project_description">{item.content}</p>
              </div>
              ))}
          
      </div>
    </div>
    
  );
}

export default MyProject;


