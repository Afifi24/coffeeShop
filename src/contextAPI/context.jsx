import { createContext } from "react";

 export const ContextAPI = createContext()

const WrapperContextApi = ({children})=>{

return(
    <ContextAPI.Provider >
        {children}
    </ContextAPI.Provider>
    )
}


export default WrapperContextApi