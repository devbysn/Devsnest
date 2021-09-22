import React from 'react'

function CalorieCard(props) {
    const {dish, intake} = props;
    return (
        <div className="box">
            <h1>{dish}</h1>
            <p>you have consumed {intake} cals today</p>
        </div>
    )
}

export default CalorieCard
