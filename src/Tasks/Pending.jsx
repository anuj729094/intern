import React, { useEffect, useState } from 'react'
import { FaInfo } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import Edittask from './Edittask';

const Pending = ({ title, theme, data }) => {
  const dispatch = useDispatch()
  const [arr, setArr] = useState([])
  const[dtask , setDtask] = useState(null)
  const[utask , setUtask] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setArr(data.filter((item) => item.status === title))
  }, [data])
  const handledelete = ()=>{
    dispatch({
      type:"updatedeletetask",
      payload:data.filter((item)=>item.title!==dtask)
    })
    setDtask(null)
  }
  return (
    <div className='tasks h-[28rem] lg:h-[25rem]  bg-slate-100 relative  overflow-y-auto'>
      <h2 style={{ backgroundColor: theme }} className='text-white text-center py-2 sticky top-0 rounded-t'>{title}</h2>
      <div className=' px-2'>
        {
          arr.map((tasks , index) => <div key={index} className="taskcontent bg-gray-300 my-2 px-1 py-1 ">
            <div className="taskheading flex justify-between items-center">
              <h3>{tasks.title}</h3>
              <p className=' bg-blue-700 rounded px-1 py-1 text-white'>{tasks.priority}</p>
            </div>
            <hr className=' bg-black' />
            <div className="taskdescription ">
              <p className=' text-[0.9rem]'>{tasks.description}</p>
              <div className=" assigneeupdatesection flex items-center justify-between my-1 ">
                <p>{tasks.assignee}</p>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <FaInfo className='text-2xl bg-blue-600 rounded text-white py-1 px-1' />
                  </Button>
                  <div
                   
                  >
                    <button onClick={()=>setUtask(tasks)}>Edit</button>
                    <button  onClick={()=>setDtask(tasks.title)}>Delete</button>
                  </div>
                </div>

              </div>
              <div className="statustask inline-block mt-3 bg-blue-700 px-5 py-1 rounded text-white">
                {tasks.status}
              </div>
            </div>
          </div>)
        }
      </div>
     {dtask && <div className=' bg-[#00000096] fixed w-full h-full top-0 left-0 z-20 flex items-center justify-center px-3 '>
        <div className="deletetaskcontainer w-full sm:w-[20rem]">
          <div className=' flex justify-between font-semibold items-center bg-white px-4 py-3'>
            <h3>Delete Task</h3>
            <IoIosCloseCircleOutline className=' text-2xl' onClick={()=>setDtask(null)} />
          </div>
          <div className="optionscontainer bg-pink-200 px-4">
            <p className=' py-2'>Do You Wish to Delete Task</p>
            <div className='flex justify-between items-center pb-3'>
              <p className=' font-semibold'>{dtask}</p>
              <div className="btns flex gap-2">
                <button className=' bg-blue-600 rounded text-white px-2 py-1' onClick={handledelete}>Yes</button>
                <button className=' bg-blue-600 rounded text-white px-2 py-1' onClick={()=>setDtask(null)}>No</button>
              </div>
            </div>
          </div>
        </div>
      </div> }
     {utask && <Edittask close={setUtask} utask={utask}/>}
    </div>
  )
}

export default Pending
