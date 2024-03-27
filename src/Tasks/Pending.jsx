import React from 'react'
import { FaInfo } from "react-icons/fa6";

const Pending = ({ title, theme ,data}) => {
  console.log(data);
  return (
    <div className='tasks h-[28rem] lg:h-[25rem]  bg-slate-100 relative  overflow-y-auto'>
      <h2 style={{ backgroundColor: theme }} className='text-white text-center py-2 sticky top-0 rounded-t'>{title}</h2>
      <div className=' px-2'>

        {
          data.map((tasks)=> <div className="taskcontent bg-gray-300 my-2 px-1 py-1 ">
          <div className="taskheading flex justify-between items-center">
            <h3>{tasks.title}</h3>
            <p className=' bg-blue-700 rounded px-1 py-1 text-white'>{tasks.priority}</p>
          </div>
          <hr className=' bg-black' />
          <div className="taskdescription ">
            <p className=' text-[0.9rem]'>{tasks.description}</p>
            <div className="assigneeupdatesection flex items-center justify-between my-1 ">
              <p>{tasks.assignee}</p>
              <button className='bg-blue-700 rounded px-1 py-1 text-white'><FaInfo />
              </button>
            
            </div>
            <div className="statustask inline-block mt-3 bg-blue-700 px-5 py-1 rounded text-white">
                {tasks.status}
              </div>
          </div>
        </div>)
        }
       
      
      </div>
    </div>
  )
}

export default Pending
