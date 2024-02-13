export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const JOBS_LIST = 'JOBS_LIST'



export const addToFavourites = (favourite) =>{
    return {
        type: ADD_TO_FAVOURITES,
        payload:favourite
    }
}


export const getJobsListCreator = () =>{
    return async (dispach, getState) =>{
try {
    let resp = await fetch ("https://strive-benchmark.herokuapp.com/api/jobs?company=")
if(resp.ok){
    let fetchedJobs = await resp.json()
    dispach({
        type: JOBS_LIST,
        payload:fetchedJobs,
    })
}
else{
    console.log (resp.status)
}}
catch (error) {
    console.log (error)
}
   
}
    }


