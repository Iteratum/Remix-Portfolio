import { Form } from '@remix-run/react'
import type { ActionFunction } from '@remix-run/node'
import { useEffect } from 'react'
import { Button, Html } from '@react-email/components'
import Plunk from '@plunk/node'
import { render } from 'react-dom'


function Email(props:any) {
    const { url } = props

    return (
        <Html lang="en">
            <Button href={url}>Click me</Button>
        </Html>
    )
}

export const action: ActionFunction = async ({ request }: { request: any }) => {
    const formData = await request.formData()
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const content = formData.get('content')

    const plunk = new Plunk(process.env.PLUNK_API_KEY)
    
    const emailHtml = render(<Email url="https://remix-portfolio-git-upgrade-iteratum.vercel.app/about/contact" />)
    
    plunk.emails.send({
        to: 'emmaogbo2002@gmail.com',
        subject: subject,
        body: emailHtml,
    })
}



export default function AboutContactRoute() {
  
    useEffect(() => {
        const Scroll = () => {
            window.scrollTo({
                top: 1350,
                behavior: "smooth",
            })
        }
        
        Scroll()
        
    }, [])

    
    return (
        <div className="mx-auto">
            <div className='relative pt-10 text-center'>
                <i className="text-2xl font-medium tracking-tight lg:text-4xl">LET'S CONNECT</i>
                <h2 className='relative px-5 py-6 text-lg lg:text-2xl font-normal'>FEEL FREE TO CONTACT ME FOR FUTURE WORK AND COLLABORATIONS</h2>
                <div className='pt-6'>
                    <Form>
                        <fieldset className='relative mx-auto w-[90vw] px-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24'>
                            <div className='relative pt-6 grid gap-y-8'>
                                <label className='pb-6 text-left'>First Name <input type='text' name='firstname' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                                <label className='pb-6 text-left'>Email* <input type='email' name='email' required className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input>
                                </label>
                            </div>
                            <div className='relative pt-6 grid gap-y-8'>
                                <label className='pb-6 text-left'>Last Name <input type='text' name='lastname' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                                <label className='pb-6 text-left'>Subject <input type='text' name='subject' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                            </div>
                            <div className='relative lg:col-span-2 pt-6'>
                                <label className='pb-6 text-left'>Leave a message... <textarea name='content' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></textarea></label>
                            </div>
                            <div className='relative lg:col-span-2 pt-6 pb-16'>
                                <input type='submit' value='Submit' className='bg-transparent text-base md:text-xl rounded-full px-12 py-2 hover:bg-yellow-300 hover:text-black duration-700'></input>
                            </div>
                        </fieldset>
                    </Form>
                </div>
            </div>
        </div>
    )
}