import { Form } from '@remix-run/react'
import mypic from 'public/mine.jpg'
export default function AboutRoute() {
    return (
        <div className="mx-auto w-screen">
            <div className="whitespace-normal">
                <i className='pt-36 px-5 text-xl lg:text-4xl font-bold py-3 flex'>OGBONNA EMMANUEL ECHEFUNACHUKWU
                    <span className='relative pl-2 md:pl-6 lg:scale-125'>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.335 29.5 172.265 141" viewBox="12.335 29.5 172.265 141" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path d="M114.1 170.5c-30.2 0-57-19.2-66.7-47.8-.5-1.6.3-3.3 1.9-3.8 1.6-.5 3.3.3 3.8 1.9 8.9 26.1 33.4 43.7 61 43.7 35.5 0 64.5-28.9 64.5-64.5 0-35.5-28.9-64.5-64.5-64.5-27.6 0-52.1 17.6-61 43.7-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8 9.7-28.6 36.5-47.8 66.7-47.8 38.9 0 70.5 31.6 70.5 70.5s-31.6 70.5-70.5 70.5z" fill="#fefefe" data-color="4"></path>
                                <path d="M146.1 97.9l-35-35c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.4 27.4c.9.9.3 2.5-1 2.5H15.5c-1.5 0-2.8 1-3.1 2.4-.4 1.9 1.1 3.6 2.9 3.6h117.9c1.3 0 1.9 1.6 1 2.5l-27.4 27.4c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l35-35c1.3-1.1 1.3-3 .1-4.2z" fill="yellow" data-color="2"></path>
                            </g>
                        </svg>
                    </span>
                </i>
                <h2 className='relative px-5 text-lg lg:text-2xl font-normal'>FULLSTACK WEB DEVELOER</h2>
                    <div className='border-b-2 w-screen border-white pt-8'></div>
            </div>

            <div className="relative pt-10 sm:py-20">
                <div className="mx-auto px-5 grid grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">ABOUT ME</h3>
                                <p className="mt-6 text-xl leading-8">I am a fullstack developer versed in react.js and django. I develop visually appealing, sealess and responsive web apps in collaboration with UX/UI designers.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:sticky lg:top-4 w-[90%] top-[6vh] lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-x-clip">
                        <img className="object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10" src={mypic} alt="my picture" />
                    </div>
                </div>
                <div className='border-b-2 w-screen border-white pt-10'></div>
            </div>

            <div className='relative py-24'>
                <div className='mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8'>
                    <div>
                        <h3 className="text-2xl font-medium tracking-tight sm:text-4xl">CERTIFICATION</h3>
                        <p className='pt-3'>Harvard CS50 Web Development With Python And Javascript ( currently - 2023 )</p>
                        <p className='py-1'></p>
                    </div>
                    <div className='relative text-lg'>
                        <h3 className="text-2xl font-medium tracking-tight sm:text-4xl">SKILLS</h3>
                        <p className='pt-3'>programming: <span>Html, Css, Javascript, React, Tailwind, Bootstrap, Remix</span></p>
                        <p className='py-1'>Windows Softwares: <span>Ms Word, Ms Excel, Ms Publisher</span></p>
                        <p>Graphics Designing: <span>Corel draw, Adobe Photoshop, Adobe Illustrator</span></p>
                    </div>
                </div>
                <div className='border-b-2 w-screen border-white pt-10'></div>
            </div>

            <div className='relative pt-10 text-center'>
                <i className="text-2xl font-medium tracking-tight lg:text-4xl">LET'S CONNECT</i>
                <h2 className='relative px-5 py-6 text-lg lg:text-2xl font-normal'>FEEL FREE TO CONTACT ME FOR FUTURE WORK AND COLLABORATIONS</h2>
                <div className='pt-6'>
                    <Form className='relative mx-auto w-[90vw] px-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24' method='post'>
                        <div className='relative pt-6 grid gap-y-8'>
                            <label className='pb-6 text-left'>First Name <input type='text' name='firstname' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                            <label className='pb-6 text-left'>Email* <input type='email' name='email' required className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                        </div>
                        <div className='relative pt-6 grid gap-y-8'>
                            <label className='pb-6 text-left'>Last Name <input type='text' name='lastname' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                            <label className='pb-6 text-left'>Subject <input type='text' name='subject' className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></input></label>
                        </div>
                        <div className='relative lg:col-span-2 pt-6'>
                            <label className='pb-6 text-left'>Leave a message... <textarea className='w-full py-2 hover:border-yellow-300 bg-transparent p-0 border-collapse border-b-2 outline-none'></textarea></label>
                        </div>
                        <div className='relative lg:col-span-2 pt-6 pb-16'>
                            <input type='submit' value='Submit' className='bg-transparent text-base md:text-xl rounded-full px-12 py-2 hover:bg-yellow-300 hover:text-black transition-all duration-700'></input>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}