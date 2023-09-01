const callouts = [
    {
      name: 'Portfolio Website',
      description: 'Remix, tailwindcss',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Portfolio Website',
      href: 'https://remix-portfolio-72si.vercel.app/',
    },
    {
      name: 'BlogHost',
      description: 'React, tailwindcss, django, rest-framework, axios',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'BlogHost',
      href: 'https://r-blog-git-master-iteratum.vercel.app/',
    },
    
  ]

export default function PortfolioRoute() {
    return (
        <div className="mx-auto">
            <h1 className="text-3xl lg:text-8xl font-extrabold pt-36 px-5"><i>PORTFOLIO</i></h1>
            <div className='border-b-2 w-screen border-white pt-10'></div>

            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-bold lg:text-2xl">
                                <a href={callout.href}>
                                    <span className="absolute" />
                                    {callout.name}
                                </a>
                                </h3>
                                <p className="text-base font-semibold lg:text-xl">{callout.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}