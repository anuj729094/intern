import { useCallback, useEffect, useState } from 'react'
import { BsPersonFill } from "react-icons/bs";
import './App.css'
import Pending from './Tasks/Pending';
import Createtask from './Tasks/Createtask';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const {taskarray , taskbox} = useSelector((state)=>state.task)
  const dispatch = useDispatch()
 
  return (
    <div className='xl:h-[100vh] xl:flex xl:justify-center xl:items-center'>
      <div className='  xl:w-[80rem] '>
        <div className="firstsection  text-2xl font-semibold  flex items-center justify-between px-2 py-3">
          <h1>Task Board</h1>
          <div className="profilebtn bg-white rounded-full px-2 py-2">
            <BsPersonFill />
          </div>
        </div>
        <div className="secondsection  overflow-y-hidden px-2 pt-1">
          <div className="taskscontainer border-2 border-gray-300 rounded h-full lg:py-3 px-2 relative">
            <div className="filtercontainer flex flex-col lg:flex-row gap-1">
              <p className=' text-lg'>Filter By:</p>
              <ul className=' listoffilters flex overflow-x-auto gap-2'>
                <li>
                  <input type="text" placeholder='Assignee Name' className=' rounded py-1 px-2 outline-none ' />
                </li>
                <li className=' '>
                  <input type="text" list='priority' placeholder='Priority' className=' rounded py-1 px-2 outline-none ' />
                  <datalist id="priority">
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                  </datalist>
                </li>
                <li>
                  <div className=' flex items-center gap-1 rounded bg-white'>
                    <input type="date" className='rounded py-[3px] px-2 outline-none' />
                    <span>-</span>
                    <input type="date" className='rounded py-[3px] px-2 outline-none' />
                  </div>
                </li>
              </ul>
            </div>
            <div className="sortcontainer flex flex-col lg:flex-row mt-2 lg:mt-4">
              <p className=' text-lg'>Sort By:</p>
              <div className=' lg:ml-3'>
                <input type="text" list='sort' placeholder='Priority' className=' rounded py-1 px-2 outline-none ' />
                <datalist id="sort">
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </datalist>
              </div>
            </div>
            <div className="alltasks  overflow-x-auto mt-4 gap-2 lg:gap-0">
              <Pending title="Pending" theme="gray"data={taskarray}/>
              <Pending title="Progress" theme="#9c9c1d" data={taskarray}/>
              <Pending title="Completed" theme="#28b728" data={taskarray}/>
              <Pending title="Deployed" theme="blue" data={taskarray}/>
              <Pending title="Deffered" theme="orange"  data={taskarray}/>
            </div>
            <div className=' flex justify-center py-4 lg:justify-normal lg:absolute lg:top-0 lg:right-2 '>
              <button className='bg-blue-700 rounded text-white px-5 py-2' onClick={()=>dispatch({
                type:"taskboxtoggle",
                payload:true
              })}>Add New Task</button>
            </div>
          </div>
        </div>
        {taskbox && <Createtask/>}
      </div>

    </div>

  )
}

export default App
