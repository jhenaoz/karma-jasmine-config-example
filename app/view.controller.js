function searchButtonClick(){
  if (userAuthenticated()) {
    var response = API_CLIENT.get('http://google.com');
    console.log(response);
  }
}

function userAuthenticated(){
  return true;
}
