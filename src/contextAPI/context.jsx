import { createContext,useState, useRef,useEffect} from "react";

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

// ! cursor 

     const [mouseposition,setMouseposition] = useState({x:0,y:0})
    const [changeanim,setChangeanim] = useState('default')
    const animation = {
        default:{
            x:mouseposition.x - 12,
            y:mouseposition.y -12,
            transition:{
                duration:0
            }
        },
        text:{
            x:mouseposition.x - 50,
            y:mouseposition.y -50,
            background:'white',
            height:100,
            width:100,
            mixBlendMode:'difference',
            transition:{
                duration:0
            }
        },
        slide:{
            x:mouseposition.x - 50,
            y:mouseposition.y -50,
            background:'transparent',
            border: '1.5px solid white',
            height:100,
            width:100,
            // mixBlendMode:'difference',
            transition:{
                duration:0
            }
        }
    }
    useEffect(()=>{
        const Mousemove = (e)=>{
          setMouseposition({x:e.clientX, y:e.clientY})
        }
        window.addEventListener('mousemove',Mousemove)
        return ()=>{
            window.removeEventListener('mousemove',Mousemove)
        }
    },[])
    const textEnter = ()=>setChangeanim('text')
    const textLeave = ()=>setChangeanim('default')
    const slideHove = ()=>setChangeanim('slide')

return(
    <ContextAPI.Provider value={{isopen,setIsopen,Ref,closeNavmenu,navbar,textEnter,textLeave,changeanim,animation,slideHove}} >
        {children}
    </ContextAPI.Provider>
    )
}


export default WrapperContextApi