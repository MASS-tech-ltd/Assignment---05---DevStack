import hero from './assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='lg:mt-20 mt-8 lg:mb-28 mb-2'>
            <div className="hero bg-white container mx-auto">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:flex lg:justify-between">
                    <img
                        alt="Tailwind CSS hero component"
                        src={hero}
                        className="max-w-sm"
                    />
                    <div>
                        <h1 className="lg:font-extrabold font-bold font-inter lg:text-6xl text-3xl"><span className='text-slate-900 '>Build Your Ideal</span><br />
                            <span className="bg-linear-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">Development Stack</span></h1>
                        <p className="font-jakarta font-normal lg:text-lg text-sm lg:w-xl w-87 text-slate-600 py-6">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>
                        <button className="btn rounded-lg text-white font-semibold lg:mt-6 text-sm bg-linear-to-r from-orange-600 to-purple-700 p-3">Explore Technologies</button>
                        <button className="btn rounded-lg text-gray-700 font-semibold lg:mt-6 text-sm ml-3 px-11.5 py-3">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;