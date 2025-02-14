import React from 'react'

const CreateTasks = () => {
  return (
    <div className="mt-8 mx-auto w-2/3 md:w-1/2 border-2 border-emerald-600 rounded-lg bg-[#222] shadow-lg p-6">
        <form className="flex flex-wrap gap-6">
          {/* Left Column */}
          <div className="w-full md:w-[48%] space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-emerald-600">Task Title</h3>
              <input
                type="text"
                placeholder="Enter Task Title"
                className="w-full bg-[#333] p-2 rounded-md text-white border-2 border-emerald-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-emerald-600">Date</h3>
              <input
                type="date"
                className="w-full bg-[#333] p-2 rounded-md text-white border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-emerald-600">Assign to</h3>
              <input
                type="text"
                placeholder="Enter Employee Name"
                className="w-full bg-[#333] p-2 rounded-md text-white border-2 border-emerald-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[48%]">
            <h3 className="text-sm font-semibold text-emerald-600">Task Description</h3>
            <textarea
              placeholder="Enter Task Description"
              className="w-full h-32 bg-[#333] p-2 rounded-md text-white border-2 border-emerald-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
            />
            <div>
              <h3 className="text-sm font-semibold text-emerald-600">Category</h3>
              <input
                type="text"
                placeholder="design, dev etc."
                className="w-full bg-[#333] p-2 rounded-md text-white border-2 border-emerald-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full rounded-md px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTasks