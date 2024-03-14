import React from 'react'
import { useTypeWriter } from '../../../hooks/useTypeWriter'

const VoiceTab = (props) => {
    let content=`<span className="">
${props.words}
</span>`;
    const {displayResponse} = useTypeWriter(content,true)
  return (


										<p id="typed" className="typing-anim text-base font-medium lg:text-lg" dangerouslySetInnerHTML={{ __html: displayResponse }}>
											
										</p>
									
  )
}

export default VoiceTab