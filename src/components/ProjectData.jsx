import React, { useState, useEffect } from 'react';

function MyProject() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    // window.location.href = link;
    window.open(link, '_blank');
  };

  return (
    <div>
      <div id="projects_title">
        <h1>Projects</h1>
      </div>
      <div id="projects_container">
            {data.map(item => (
              <div className="a_project">
                  <h2>{item.title}</h2>
                  <div class="project_image_container">
                    <img className="project_image" alt="" src={item.image}/>
                    <p className="project_description">{item.content}</p>
                  </div>
                  <button class="github-button" onClick={() => { window.open(item.githubLink, '_blank'); }}>Github</button>
              </div>
              ))}
          
      </div>
    </div>
    
  );
}

export default MyProject;


