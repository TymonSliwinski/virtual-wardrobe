import { createContext, useState } from "react";

export interface IProviderProps {
    children?: any;
}

const usrCtxDefaultValue = {
    userValue: null,
    setUserValue: (state: any) => { }
};

export const UserContext = createContext(usrCtxDefaultValue);

// export const UserProvider = (props: IProviderProps) => {
//     const [state, setState] = useState(usrCtxDefaultValue.state);

//     return (
//         <UserContext.Provider value={{ state, setState  }}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }