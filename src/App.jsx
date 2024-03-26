import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import { BsPersonFill } from "react-icons/bs";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import './App.css'
import Pending from './Tasks/Pending';

function App() {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: new Date(2022, 0, 20),
  })

  return (
    <div className=' xl:flex xl:justify-center'>
      <div className=' h-[100vh] xl:w-[80rem] '>
        <div className="firstsection h-[10vh] text-2xl font-semibold  flex items-center justify-between px-2">
          <h1>Task Board</h1>
          <div className="profilebtn bg-white rounded-full px-2 py-2">
            <BsPersonFill />
          </div>
        </div>
        <div className="secondsection h-[90vh] xl:h-[87vh] overflow-y-hidden px-2 pt-1">
          <div className="taskscontainer border-2 border-gray-300 rounded h-full lg:py-3 px-2">
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
            <div className="alltasks  h-full  overflow-x-auto mt-4 gap-2 lg:gap-0 pb-4">
             <Pending title="Pending" theme="gray"/>
             <Pending title="In Progress" theme="#9c9c1d"/>
             <Pending title="Completed" theme="#28b728"/>
             <Pending title="Deployed" theme="blue"/>
             <Pending title="Deffered" theme="orange"/>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App
