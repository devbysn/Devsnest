import React from 'react'

import CalorieCard from './CalorieCard';

function Calorie() {
    return (
        <div className="calorie">
            <h1>Your calorie Buddy</h1>
            <div className="items">
                <CalorieCard dish="Pizza" intake="56"/>
                <CalorieCard dish="Burger" intake="89"/>
                <CalorieCard dish="Jalebi" intake="126"/>
                <CalorieCard dish="Pakodas" intake="167"/>
                <CalorieCard dish="Chai" intake="36"/><CalorieCard dish="Jalebi" intake="126"/>
                <CalorieCard dish="Pakodas" intake="167"/>
                <CalorieCard dish="Chai" intake="36"/>
            </div>

        </div>
    )
}

export default Calorie;
