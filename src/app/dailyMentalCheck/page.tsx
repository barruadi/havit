'use client';

import { useState } from 'react';

const questions = [
  'I experienced trembling (e.g., in the hands).',
  'I felt that I was using a lot of nervous energy.',
  'I felt scared without any good reason.',
  'I found myself getting upset by quite trivial things.',
  'I felt restless and could not relax.',
  'I had trouble concentrating.',
  'I felt overwhelmed by simple tasks.',
  'I felt emotionally drained by the end of the day.',
  'I found it difficult to unwind after stressful situations.',
  'I felt like I had no control over my emotions.',
];

const MentalCheck = () => {
  const [responses, setResponses] = useState(Array(questions.length).fill(1));
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;

  const handleChange = (index: number, value: number) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const currentQuestions = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);

  const goToNextPage = () => {
    if ((currentPage + 1) * questionsPerPage < questions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#C7F9CC] py-5">
      <div className="bg-[#C7F9CC] w-full max-w-sm p-6 ">
        <h1 className="text-2xl font-semibold text-center text-[#2F6681] mb-6">Cek Mental Harian</h1>

        <div className="space-y-6">
          {currentQuestions.map((question, index) => (
            <div key={index}>
              <p className="text-[#2F6681] mb-2 text-sm">{question}</p>
              <div className="flex justify-between">
                {[1, 2, 3, 4].map((value) => (
                  <label key={value} className="flex items-center space-x-2 text-sm text-[#2F6681]">
                    <input
                      type="radio"
                      name={`question-${currentPage * questionsPerPage + index}`}
                      value={value}
                      checked={responses[currentPage * questionsPerPage + index] === value}
                      onChange={() => handleChange(currentPage * questionsPerPage + index, value)}
                      className="form-radio h-4 w-4 text-[#2F6681]"
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={goToPreviousPage}
            className="bg-[#2F6681] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6AA7C5] transition disabled:opacity-50"
            disabled={currentPage === 0}
          >
            &#8592; Previous
          </button>
          <button
            onClick={goToNextPage}
            className="bg-[#2F6681] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6AA7C5] transition disabled:opacity-50"
            disabled={(currentPage + 1) * questionsPerPage >= questions.length}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentalCheck;
