import { handletask } from '@/redux/action';
import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';

const Createtask = () => {
    const dispatch = useDispatch()
    const [task, setTask] = useState({
        title: "", description: "", team: "", assignee: "", startdate:"" , enddate:"", status: null, priority: null
    })
    const [errors, setErrors] = useState({})
    const postdata = (e) => {
        let errors = {}
        e.preventDefault()
        if (task.title.length < 5) {
            errors.title = true
        }
        if (task.description.length < 5) {
            errors.description = true
        }
        if (task.team.length < 5) {
            errors.team = true
        }
        if (task.assignee.length < 5) {
            errors.assignee = true
        }
        if(!task.status){
            errors.status=true
        }
        if(!task.priority){
            errors.priority=true
        }
        if(Object.keys(errors).length===0){
            dispatch(handletask(task))
            document.getElementById("task").reset()
        }
        setErrors(errors)
    }
    return (
        <div className=' bg-[#00000082] fixed overflow-auto py-4 w-full h-full z-40 top-0 left-0 flex items-center justify-center sm:items-center px-3'>
            <div className="createtaskcontainer w-[22rem] ">
                <div className="heading flex justify-between  bg-white items-center py-2 px-4 font-bold ">
                    <h1>CREATE A TASK</h1>
                    <IoIosCloseCircleOutline onClick={() => dispatch({
                        type: "taskboxtoggle",
                        payload: false
                    })} />
                </div>
                <form className=' px-4 bg-pink-100' onSubmit={postdata} id="task">
                    <div className="title flex justify-between items-center py-2">
                        <label htmlFor="title" className='  '>Title :</label>
                        <div className=' flex flex-col w-[70%]'>
                            <input type="text" required id="title" onChange={(e) => setTask({ ...task, title: e.target.value })} name="title" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                            {errors.title && <p className=' text-red-600 text-xs'>Title should be of minimum 5 characters</p>}
                        </div>

                    </div>
                    <div className=" description flex justify-between items-start py-2 ">
                        <label htmlFor="desc">Description :</label>
                        <div className=' flex flex-col w-[70%]'>
                            <textarea name="desc" required id="desc" onChange={(e) => setTask({ ...task, description: e.target.value })} cols="30" rows="4" className='px-1 py-1 w-full bg-gray-300  rounded outline-none'></textarea>
                            {errors.description && <p className=' text-red-600 text-xs'>Description should be of minimum 5 characters</p>}
                        </div>

                    </div>
                    <div className="team flex justify-between items-center py-2">
                        <label htmlFor="team" className='  '>Team :</label>
                        <div className=' flex flex-col w-[70%]'>
                            <input type="text" required id="team" onChange={(e) => setTask({ ...task, team: e.target.value })} name="team" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                            {errors.team && <p className=' text-red-600 text-xs'>Team should be of minimum 5 characters</p>}
                        </div>
                    </div>
                    <div className="assignee flex justify-between items-center py-2">
                        <label htmlFor="assignee" className='  '>Assignee :</label>
                        <div className=' flex flex-col w-[70%]'>
                            <input type="text" required id="assignee" onChange={(e) => setTask({ ...task, assignee: e.target.value })} name="assignee" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                            {errors.assignee && <p className=' text-red-600 text-xs'>Assignee should be of minimum 5 characters</p>}
                        </div>
                    </div>
                    <div className="startdate flex justify-between items-center py-2">
                        <label htmlFor="startdate" className='  '>Start Date :</label>
                        <div className=' flex flex-col w-[70%]'>
                            <input type="date" required id="startdate" onChange={(e) => setTask({ ...task, startdate: e.target.value })} name="startdate" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                        </div>
                    </div>
                    <div className="enddate flex justify-between items-center py-2">
                        <label htmlFor="enddate" className='  '>End Date :</label>
                        <div className=' flex flex-col w-[70%]'>
                            <input type="date" required id="enddate" onChange={(e) => setTask({ ...task, enddate: e.target.value })} name="enddate" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                        </div>
                    </div>
                    <div className="status flex justify-start gap-11 items-center py-2">
                        <label htmlFor="status" className='  '>Status :</label>
                        <select name="status" required id="status" className=' bg-gray-300 outline-none px-1 py-1 ' onChange={(e) => setTask({ ...task, status: e.target.value })}>
                            <option value="Select Status" hidden>Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Deployed">Deployed</option>
                            <option value="Deffered">Deffered</option>
                        </select>
                        {errors.status && <p className=' text-red-600 text-xs'>Status should be there</p>}
                    </div>
                    <div className="priority flex justify-start gap-10 items-center py-2">
                        <label htmlFor="priority" className='  '>Priority :</label>
                        <select name="priority" required id="priority" className='bg-gray-300 outline-none px-1 py-1 ' onChange={(e) => setTask({ ...task, priority: e.target.value })}>
                            <option value="Select Priority" hidden>Select Priority</option>
                            <option value="P0">P0</option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                        </select>
                        {errors.priority && <p className=' text-red-600 text-xs'>Priority should be there</p>}

                    </div>
                    <button type='submit' className=' bg-blue-600 text-white rounded py-2 px-3 my-2'>Create Task</button>
                    <button type='reset' className=' bg-blue-600 text-white rounded py-2 px-3 my-2 mx-2'>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default Createtask
