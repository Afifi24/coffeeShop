import { createContext,useState, useRef} from "react";

 export const ContextAPI = createContext()

const WrapperContextApi = ({children})=>{
 const [isopen,setIsopen] = useState(false)
 const Ref = useRef()
 const closeNavmenu = (e)=>{
    if(Ref.current==e.target){
        setIsopen(false)
    }
 }

return(
    <ContextAPI.Provider value={{isopen,setIsopen,Ref,closeNavmenu}} >
        {children}
    </ContextAPI.Provider>
    )
}


export default WrapperContextApi