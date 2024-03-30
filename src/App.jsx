import { useCallback, useEffect, useState } from 'react'
import { BsPersonFill } from "react-icons/bs";
import './App.css'
import Pending from './Tasks/Pending';
import Createtask from './Tasks/Createtask';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const[priority , setPriority] = useState(null)
  const [filter, setFilter] = useState({
    assignee: "", priority: "", startdate: "", enddate: ""
  })
  const { taskarray, taskbox } = useSelector((state) => state.task)
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
                  <input type="text" placeholder='Assignee Name' value={filter.assignee} onChange={(e) => setFilter({ ...filter, assignee: e.target.value })} className=' rounded py-1 px-2 outline-none ' />
                </li>
                <li className=' '>
                  <input type="text" list='priority' value={filter.priority} onChange={(e) => setFilter({ ...filter, priority: e.target.value })} placeholder='Priority' className=' rounded py-1 px-2 outline-none ' />
                  <datalist id="priority">
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                  </datalist>
                </li>
                <li>
                  <div className=' flex items-center gap-1 rounded bg-white'>
                    <input type="date" value={filter.startdate} className='rounded py-[3px] px-2 outline-none' onChange={(e) => setFilter({ ...filter, startdate: e.target.value })} />
                    <span>-</span>
                    <input type="date" value={filter.enddate} className='rounded py-[3px] px-2 outline-none' onChange={(e) => setFilter({ ...filter, enddate: e.target.value })} />
                  </div>
                </li>
            
              </ul>
            </div>
            <div className="sortcontainer flex lg:items-center flex-col lg:flex-row mt-2 lg:mt-4">
              <label htmlFor="sort">Sort By:</label>
              <select name="" id="sort" className=' lg:ml-4' onChange={(e)=>setPriority(e.target.value)}>
                <option value="select priority" hidden>Select Priority</option>
                <option value="Low to high">Low to high Priority</option>
                <option value="High to Low">High to Low Priority</option>
              </select>
              <button className=' bg-blue-600 rounded text-white px-4 py-1 ml-0 lg:ml-3 w-28 mt-3 lg:mt-0' onClick={() => setFilter({
                  assignee: "", priority: "", startdate: "", enddate: ""
                })}>Clear Filter</button>
            </div>

            <div className="alltasks  overflow-x-auto mt-4 gap-2 lg:gap-0">
              <Pending title="Pending" theme="gray" data={taskarray} filter={filter} sort={priority}/>
              <Pending title="Progress" theme="#9c9c1d" data={taskarray} filter={filter} sort={priority}/>
              <Pending title="Completed" theme="#28b728" data={taskarray} filter={filter} sort={priority}/>
              <Pending title="Deployed" theme="blue" data={taskarray} filter={filter} sort={priority}/>
              <Pending title="Deffered" theme="orange" data={taskarray} filter={filter} sort={priority}/>
            </div>
            <div className=' flex justify-center py-4 lg:justify-normal lg:absolute lg:top-[-4px] lg:right-2 '>
              <button className='bg-blue-600 rounded text-white px-4 py-1' onClick={() => dispatch({
                type: "taskboxtoggle",
                payload: true
              })}>Add New Task</button>
            </div>
          </div>
        </div>
        {taskbox && <Createtask />}
      </div>

    </div>

  )
}

export default App
