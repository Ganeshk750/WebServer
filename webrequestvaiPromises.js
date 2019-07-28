function testCall(url){
return new Promise(function(resolved, reject){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
        if(request.status == 400){
            resolved(request.response);
        }else{
            reject(Error(request.statusText));
        }
    }
    request.onerror = function(){
        reject(Error('Network Issues'));
    }
    request.send();
 });
}
testCall('https://randomuser.me/api/')
.then(function(response){
    console.log('Wel Come');
   },function(error){
      console.log('error there');
});