'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


// Utils เป็นแนวใช้รับส่งข้อมูล
export const createCamps = async(prevState:any, formData: FormData) =>{
    await new Promise((resolve) => setInterval(resolve,1000))

    
    // const title = formData.get('title') //รับค่ามาจากname ของ Form
    // const location = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    // prisma.camp.create()
    // revalidatePath('/camp') //ข้อมูลในหน้าจะถูกUpdate ทันที
    // redirect('/login') //หลังทำงานแล้วจะให้พาไปหน้าไหนเช่น หลังสมัครบัญชีก็พาไปหน้าlogin
    return 'Create Camp Success!'
}

export const fetchCamp = async() =>{ // fetchData คือการดึงข้อมูลจากฐานข้อมูล
    // prisma.camp.findMany({})
    const camps = [
        { id:1 , title: 'โคราช'},
        { id:2 , title: 'ลำพูน'},
        { id:3 , title: 'เชียงใหม่'},
    ]

    return camps
}