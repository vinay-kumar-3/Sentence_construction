import { ArrowBigRight, ArrowRight } from "lucide-react";
import React from "react";
import { useState } from "react";

const TestScreen = ({questions}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedWords, setSelectedWords] = useState([]);

    const handleSelect = (word) => {
        const currentQuestion = questions[currentIndex];
        const totalBlanks = currentQuestion.question.split("__________").length - 1;
    
        if (selectedWords.length < totalBlanks) {
          setSelectedWords([...selectedWords, word]);
        }
      };
    
      const handleNext = () => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setSelectedWords([]); // reset for next question
        } else {
          console.log("Quiz complete!");
        }
      };

    const _question  = questions[currentIndex];
    const {question, options, correctAnswers} = _question;
    const sentenceParts = question.split("__________");
    
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 md:p-10">
            {/* Top Section */}
            <div className="flex items-center justify-between mb-6">
            <span className="text-gray-700 font-medium text-lg">0:15</span>
            <button className="border-1 border-gray-200 px-4 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
                Quit
            </button>
            </div>

            {/* Progress Bar */}
            <div className="flex  gap-1 mb-6">
            {[...Array(10)].map((_, i) => (
                <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${ "bg-gray-200 w-[80px]"
                }`}
                ></div>
            ))}
            </div>

            {/* Instructions */}
            <h2 className="text-center text-gray-600 font-semibold text-sm mb-10">
            Select the missing words in the correct order
            </h2>

            {/* Question */}
            <p className="text-center text-lg text-gray-800 leading-8 px-4">
            Yesterday, we had a{"  "}
            <span className="inline-block w-20 border-b border-gray-400 mx-1" />
            discussion about the project, but it{" "}
            <span className="inline-block w-20 border-b border-gray-400 mx-1" />
            into an argument because everyone had{" "}
            <span className="inline-block w-20 border-b border-gray-400 mx-1" />
            opinions on the final{" "}
            <span className="inline-block w-20 border-b border-gray-400 mx-1" />.
            </p>

            {/* Word Options */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                {options.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    disabled={selectedWords.includes(opt)}
                    className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 disabled:opacity-0"
                >
                    {opt}
                </button>
                ))}
            </div>

            {/* Arrow Button */}
            {/* <div className="flex justify-end mt-12">
            <button className="border rounded-xl w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
                <span className="text-xl">➜</span>
            </button>
            </div> */}
            <div className="flex justify-end mt-12">
                <button
                    onClick={handleNext}
                    
                    className={`${
                    selectedWords.length === 4 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-white"
                    } text-white px-6 py-2 rounded-md disabled:opacity-50`}
                >
                    <ArrowRight/>
                </button>
            </div>
        </div>
        </div>
    );
};

export default TestScreen;
