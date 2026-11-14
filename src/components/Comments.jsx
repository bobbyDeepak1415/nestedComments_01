import React from 'react'
import CommentBox from './CommentBox'


const data=[
  {name:"Something1",
    comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas."
  },
  
  {name:"Something2",
    comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas."
  },
  {name:"Something3",
    comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas."
  },
  {name:"Something4",
    comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas."
  },

]

const Comments = () => {
  return (
    <div>
      <CommentBox/>
    </div>
  )
}

export default Comments
