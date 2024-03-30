export const handletask = (data) =>async(dispatch)=>{
    try {
       dispatch({
        type:"addtask",
        payload:data
       })
    } catch (error) {
        console.log(error);
    }
}