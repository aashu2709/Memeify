import React, { useState } from 'react'
import { useSearchParams } from 'react-router'
import Text from '../Components/Text';

function Edit() {

    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    console.log(params.get("url")) 

    const addText = () =>{
        setCount(count + 1);
    }

  return (
    <div>
        <div>
      <img src={params.get("url")} width="500px" alt="" />
      {Array(count).fill(0).map((e) => <Text/>)}
        </div>
        <button onClick={addText}>Add Text</button>
    </div>
  )
}

export default Edit
