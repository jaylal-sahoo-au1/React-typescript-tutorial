import { useEffect,useRef } from "react";

const DomRef=()=>{
   const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
      inputRef.current?.focus();
    },[])
  return <input type="text"/>
}

export default DomRef;