import { createContext,useState, useRef} from "react";

 export const ContextAPI = createContext()

const WrapperContextApi = ({children})=>{
 const [isopen,setIsopen] = useState(false)
 const [navbar,setNavbar] = useState(false)
 const Ref = useRef()
 const closeNavmenu = (e)=>{
    if(Ref.current==e.target){
        setIsopen(false)
    }
 }
 const Changebackground = ()=>{
    let lastscroll = window.scrollY
    if(window.scrollY > 0){
        setNavbar(true)
    }else{
        setNavbar(false)
        

    }
    lastscroll= window.scrollY
 }
window.addEventListener('scroll',Changebackground)
return(
    <ContextAPI.Provider value={{isopen,setIsopen,Ref,closeNavmenu,navbar}} >
        {children}
    </ContextAPI.Provider>
    )
}


export default WrapperContextApi