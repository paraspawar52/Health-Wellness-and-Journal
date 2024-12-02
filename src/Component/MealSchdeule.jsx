import React from 'react'
import { useContext } from 'react';
import {dataProvider} from "./Store"
const MealSchdeule = () => {
    let {submissions,setSubmissions} =useContext(dataProvider)

  return (
    <div><div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-8">Weekly Meal Schedule</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {submissions.map((meal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{meal.day}</h2>
                <div className="mb-2">
                    <h3 className="font-bold">Breakfast:</h3>
                    <p>{meal.breakfast}</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Lunch:</h3>
                    <p>{meal.lunch}</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Dinner:</h3>
                    <p>{meal.dinner}</p>
                </div>
            </div>
        ))}
    </div>
</div></div>
  )
}

export default MealSchdeule