import React from 'react'

const PigInfo = ({hog}) => {
    return (
            <div>
                <h4>Specialty: {hog.specialty}</h4>
                <span>Weight: {hog.weight} // Highest Medal: {hog['highest medal achieved']}</span>
            </div>
    )
}

export default PigInfo