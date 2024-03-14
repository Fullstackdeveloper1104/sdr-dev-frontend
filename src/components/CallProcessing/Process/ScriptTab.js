import React from 'react'
import { useTypeWriter } from '../../../hooks/useTypeWriter'

const ScriptTab = (props) => {

    const content=`  
  
        <span className="">
        ${props.words}       
        </span>  
`

    const {displayResponse} = useTypeWriter(content,true)
  return (
    <p id="typed" className="text-base font-medium lg:text-lg"  dangerouslySetInnerHTML={{ __html: displayResponse }}>

</p>
   
  )
}

export default ScriptTab