import axios from 'axios';


export function getAgency()
{
	return dispatch=>{

		axios.get('http://localhost:8083/api/agencys').then(
			function(response) {       							//response为从Agency中取到的数据


				dispatch({type:'FETCH_AGENCY',payload:response.data}) //payload  传递要更新到reducer的数据
	  		})
	  	.catch(function(error){
	    console.log(error);
	  });


}
}


export function getActivity (name) {




	return dispatch=>{

		axios.get('http://localhost:8083/api/activities').then(
			function(response) {       							//response为从Agency中取到的数据


				dispatch({type:'FETCH_ACTIVITY',payload:response.data}) //payload  传递要更新到reducer的数据
	    		console.log(response);
	  		})
	  	.catch(function(error){
	    console.log(error);
	  });


	}
}