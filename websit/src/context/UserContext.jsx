import { createContext, useState } from "react";
//  caret  context  the  other  component  access  it 
export const UserContext=createContext();

  const UserContextProvider=({children})=>{

    const [userName, setUserName]=useState(' Islam');

    console.log('  hi  fron context ');
    // must  sen like  this
    return <UserContext.Provider value={{userName,setUserName}}>
   {children}
    </UserContext.Provider>
}


export default UserContextProvider;
