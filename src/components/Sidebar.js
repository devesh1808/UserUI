import React from 'react';


const Sidebar = () => {
    return (
        <aside className='fixed z-20 bg-[#050505] h-full w-[12.5%] flex flex-col text-white lg:w-36 xl:w-52 items-center'>
            <div className="hidden sm:flex mt-2 lg:mx-12 xl:mx-16">

                <img src="images/cosmLogo.jpg" className="h-9" alt="cosm Logo" />

            </div>
            <div className='hidden lg:flex lg:mx-2 mt-6'>
                Dashboard
            </div>
            <div className='mt-8'>
                About Us
            </div>
        </aside>
    )
}

export default Sidebar;