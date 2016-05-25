function sum(a, b) {
  return a+b;
}



////////////////EXAMPLE USING BACKEND API CALLS////////////////////////
var API_CLIENT ={
  get: get,
  post: post
}

function get(url, params){
  //do some stuff....
  return {url:url,data:'i am the response from the server...'};
}
function post(url, params){

}
