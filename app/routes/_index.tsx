import image from 'public/IMG_20230818_183057_765.jpg'
import image1 from 'public/IMG_20230625_123631_902.jpg'
import image2 from 'public/IMG_20230625_123728_825.jpg'
import html from 'public/icons8-html5.svg'
import css from 'public/icons8-css.svg'
import javascript from 'public/icons8-javascript.svg'
import react from 'public/icons8-react-native.svg'
import python from 'public/icons8-python.svg'
import django from 'public/icons8-django-48.png'

const width = 158
const height = 48
export default function Index() {
    return(
        <div className="mx-auto w-full bg-purple-950 overflow-x-clip text-lg">
            <div className='w-full h-full'>
                <img src={image} alt='images' className=' object-cover w-screen h-screen lg:w-[120vw] lg:h-[120vh]'/>

                <div className='absolute top-32 lg:w-[50%] md:text-xl font-sans flex-wrap px-[5%] '>
                   <div className=''>
                        <h4 className='text-xl'>WEB DEVELOPER</h4>
                        <h1 className='text-3xl lg:text-5xl font-bold py-6'><i>OGBONNA EMMANUEL</i></h1>
                        <h4>I'm a fullstack web developer based in Nigeria that specializes in creating stunning, user-friendly and mobile responsive websites. I believe in the power of programming and design to shape the future of technology.</h4>
                   </div>
                    
                    <div className='relative grid grid-cols-2 w-[90%] top-[6vh]'>
                        <img src={image1} className='object-cover w-36 h-36 md:h-72 md:w-72 rounded-xl' width={36} height={36} />
                        
                        <div className='z-10  pl-5'>
                            <p className='text-base md:text-lg font-semibold pb-2 lg:text-2xl'>My Latest Work</p>
                            <span className='text-sm md:text-lg'>My Portfolio Website</span>
                            <a href='#' className='flex pt-5 text-sm md:text-lg'>View
                                <span className=' pl-6 bottom-2 flex-grow'>
                                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.335 29.5 172.265 141" viewBox="12.335 29.5 172.265 141" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                        <g>
                                            <path d="M114.1 170.5c-30.2 0-57-19.2-66.7-47.8-.5-1.6.3-3.3 1.9-3.8 1.6-.5 3.3.3 3.8 1.9 8.9 26.1 33.4 43.7 61 43.7 35.5 0 64.5-28.9 64.5-64.5 0-35.5-28.9-64.5-64.5-64.5-27.6 0-52.1 17.6-61 43.7-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8 9.7-28.6 36.5-47.8 66.7-47.8 38.9 0 70.5 31.6 70.5 70.5s-31.6 70.5-70.5 70.5z" fill="#fefefe" data-color="4"></path>
                                            <path d="M146.1 97.9l-35-35c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.4 27.4c.9.9.3 2.5-1 2.5H15.5c-1.5 0-2.8 1-3.1 2.4-.4 1.9 1.1 3.6 2.9 3.6h117.9c1.3 0 1.9 1.6 1 2.5l-27.4 27.4c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l35-35c1.3-1.1 1.3-3 .1-4.2z" fill="yellow" data-color="2"></path>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <section className=' w-full'>
                
                <div className='relative border-b-2 w-full border-white pt-10' style={{ boxShadow: '0 -50px 30px 30px indigo'}}>
                    <i className='pl-[8%] text-2xl font-bold lg:font-extrabold lg:text-8xl'>MY PORTFOLIO</i>
                </div>

                <div className=' top-24'>
                    <div>
                        <h1 className='text-4xl font-serif py-10 pl-[8%] lg:text-6xl lg:py-16'>01<span className='text-lg lg:text-2xl pl-10'>BLOGGING SITE</span></h1>
                        <img src={image2} className=' w-[90vw] h-[50vh] md:h-[70vh] object-cover rounded-xl left-10 md:left-28 lg:left-56' />
                        <i className='pl-[8%] text-4xl font-bold py-8 flex'>BLOGHOST
                            <span className=' pl-6'>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.335 29.5 172.265 141" viewBox="12.335 29.5 172.265 141" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <path d="M114.1 170.5c-30.2 0-57-19.2-66.7-47.8-.5-1.6.3-3.3 1.9-3.8 1.6-.5 3.3.3 3.8 1.9 8.9 26.1 33.4 43.7 61 43.7 35.5 0 64.5-28.9 64.5-64.5 0-35.5-28.9-64.5-64.5-64.5-27.6 0-52.1 17.6-61 43.7-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8 9.7-28.6 36.5-47.8 66.7-47.8 38.9 0 70.5 31.6 70.5 70.5s-31.6 70.5-70.5 70.5z" fill="#fefefe" data-color="4"></path>
                                        <path d="M146.1 97.9l-35-35c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.4 27.4c.9.9.3 2.5-1 2.5H15.5c-1.5 0-2.8 1-3.1 2.4-.4 1.9 1.1 3.6 2.9 3.6h117.9c1.3 0 1.9 1.6 1 2.5l-27.4 27.4c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l35-35c1.3-1.1 1.3-3 .1-4.2z" fill="yellow" data-color="2"></path>
                                    </g>
                                </svg>
                            </span>
                        </i>
                        <div className='relative'>
                            <div className='pl-[8%]'>
                                <p className='pb-4'>A personal portfolio website created by me for the sole purpose of showcasing my professional skills and personal portfolio projects</p>
                                <a><button className=' top-7 rounded-full py-3 px-10 border-solid border-2 hover:bg-yellow-300 hover:text-black'>View Site</button></a>
                            </div>
                            <div className='border-b-2 w-screen border-white pt-14'></div>
                        </div>
                    </div>

                    <div className=' pt-54'>
                        <h1 className='text-4xl font-serif py-10 pl-[8%] lg:text-6xl lg:py-16'>02<span className='text-lg lg:text-2xl pl-10'>BLOGGING SITE</span></h1>
                        <img src={image2} className=' w-[90vw] h-[50vh] md:h-[70vh] object-cover rounded-xl left-10 md:left-28 lg:left-56' />
                        <i className='pl-[8%] text-4xl font-bold py-8 flex'>BLOGHOST
                            <span className=' pl-6'>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.335 29.5 172.265 141" viewBox="12.335 29.5 172.265 141" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <path d="M114.1 170.5c-30.2 0-57-19.2-66.7-47.8-.5-1.6.3-3.3 1.9-3.8 1.6-.5 3.3.3 3.8 1.9 8.9 26.1 33.4 43.7 61 43.7 35.5 0 64.5-28.9 64.5-64.5 0-35.5-28.9-64.5-64.5-64.5-27.6 0-52.1 17.6-61 43.7-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8 9.7-28.6 36.5-47.8 66.7-47.8 38.9 0 70.5 31.6 70.5 70.5s-31.6 70.5-70.5 70.5z" fill="#fefefe" data-color="4"></path>
                                        <path d="M146.1 97.9l-35-35c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.4 27.4c.9.9.3 2.5-1 2.5H15.5c-1.5 0-2.8 1-3.1 2.4-.4 1.9 1.1 3.6 2.9 3.6h117.9c1.3 0 1.9 1.6 1 2.5l-27.4 27.4c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l35-35c1.3-1.1 1.3-3 .1-4.2z" fill="yellow" data-color="2"></path>
                                    </g>
                                </svg>
                            </span>
                        </i>
                        <div className='relative'>
                            <div className='pl-[8%]'>
                                <p className='pb-4'>A personal portfolio website created by me for the sole purpose of showcasing my professional skills and personal portfolio projects</p>
                                <a><button className=' top-7 rounded-full py-3 px-10 border-solid border-2 hover:bg-yellow-300 hover:text-black'>View Site</button></a>
                            </div>
                            <div className='border-b-2 w-screen border-white pt-14'></div>
                        </div>
                    </div>

                    <div className='pt-36 w-screen'>
                        <div className="bg-white py-20">
                            <div className="mx-auto min-w-full">
                                <h2 className="text-center text-lg font-bold md:text-2xl md:font-bold leading-8 text-gray-900">
                                    Tools And Techonologies Used🦾
                                </h2>
                                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                                    <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={html}
                                    alt="html"
                                    width={width}
                                    height={height}
                                    />
                                    <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={css}
                                    alt="css"
                                    width={width}
                                    height={height}
                                    />
                                    <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={javascript}
                                    alt="javascript"
                                    width={width}
                                    height={height}
                                    />
                                    <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={react}
                                    alt="react"
                                    width={width}
                                    height={height}
                                    />
                                    <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={python}
                                    alt="python"
                                    width={width}
                                    height={height}
                                    />
                                    <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={django}
                                    alt="django"
                                    width={width}
                                    height={height}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                    
            </section>

           
            
        </div>
    )
}



      
  