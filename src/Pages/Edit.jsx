import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../Components/Text';
import {exportComponentAsJPEG} from 'react-component-export-image'

function Edit() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = createRef();

  console.log(params.get("url"));

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div ref={memeRef} className='meme mt-5 mb-5'>
        <img src={params.get("url") || ""} width="300px" alt="Uploaded content" />
        {Array(count).fill(0).map((_, index) => (
          <Text key={index} />
        ))}
      </div>
      <button onClick={addText}>Add Text</button>
      <button variant="success" onClick={(e) => {exportComponentAsJPEG(memeRef)}} >Save</button>
    </div>
  );
}

export default Edit;
