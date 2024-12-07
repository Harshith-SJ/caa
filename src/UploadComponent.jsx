import React, { useState } from 'react';
import { setFile, getFile } from './indexedDB';

const UploadComponent = () => {
  const [file, setFileState] = useState(null);
  const [retrievedFile, setRetrievedFile] = useState(null);

  const handleFileChange = (e) => {
    setFileState(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        await setFile(file.name, file);
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleRetrieve = async () => {
    if (file) {
      try {
        const retrieved = await getFile(file.name);
        setRetrievedFile(retrieved);
        console.log('File retrieved successfully');
      } catch (error) {
        console.error('Error retrieving file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleRetrieve}>Retrieve</button>
      {retrievedFile && (
        <div>
          <h3>Retrieved File:</h3>
          <p>{retrievedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;