import React from 'react';

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-10 mt-10">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400 shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400 shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400 shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400 shadow-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
