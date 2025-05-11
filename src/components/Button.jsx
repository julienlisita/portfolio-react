import { Link } from "react-router-dom";

export default function Button({ ...props}) {
   const newProps = { 
        ...props,
        className: `
        inline-block 
        px-6 py-3 text-sm                            
        sm:px-5 sm:py-2.5 sm:text-base         
        lg:px-6 lg:py-3 lg:text-lg  
        font-semibold text-[#5AC8FA]         
        bg-[#222222]
        border border-[#5AC8FA] rounded-full 
        transition duration-300 transform 
        hover:scale-105 
        hover:bg-[#3FCBFF] 
        hover:text-[#222222]
        active:scale-105 
        active:bg-[#3FCBFF] 
        active:text-[#222222]`
    }

  if(props.to)
    {
        return  <Link {...newProps}/>
    }
    return <button {...newProps}/>
  
}