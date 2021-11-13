import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import Om from '../images/om.png'
import logo from '../images/logo.png'
import Categories from '../components/categories'
import axios, { URL } from '../services/api';


const IndexPage = () => {

  

  const [categories, setCategories] = useState();

  useEffect(() => {
		axios
			.get('/categories/getjioCateygory')
			.then(response => {
				setCategories(response.data.data.categories);
        console.log(response.data)
       
			})
			.catch(err => {
				setCategories([]);
				console.log(err.response);
			});

		
    },[]);


  return(
  
  <div className='h-80 w-60 bg-gray-200 flex flex-col justify-between '>

<div className='h-10 w-full bg-gray-900 flex justify-between items-center pl-4 pr-4'>
  <div className='h-auto w-2/5  '>
      <img src={logo}></img>
  </div>

  <div className='h-3 w-3 '></div>
  <svg xmlns='http://www.w3.org/2000/svg' className='h-3 w-3' fill='none' viewBox='0 0 24 24' stroke='white'>
  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
</svg>
</div>


<div className='w-full  h-3/6 flex justify-center items-center mt-5'>
<div className='h-full w-full flex flex-col justify-between items-center '>
 <div className='w-2/5 h-2/3'>
       <img src={Om}></img> 
 </div>
  
  <h1 className='text-center text-sm'>book your pandit now  <br /> with indiaohyes </h1>

  <h2 className='text-sm'>Service</h2>
  </div>

</div>

<div className='h-1/4 bg-yellow-200 flex justify-center items-center pr-5 pl-5'>
<div className='grid grid-cols-3 h-full w-full gap-3 py-4 ' >
							{
								categories
									? categories.length
										? categories.map((cat, i) => <Categories
											key={i}
											title={cat.title}
											image={`${URL}/images/${cat.image}`}
										id={cat._id}
											
										/>
										
										)
										: <h2>No data found</h2>
									: <div className='flex justify-center col-span-full'>
										       
									</div>
							}
						</div>
</div>

</div>
  )
}

export default IndexPage;