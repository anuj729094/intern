import React, { useEffect, useState } from 'react'
import { FaInfo } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button"
import Edittask from './Edittask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pending = ({ title, theme, data, filter, sort }) => {
  const { assignee, priority, startdate, enddate } = filter
  const dispatch = useDispatch()
  const [arr, setArr] = useState([])
  const [dtask, setDtask] = useState(null)
  const [utask, setUtask] = useState(null)

  const handledelete = () => {
    dispatch({
      type: "updatedeletetask",
      payload: data.filter((item) => item.title !== dtask)
    })
    setDtask(null)
  }
  useEffect(() => {
    if (assignee && priority && startdate && enddate) {
      setArr(data.filter((task) => task.priority === priority && task.assignee === assignee && task.startdate === startdate && task.enddate === enddate && task.status === title))
    }
    else if (assignee && startdate && enddate) {
      setArr(data.filter((task) => task.assignee === assignee && task.startdate === startdate && task.enddate === enddate && task.status === title))
    }
    else if (priority && startdate && enddate) {
      setArr(data.filter((task) => task.priority === priority && task.startdate === startdate && task.enddate === enddate && task.status === title))
    }
    else if (assignee && priority) {
      setArr(data.filter((task) => task.priority === priority && task.assignee === assignee && task.status === title))
    }
    else if (priority) {
      setArr(data.filter((task) => task.priority === priority && task.status === title))
    }
    else if (assignee) {
      setArr(data.filter((task) => task.assignee === assignee && task.status === title))
    }
    else if (startdate && enddate) {
      setArr(data.filter((task) => task.startdate === startdate && task.enddate === enddate && task.status === title))
    }
    else {
      setArr(data.filter((item) => item.status === title))
    }
  }, [assignee, priority, startdate, enddate, data])
  useEffect(() => {
    if (sort && arr.length !== 0) {
      if (sort === "High to Low") {
        setArr(arr.sort(function (a, b) {
            if (Number(a.priority[1]) > Number(b.priority[1])) {
              return 1
            }
            else {
              return -1
            }
          }))
     
        
      }
      else {
        setArr(arr.sort(function (a, b) {
          if (Number(a.priority[1]) > Number(b.priority[1])) {
            return -1
          }
          else {
            return 1
          }
        }))
      }
    }
  }, [sort])
  return (
    <div className='tasks h-[28rem] lg:h-[25rem]  bg-slate-100 relative  overflow-y-auto'>
      <h2 style={{ backgroundColor: theme }} className='text-white text-center py-2 sticky z-[1] top-0 rounded-t'>{title}</h2>
      <div className=' px-2'>
        {
          arr.map((tasks, index) => <div key={index} className="taskcontent bg-gray-300 my-2 px-1 py-1 ">
            <div className="taskheading flex justify-between items-start">
              <h3>{tasks.title}</h3>
              <p className=' bg-blue-700 rounded px-1 py-1 text-white'>{tasks.priority}</p>
            </div>
            <hr className=' bg-black' />
            <div className="taskdescription ">
              <p className=' text-[0.9rem]'>{tasks.description}</p>
              <div className=" relative assigneeupdatesection flex items-center justify-between my-1 ">
                <p>{tasks.assignee}</p>
                <div className=' absolute right-[-1rem]'>
                  <HoverCard >
                    <HoverCardTrigger asChild>
                      <Button variant="link"> <FaInfo className='text-2xl bg-blue-600 rounded text-white py-1 px-1' /></Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-20 flex flex-col gap-2 items-start">
                      <button className=' active:bg-slate-200 w-full text-left' onClick={() => setUtask(tasks)}>Edit</button>
                      <button className='active:bg-slate-200 w-full text-left' onClick={tasks.status === "Completed" ? () => toast("Completed task cannot be deleted", {
                        type: "error"
                      }) : () => setDtask(tasks.title)}>Delete</button>
                    </HoverCardContent>
                  </HoverCard>
                </div>

              </div>
              <div className="statustask inline-block mt-3 bg-blue-700 px-5 py-1 rounded text-white">
                {tasks.status}
              </div>
            </div>
          </div>)
        }
      </div>
      {
        dtask && <div className=' bg-[#00000096] fixed w-full h-full top-0 left-0 z-20 flex items-center justify-center px-3 '>
          <div className="deletetaskcontainer w-full sm:w-[20rem]">
            <div className=' flex justify-between font-semibold items-center bg-white px-4 py-3'>
              <h3>Delete Task</h3>
              <IoIosCloseCircleOutline className=' text-2xl' onClick={() => setDtask(null)} />
            </div>
            <div className="optionscontainer bg-pink-200 px-4">
              <p className=' py-2'>Do You Wish to Delete Task</p>
              <div className='flex justify-between items-center pb-3'>
                <p className=' font-semibold'>{dtask}</p>
                <div className="btns flex gap-2">
                  <button className=' bg-blue-600 rounded text-white px-2 py-1' onClick={handledelete}>Yes</button>
                  <button className=' bg-blue-600 rounded text-white px-2 py-1' onClick={() => setDtask(null)}>No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {utask && <Edittask close={setUtask} utask={utask} />}
      <ToastContainer />
    </div >
  )
}

export default Pending
