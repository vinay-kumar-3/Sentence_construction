import React from "react";
import vectorLogo from '../../assets/Vector.svg';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = ({ testDetails}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* NavBar */}
      <nav className="shadow-md py-4 px-6 flex items-center justify-between">
        <div className="w-6" />
        <h1 className="text-center text-sm text-gray-800 font-medium text-gray-800 text-center flex-1">
          Sentence Construction
        </h1>
        <button className="text-gray-500 hover:text-gray-700 text-xl">&#8942;</button>
      </nav>

      {/* Main Section */}
      <div className="flex justify-center items-center py-10">
        <div className="max-w-xl w-full text-center px-6">
          <div className=" px-8 py-12">
            {/* Icon + Header */}
            <div className="flex flex-col items-center gap-4">
              <img src={vectorLogo} alt="svg" />
              <h2 className="text-2xl font-semibold text-gray-800">Sentence Construction</h2>
              <p className="text-sm text-gray-500">
                Select the correct words to complete the sentence by arranging the provided options in the right order.
              </p>
            </div>

            {/* Stats */}
            {testDetails && <div className="grid grid-cols-3 gap-4 mt-10 text-sm text-gray-600">
              <div>
                <p className="font-medium">Time Per Question</p>
                <p className="text-gray-700 mt-1">{testDetails.time} sec</p>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <p className="font-medium">Total Questions</p>
                <p className="text-gray-700 mt-1">{testDetails.noQuestions}</p>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <p className="font-medium">Coins</p>
                <div className="flex justify-center gap-2 items-center mt-1">
                  <span className="h-[15px] w-[15px] rounded-full border-2 border-solid border-[#F5CE00] bg-[#FFD700] rotation"> </span>
                  <span className="text-gray-700">{testDetails.coins}</span>
                </div>
              </div>
            </div>}


            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <button className="w-30 px-6 py-2 rounded-lg border border-indigo-500 font-medium text-indigo-600 hover:bg-indigo-50">
                Back
              </button>
              <button 
                onClick={() => navigate("/testscreen")}
                className="w-30 px-6 py-2 rounded-lg bg-indigo-600 font-medium text-white hover:bg-indigo-700">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
