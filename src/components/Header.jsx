import Logo from '../assets/logo.svg'
const Header = () => {
    return (
    <>
    <nav className=' flex justify-between w-full h-12 items-center px-3 bg-inherit'>
        <div>
        <img src={Logo} alt="" />
        </div>
        <ul className=' hidden md:flex font-semibold'>
            <li className='mx-[10px] cursor-pointer'>Model S</li>
            <li className='mx-[10px] cursor-pointer'>Model 3</li>
            <li className='mx-[10px] cursor-pointer'>Model X</li>
            <li className='mx-[10px] cursor-pointer'>Model Y</li>
        </ul>
        <ul className='flex font-semibold'>
            <li className='mx-[10px] cursor-pointer'>Shop</li>
            <li className='mx-[10px] cursor-pointer'>Tesla</li>
            <li className='mx-[10px] cursor-pointer'>Account</li>
        </ul>
        <div className='md:hidden cursor-pointer'>
            <button className='text-3xl'>&#8801;</button>
        </div>
        
       
      
    </nav>

   
     {/* <div className=' fixed left-0 top-0 h-full border-r border-r-gray-300  w-[40%]  bg-slate-400 '>
      <div>
          <img src={Logo} alt="" />
          </div>
      <ul className=' uppercase' >
       <li className='p-3 cursor-pointer  border-b'>Model S</li>
       <li className='p-3 cursor-pointer border-b'>Model 3</li>
       <li className='p-3 cursor-pointer border-b'>Model X</li>
       <li className='p-3 cursor-pointer border-b'>Model Y</li>
   </ul>
      </div>
   */}

 </>
  )
}

export default Header