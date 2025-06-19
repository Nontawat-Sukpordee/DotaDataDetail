//create page spilt by create folder then create file page.tsx

import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/todos"

// rafce

const fetchTodos = async() => {
  await new Promise((resolve) => setInterval(resolve,1000))

  const res = await fetch(url)
  const data = await res.json()
  // console.log(data)
  return data
}

type Data = {
  id : string
  completed : string
  title : string
  userId : string
}
//const layout = ({ children } : {children: React.ReactNode}) => { กำหนดtypeแบบอยู่ใน{}
const AboutPage = async() => {
  //JS
    const data:Data[] = await fetchTodos() //กำหนดtypeแบบ: 
    console.log(data)
  return (
    <div>
      AboutPage
      {
        data.map((item,index)=>{
          return <li key ={index}>{item.title}</li> //กำหนดtypeแบบ. 
      })
    }
    </div>
  )
}
export default AboutPage