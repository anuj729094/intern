export const handletask = (data) =>async(dispatch)=>{
    try {
        if(data.status==="Pending"){
            dispatch({
                type:"pending",
                payload:data
            })
        }
        else if(data.status==="Completed"){
            dispatch({
                type:"completed",
                payload:data
            })
        }
        else if(data.status==="Deployed"){
            dispatch({
                type:"deployed",
                payload:data
            })
        }
        else if(data.status==="Deffered"){
            dispatch({
                type:"deffered",
                payload:data
            })
        }
        else{
            dispatch({
                type:"progress",
                payload:data
            })
        }
    } catch (error) {
        
    }
}