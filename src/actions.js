export const  SET_BUSINESSES = 'SET_BUSINESSES';   

function handleResponce(response){
    if (response.ok){
        return response.json();
    }else {
         let error = new Error(response.statusText);
         error.response = response;
         throw error;
         
    }
}

export function setBusinesses(businesses){
    return{
        type: SET_BUSINESSES,
        businesses
    }
}

export function saveBusiness(data){
    return dispatch => {
        return fetch('http://127.0.0.1:5000/api/v2/businesses', {
            method: 'post',
            body:  JSON.stringify(data),
            headers: {
                "content-Type":"application/json"
            }
        }).then(handleResponce)
    }
}

export function fetchBusinesses(){
    return dispatch => {
        fetch('http://127.0.0.1:5000/api/v2/businesses')
        .then(res => res.json())
        .then(data => dispatch(setBusinesses(data.businesses)));
    }
}