import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import fileIcon from '../../assets/icons/vector3.png'

import './styles.css'

function Dropzone() {
    
  const dispatch = useDispatch();
  const fileSentURL = useSelector(state => state.img)

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);
    dispatch({type: 'SET_IMG', url: fileURL})
  },[dispatch])

  const { getInputProps, getRootProps} = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  return (
    <div id="dropzone" className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept='image/*'/>

      {fileSentURL ? (
        <div className="icon">
            <img className="loadImg" src={fileSentURL} alt="Imagem Anexada"/>
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