import { useEffect,useRef,useState } from "react";

const MutableRef=()=>{
    const [timer,setTimer] = useState(0);
    const timerRef = useRef<number | null>(null);

    const stopTimer=()=>{
        if(timerRef.current){
            window.clearInterval(timerRef.current);
        }
    }

    const startTimer=()=>{
        timerRef.current=window.setInterval(()=>{
            setTimer(time=>time+1)
        },1000);
    }

    useEffect(()=>{
     return ()=>{
        stopTimer()
     }
    },[])
  return <div>
    <div>timer: {timer}</div>
    <button onClick={() => startTimer()}>Start Timer</button><br/>
    <button onClick={() => stopTimer()}>Stop Timer</button>
  </div>
}

export default MutableRef;