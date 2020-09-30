import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import fileIcon from '../../assets/icons/vector3.png'

import './styles.css'

function Dropzone({ setIMG }) {
    
  const [fileSentURL, setFileSentURL] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);
    setFileSentURL(fileURL)
    setIMG(fileURL)
  },[setIMG])

  const { getInputProps, getRootProps} = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  return (
    <div id="dropzone" className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />

      {fileSentURL ? (
        <div className="icon">
            <img src={fileSentURL} alt="Imagem Anexada"/>
        </div>
      ):(
        <>
          <div className="icon">
            <img src={fileIcon} alt="Drop"/>
          </div>
          <p>Arraste uma imagem para anexar ao ticket</p>
        </>
      )}

    </div>
  );
}

export default Dropzone;