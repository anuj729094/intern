import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

const Edittask = ({ utask, close }) => {
    const [updatetask, setUpdatetask] = useState(utask)
    const { taskarray } = useSelector((state) => state.task)
    const dispatch = useDispatch()
    const handleedit = (e) => {
        e.preventDefault()
        if(!updatetask.status|| !updatetask.priority){
            alert("Status and Priority should be there")
        }
        else{
            dispatch({
                type: "updatedeletetask",
                payload: taskarray.map((task) => task.title === utask.title ? updatetask : task)
            })
            close(null)
        }
    }
    return (
        <div className=' bg-[#00000082] z-20 fixed overflow-auto py-4 w-full h-full top-0 left-0 flex items-center justify-center sm:items-center px-3'>
            <div className="createtaskcontainer w-[22rem] ">
                <div className="heading flex justify-between  bg-white items-center py-2 px-4 font-bold ">
                    <h1>EDIT TASK</h1>
                    <IoIosCloseCircleOutline onClick={() => close(null)} />
                </div>
                <form className=' px-4 bg-pink-100' onSubmit={handleedit}>
                    <div className="title flex flex-col justify-between items-start py-2">
                        <label htmlFor="title" className='  '>Title :</label>
                        <div className=' flex flex-col w-full'>
                            <input type="text" required id="title" value={updatetask.title} onChange={(e) => setUpdatetask({ ...updatetask, title: e.target.value })} name="title" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                        </div>

                    </div>
                    <div className=" description flex flex-col justify-between items-start py-2 ">
                        <label htmlFor="desc">Description :</label>
                        <div className=' flex flex-col w-full'>
                            <textarea name="desc" required id="desc" value={updatetask.description} onChange={(e) => setUpdatetask({ ...updatetask, description: e.target.value })} cols="30" rows="4" className='px-1 py-1 w-full bg-gray-300  rounded outline-none'></textarea>
                        </div>

                    </div>
                    <div className="team flex flex-col justify-between items-start py-2">
                        <label htmlFor="team" className='  '>Team :</label>
                        <div className=' flex flex-col w-full'>
                            <input type="text" required id="team" value={updatetask.team} onChange={(e) => setUpdatetask({ ...updatetask, team: e.target.value })} name="team" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                        </div>
                    </div>
                    <div className="assignee flex flex-col justify-between items-start py-2">
                        <label htmlFor="assignee" className='  '>Assignee :</label>
                        <div className=' flex flex-col w-full'>
                            <input type="text" required id="assignee" value={updatetask.assignee} onChange={(e) => setUpdatetask({ ...updatetask, assignee: e.target.value })} name="assignee" className='px-1 py-1  w-full bg-gray-300 rounded outline-none' />
                        </div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className="priority flex justify-start gap-1 items-center py-2">
                            <label htmlFor="priority" className='  '>Priority :</label>
                            <select name="priority" required id="priority" value={updatetask.priority} onChange={(e) => setUpdatetask({ ...updatetask, priority: e.target.value })} className=' text-[12px] bg-gray-300 outline-none px-1 py-1 '>
                                <option value="Priority" hidden>Select Priority</option>
                                <option value="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>

                        </div>
                        <div className="status flex justify-start gap-1 items-center py-2">
                            <label htmlFor="status" className='  '>Status :</label>
                            <select name="status" required id="status" value={updatetask.status} onChange={(e) => setUpdatetask({ ...updatetask, status: e.target.value })} className=' text-[12px] bg-gray-300 outline-none px-1 py-1 ' >
                                <option value="status" hidden>Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Deployed">Deployed</option>
                                <option value="Deffered">Deffered</option>
                            </select>
                        </div>
                    </div>
                    <div className=' flex justify-end gap-2'>
                        <button type='submit' className=' bg-blue-600 text-white rounded py-2 px-3 my-2' >Submit</button>
                        <button type='reset' className=' bg-blue-600 text-white rounded py-2 px-3 my-2 mx-2' onClick={() => setUpdatetask({ title: "", description: " ", assignee: "", team: "", status: "", priority: "" })}>Reset</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Edittask
