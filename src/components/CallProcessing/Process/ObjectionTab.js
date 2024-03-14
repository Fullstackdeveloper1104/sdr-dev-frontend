import React from 'react'
import { useTypeWriter } from '../../../hooks/useTypeWriter'

const ObjectionTab = () => {
//     let content=`   <span className="">
//     Objection 1: How can you know who will pick up the
//     phone?
// </span>

// <span className="mt-4">
//     Answer 1: We use a combination of big data and
//     artificial intelligence to build a pickup profile of
//     each of your prospects so we know exactly their
//     phone behavior.
// </span>

// <span className="mt-4">
//     Objection 2: We already use sales force.
// </span>

// <span className="mt-4">
//     Answer 2: That's great. Sales force is a great. Our
//     software sits on top of sales force and fully
//     integrates with the platform. All it is allowing you
//     to do is reach more of your prospects that are
//     currently in your sales system.
// </span>

// <span className="mt-4">
//     Objection 3: What counts as a reach?
// </span>

// <span className="mt-4">
//     Answer 3: A reach is when someone picks up the
//     phone. It is not a voicemail or an operator.
// </span>`;
    let content = '<span className = ""></span>'
    const {displayResponse} = useTypeWriter(content,true)
  return (
 
    <p id="typed" className="typing-anim text-base font-medium lg:text-lg" dangerouslySetInnerHTML={{ __html: displayResponse }}>
     
    </p>

  )
}

export default ObjectionTab