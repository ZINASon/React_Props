import React from 'react'
import PropTypes from 'prop-types';

function handleName(){
  return(
  alert('Hello Zina Sondes')
  )
}
const child = (props) => {
  return (
    <div style={{ fontFamily:"inherit"}}>
    <h1 style={{ color:"blue" }}>{props.fullName}</h1>
    <h2 style={{ color:"red" }}>{props.bio} - {props.profession}</h2>
    <img src={props.children} height="500" width="400" alt='Zina-Photo' style={{borderRadius: 20}}></img>
    <button onClick={()=>handleName()}> Greeting </button>
    </div>
  );
}
child.propTypes ={
  fullName:PropTypes.string,
  bio:PropTypes.number,
  profession:PropTypes.string
};

child.defaultProps = {
  fullName:"oubeid elfattah",
  bio:"Doctorant",
  profession:"computer sciences"
};

export default child