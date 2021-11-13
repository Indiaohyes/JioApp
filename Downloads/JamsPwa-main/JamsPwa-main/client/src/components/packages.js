import React from "react"



const packages = ({data}) => {
    return(

        <div class="w-full h-8 bg-purple-400 mt-3 flex items-center justify-center">

        <div class="flex w-full justify-between items-center px-3">
            <span className={'text-sm overflow-ellipsis truncate '}> {data.title}</span>
           <div class="">
            <input type="radio"/>
           </div>
    
        </div>
    
      </div>
    )
}

export default packages