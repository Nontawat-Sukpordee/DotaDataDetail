//if use client in web page it will lose Server site must use client in Components
'use client'

import { useState } from "react";
import Link from "next/link";

//rafce
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
  <div className = "text-7x1 gap-8">
    <button onClick = {() =>setCount (count-1)}>
      -
    </button>
    {count}
    <button onClick = {() =>setCount(count+1)}>
      +
    </button>
    </div>
  )
}
export default Counter