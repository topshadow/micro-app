import { useEffect, useState } from "react";

export function useDebug() {
   const [debug, setDebug] = useState(false);
   useEffect(() => {
      if (typeof window != 'undefined') {
         setDebug(localStorage.getItem('debug') == 'true')
      }
   })
   return debug;

}