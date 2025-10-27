

const Navbar = () => {
  return (
    <div className='w-[90%] flex p-4 rounded-xl mx-auto
    dark:bg-teal-600/0 bg-teal-300/50 mt-2 border-1 border-white hover:w-[91%] 
    hover:shadow-lg hover:bg-teal-200/70 shadow-teal-400/60 dark:hover:bg-teal-300/20
    max-w-[1920px]
    tranform duration-220
    justify-between
    '>
        <div className='text-3xl dark:text-[#cccccc] text-black font-bold' >
            Enchat
        </div>

        <div className="list-none md:flex hidden gap-6 items-center pr-6">
          <a href="/" ><li>Home</li></a>
          <a href="/privacy" ><li>AboutUs</li></a>
          <a href="/contact" ><li>ContactUs</li></a>
          <a href="/signup" ><li>GetStarted</li></a>
        </div>

    </div>
  )
}

export default Navbar