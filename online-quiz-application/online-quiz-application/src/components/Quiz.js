import React from "react";



const Quiz = (props) => {
  
  return (
    <div>
      {props.data.map(() => (
        <div key = {props._id}>
          <h2>{props.text}</h2>
          <p>{props.answers}</p>
        </div>
      ))}

    </div>
  );
};
export default Quiz;
