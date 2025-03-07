import React from 'react'
import { useSearchParams } from 'react-router'

function Edit() {

    const [params] = useSearchParams();
    console.log(params.get("url")) 

  return (
    <div>
      <img src={params.get("url")} width="500px" alt="" />
    </div>
  )
}

export default Edit
