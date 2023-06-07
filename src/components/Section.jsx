import PropTypes from 'prop-types'
import downarrow from '../assets/down-arrow.svg'
import image1 from '../assets/model-s.jpg'
const Section = ({title,desc,range,time,speed,power}) => {
  return (
    <>
    <div className=' h-screen bg-center bg-cover flex flex-col justify-between' style={{backgroundImage:`url(${image1})`}}>
          <div className=" text-center p-16 ">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className='font-semibold'>{desc}</p>
    </div>
    
    <div className='flex gap-2 justify-center mb-[10px] '>
      <div className='mr-7'>
      <button  className="bg-violet-500 cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded p-1 m-3  ">Save Changes</button>
    <button className="bg-violet-500 cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2">Discard Changes</button>
    <div className='mx-5'>
      
    <img src={downarrow} className='w-11 animate-bounce' alt="" />
   
    </div>
        
      </div>
 
    </div>
                 
   
    
    </div>
    <div className=' flex justify-center relative  bottom-40 overflow-hidden md:text-3xl gap-3
    animate-bounce md:text-white '>
            <h3 className=''>Range</h3>
            <span>{range}</span>
            <h3>Time</h3>
            <span>{time}</span>
            <h3>Top Speed</h3>
            <span>{speed}</span>
            <h3>Peek Power</h3>
            <span>{power}</span>
            </div>  
   
    </>

  )
}
Section.propTypes ={
  title:PropTypes.string.isRequired,
  desc:PropTypes.string,

}

export default Section