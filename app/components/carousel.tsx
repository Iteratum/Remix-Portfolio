import CarImage1 from "public/1da0d982-63b0-4039-9152-abe48e448993.jpg"
import CarImage2 from "public/3b385b66-2773-445e-8dae-1a2271e431e2.jpg"
import CarImage3 from "public/3d453a70-2165-4e1b-9c14-30defd50be2f.jpg"
import CarImage4 from "public/6b0c7426-ca08-4669-962f-a15e408e7eed.jpg"
import { useEffect, useState } from "react"


export default function HandleCarousel() {
    const CarouselImages = [
        CarImage1,
        CarImage2,
        CarImage3,
        CarImage4
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timeout = setInterval(() => {
            setCurrentIndex(
                (PreIndex) => (PreIndex === CarouselImages.length - 1 ? 0 : PreIndex + 1)
            )
        }, 3000)
        return() => clearInterval(timeout)
    }, [currentIndex])
    
    return(
        <div>
            
            <img src={CarouselImages[currentIndex]} alt='images' className=' object-cover w-screen h-screen lg:w-[120vw] lg:h-[120vh]' />
        </div>
    )
}