function receivesAFunction(callback) {  
        callback()
}

function returnsANamedFunction(){
   function callThis(){        
 }
    return callThis;
    }
function returnsAnAnonymousFunction() {
    const anonymous = function (){
      console.log("I am a nameless function")  
    }
        return anonymous;
}
