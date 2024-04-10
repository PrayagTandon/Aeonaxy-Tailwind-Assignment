const Cta = () => {
    return (
        <section className="flex flex-col justify-center items-center w-4/5 mx-auto gap-10">
            <h2 className="text-4xl font-extrabold font-montserrat text-white">Easy access for easy bookings</h2>
            <p className="text-lg block font-semibold w-3/5 text-center leading-loose text-gray-light">
                Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth
            </p>
            <ul className='flex justify-center items-center gap-8 max-lg:hidden'>
                {/* Button Fill */}
                <button type="submit" className=' font-bold py-4 px-8 bg-primary text-white text-sm rounded-full text-center transition-all border-2 border-transparent hover:bg-primary-light hover:border-2 hover:border-white'>Start for free</button>

                {/* Button Outline */}
                <button type="submit" className='text-white font-bold py-4 px-8 text-base transition-all rounded-full border-2 border-white hover:border-primary'>Talk with sales</button>
            </ul>
        </section>
    )
};

export default Cta;