import React from 'react'


export const Profileimage = (props) => {

  return (
   <div className="container">
      <img 
           className="profile-photo" 
           src ={props.image}
      />
      <div className="overlay">
          <h2 className={props.textColor}>{props.name}</h2>
      </div>
      </div>
     );
}

export default Profileimage;