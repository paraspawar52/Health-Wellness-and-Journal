import React, { useState } from "react";
import { useContext } from 'react';
import {dataProvider} from "./Store"
const Meals = () => {
    let {data,setData} =useContext(dataProvider)
    let {submissions,setSubmissions} =useContext(dataProvider)

//   let [data, setData] = useState({ name: "", meal: "", calories: "" });
  const [activeTab, setActiveTab] = useState("Meal");

  const handleChange = (e) => {
   const {name , value } = e.target
   setData({...data ,[name] : value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, data]);
    console.log(data);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Meal":
        return (
          <div className="flex-1 bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Log Meal</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Meal</label>
                <input
                  type="text"
                  name="day"
                  value={data.day}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              {" "}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Calories</label>
                <input
                  type="number"
                  name="calories"
                  value={data.calories}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Meal</label>
                <input
                  type="text"
                  name="meal"
                  value={data.meal}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">BreakFast</label>
                <input
                  type="text"
                  name="breakfast"
                  value={data.breakfast}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Lunch</label>
                <input
                  type="text"
                  name="lunch"
                  value={data.lunch}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Dinner</label>
                <input
                  type="text"
                  name="dinner"
                  value={data.dinner}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Notes</label>
                <textarea className="w-full p-2 border rounded h-24"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded"
              >
                Log Meal
              </button>
            </form>
            {submissions.map((val, idx) => {
              return <h1 key={idx}>{val.name}</h1>;
            })}
          </div>
        );
      case "Activity":
        return (
          <div className="flex-1 bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Log Activity</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Activity</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Duration (minutes)
                </label>
                <input type="number" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Notes</label>
                <textarea className="w-full p-2 border rounded h-24"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Log Activity
              </button>
            </form>
          </div>
        );
      case "Sleep":
        return (
          <div className="flex-1 bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Log Sleep</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Hours Slept</label>
                <input type="number" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Quality</label>
                <select className="w-full p-2 border rounded">
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Notes</label>
                <textarea className="w-full p-2 border rounded h-24"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded"
              >
                Log Sleep
              </button>
            </form>
          </div>
        );
      case "Mood":
        return (
          <div className="flex-1 bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg">
            <div className="w-full md:w-3/2 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">
                Mood Tracker
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <i className="fas fa-sun text-yellow-500 text-4xl mb-2"></i>
                  <span>Happy</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-cloud text-gray-500 text-4xl mb-2"></i>
                  <span>Neutral</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-moon text-blue-500 text-4xl mb-2"></i>
                  <span>Calm</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-sad-tear text-red-500 text-4xl mb-2"></i>
                  <span>Sad</span>
                </div>
              </div>
              <button className="w-full py-2 bg-orange-500 text-white rounded-lg">
                Log Mood
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" w-full  border-2  mt-2 ">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Daily Log</h1>
        <p className="text-gray-500 mb-4">
          Track your meals, activities, sleep, and mood
        </p>
        <div className="flex border-b mb-4 ">
          <button
            onClick={() => setActiveTab("Meal")}
            className={`flex-1 py-2 px-4 text-center border-r ${
              activeTab === "Meal" ? "bg-gray-100" : ""
            }`}
          >
            Meal
          </button>
          <button
            onClick={() => setActiveTab("Activity")}
            className={`flex-1 py-2 px-4 text-center border-r ${
              activeTab === "Activity" ? "bg-gray-100" : ""
            }`}
          >
            Activity
          </button>
          <button
            onClick={() => setActiveTab("Sleep")}
            className={`flex-1 py-2 px-4 text-center border-r ${
              activeTab === "Sleep" ? "bg-gray-100" : ""
            }`}
          >
            Sleep
          </button>
          <button
            onClick={() => setActiveTab("Mood")}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "Mood" ? "bg-gray-100" : ""
            }`}
          >
            Mood
          </button>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex-1 flex items-center justify-center bg-gray-100 p-4 rounded-lg mb-4 md:mb-0 md:mr-4">
            <div className="w-3/4 h-64 flex items-center justify-center bg-gray-200 rounded-lg">
              <i className="fas fa-camera text-gray-400 text-4xl"></i>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
//

export default Meals;
