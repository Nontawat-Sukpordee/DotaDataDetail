'use client'
import { createCamps } from "@/utils/actions"  //เรียกใช้จากutils
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

// pending รอทำงาน ?จริง :เท็จ
const SubmitButton = () => {
    const { pending } = useFormStatus()
return <button type ="submit" disabled ={pending}>
    {pending
    ? 'Submitting...'
    : 'Submit'
}
</button>
}

const Form = () => {
    const [message,formAction] = useActionState(createCamps,null) //รับข้อความที่แสดงผมลัพธ์การทำงานมา
  return (
    <>
        {message && <h1>{message}</h1>} 
    <form action = {formAction}>
        Form
        <input 
        placeholder="Camping Name" 
        name = "title"
        className = "border"
        defaultValue = "LongLake"
        />

        <input
        placeholder = "location"  //ชื่อช่องกรอกข้อมูล
        name = "location"  // ค่าตัวแปร
        className = "border" //ตั้งค่ากรอปใส่ข้อมูล
        defaultValue= "Korat"  //ค่าพื้นฐาน
        />
        <SubmitButton />
        </form>
    </>
  )
}
export default Form