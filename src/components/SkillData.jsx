import React, { useState, useEffect } from 'react';

function MySkill() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./skills.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));

    }, []);

    return (
        <div>
            <div id="skills_title">
                <h1>Skills</h1>
            </div>
            <div className='skills-container'>
                {data.map(item => (
                <div className='a-skill'>
                    <img className="skill-image" src={item.image_url} />
                    <h2>{item.name}</h2>
                </div>
                ))}
            </div>
        </div>
    )

}

export default MySkill;