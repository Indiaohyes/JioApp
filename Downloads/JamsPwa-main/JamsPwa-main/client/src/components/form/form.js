import React from "react"
import { Link } from "gatsby"


const form = () => {
    return(
        <div className=' w-60 h-80  '>

	<div className=' pt-3 w-full   flex  justify-evenly'>
	<Link to={'/'}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  place-self-start" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>
</Link>



		

		<span className=' place-self-center self-center justify-self-center '> Bhahmin bhojan</span>
		
	
	</div>



	<div className='flex justify-between flex-col pt-7'>

		<div className=' text-xs flex flex-col pt-2'>
			<div className=' pl-24 ml-1'>
				<span> Name </span>
			</div>
			<div className=' pt-1'>
				<input className=' w-36 ml-11  border-2 border-purple-400 rounded' />
        </div>
			</div>

      
		<div className=' text-xs flex flex-col pt-2'>
			<div className=' pl-24 ml-1'>
				<span> Email </span>
			</div>
			<div className=' pt-1'>
				<input className=' w-36 ml-11  border-2 border-purple-400 rounded' />
        </div>
			</div>

      
		<div className=' text-xs flex flex-col pt-2'>
			<div className=' pl-24 ml-1'>
				<span> Phone </span>
			</div>
			<div className=' pt-1'>
				<input className=' w-36 ml-11  border-2 border-purple-400 rounded' />
        </div>
			</div>

      
		<div className=' text-xs flex flex-col pt-2'>
			<div className=' pl-24 ml-1'>
				<span> Adress </span>
			</div>
			<div className=' pt-1'>
				<input className=' w-36 ml-11  border-2 border-purple-400 rounded' />
        </div>
			</div>


		</div>
    
      <div className='px-24 ml-2 pt-5'>
        <Link to="/successful-page">
      <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' viewBox='0 0 22 22' fill='purple'>
        <path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z' clip-rule='evenodd' />
      
      </svg>
      </Link>
    </div>


	</div>
    )
}

export default form