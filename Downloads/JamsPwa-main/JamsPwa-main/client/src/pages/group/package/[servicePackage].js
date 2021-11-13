import React, { useState, useEffect } from 'react';

import { Link, navigate } from 'gatsby';
import axios, { URL } from '../../../services/api'
import Package from '../../../components/packages'



const IndexPage = ({ params }) => {
  const [Packages, setPackages] = useState();

  useEffect(() => {
    
    axios
        .get(`/packages/service/${params.servicePackage}`)
        .then(res => {
          if(res.data.data.packages==0){
            navigate('/service-form')
          }else{
          setPackages(res.data.data.packages)
          }
        })
        .catch(err => {
            console.log(err);
            setPackages([]);
            console.log(params);
        });
}, []);

return(
  
<div class="h-80 w-60 bg-gray-100">
  <div class="flex flex-col  justify-between h-full w-full ">
<div class="flex flex-col items-center space-y-2">
    <h2 class="mt-3">select</h2>

    <p class="text-center text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus.</p>
    </div>
<div class="space-y-2 h-full px-3">

<main className='row w-full gap-3 py-5 px-2' style={{ gridAutoColumns: 'repeat(auto-fit, minmax(14rem, 1fr))'  }}>
            {
                Packages
                    ? Packages.length
                        ? Packages.map((srv, i) => <Package data={srv} key={i} />)
                        : <h1>No data found</h1>
                        :`${console.log("loading..")}`
    
                         

            }

<div class="w-full flex items-center justify-center pb-4 mt-4">  
<div > 
    <Link to="/service-form">
 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 22 22" fill="purple">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
</Link>
</div>
</div>
        </main>
      
</div>



</div>


</div>

)
}

export default IndexPage;