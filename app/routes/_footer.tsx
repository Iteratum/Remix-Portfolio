import github from 'public/11388742.png'
import linkedin from 'public/linkedin (1).png'
import stackoverflow from 'public/11515918.png'
import x from 'public/x.png'
const width = 48
const height = 48

export default function PortfolioFooterRoute() {
    return (
        <footer className="sticky mx-auto z-30 w-screen h-48">
            <div className='border-b-2 w-screen bottom-14 border-white pt-3'></div>
            <div className="mx-auto px-5 mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-xl lg:grid-cols-4">
                <a href='https://github.com/Iteratum'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={github}
                    alt="Github"
                    width={width}
                    height={height}
                    />
                </a>
                <a href='https://www.linkedin.com/in/ogbonna-echefunachukwu-76a100231'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={linkedin}
                    alt="Linkedin"
                    width={width}
                    height={height}
                    />
                </a>
                <a href='https://stackoverflow.com/users/21852860/ogbonna-echefunachukwu'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={stackoverflow}
                    alt="Stackoverflow"
                    width={width}
                    height={height}
                    />
                </a>
                <a href='https://twitter.com/Ogbonna51254876'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={x}
                    alt="X"
                    width={width}
                    height={height}
                    />
                </a>
                
            </div>
            <p className="pt-5 text-center lg:text-center lg:text-lg">&copy; 2023 by Ogbonna Emmanuel Echefunachukwu ( Iteratum ). All Rights Reserved.</p>
            
        </footer>
    )
}