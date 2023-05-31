import React from 'react';
import resumeFile from '../assets/Ellis_Chang_Resume.pdf';

const ResumeButton = () => {
  const openResume = () => {
    window.open(resumeFile, '_blank');
  };

  return (
    <div id="resume-button-container">
      <button id="resume-button" onClick={openResume}>Resume</button>
    </div>
    
  );
};

export default ResumeButton;