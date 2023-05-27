import React,{useState} from 'react';

function Task2(props) {
   const [timeStart,setTimeStart]=useState(10)

    var start=setInterval(function(){
        if(timeStart <= 0){
            clearInterval();
            alert("Times up!")
          }
        setTimeStart(timeStart-1);
    },1000)
    return (
        <div>
            <h1>Timer App!</h1>
            <button onClick={start}>Start</button>
            <div>{timeStart}</div>
           
        </div>
    );
}

export default Task2;