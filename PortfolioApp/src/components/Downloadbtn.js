import React from 'react';
import Abdullah_Resume from  '../resume/Abdullah_Resume.pdf'
const DownloadButton = () => {
  

  return (
  <>
    <a download={Abdullah_Resume} href={Abdullah_Resume} className='downloadbtn'>
        {/* 📥  */}
        Download Resume
    </a>
  </>
  );
};

export default DownloadButton;
