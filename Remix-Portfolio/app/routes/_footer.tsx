import github from 'public/github.png.png'
import linkedin from 'public/linkedin.png.png'
import stackoverflow from 'public/stackoverflow.png.png'
import x from 'public/x.png'
const width = 48
const height = 48

export default function PortfolioFooterRoute() {
    return (
        <div className="mx-auto z-30 relative bottom-[0vh] w-screen h-48 text-white">
            <div className='border-b-2 w-screen bottom-14 border-white pt-3'></div>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-xl lg:grid-cols-4">
                <a href='#'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={github}
                    alt="Github"
                    width={width}
                    height={height}
                    />
                </a>
                <a href='#'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={linkedin}
                    alt="Linkedin"
                    width={width}
                    height={height}
                    />
                </a>
                <a href='#'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={stackoverflow}
                    alt="Stackoverflow"
                    width={width}
                    height={height}
                    />
                </a>
                <a href='#'>
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={x}
                    alt="X"
                    width={width}
                    height={height}
                    />
                </a>
            </div>
            <p className="absolute bottom-2 text-center lg:text-center text-base lg:text-2xl">&copy; 2023 by Ogbonna Emmanuel Echefunachukwu(Iteratum). All Rights Reserved.</p>
        </div>
    )
}