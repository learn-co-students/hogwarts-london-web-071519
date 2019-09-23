import React from 'react';


const ShowHogDetailsElement = props => (
    <ul>
        <li>Speciality: {props.hog.specialty}</li>
        <li>Greased: {props.hog.greased ? 'greased' : 'not greased'}</li>
        <li>Weight: {props.hog.weight}</li>
        <li>Highest Medal Achieved: {props.hog['highest medal achieved']}</li>
   </ul> 
   
)

export default ShowHogDetailsElement