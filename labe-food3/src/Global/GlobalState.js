import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function GlobalState({children}){

    const Provider = GlobalContext.Provider

    const values ={
      
    }

    return <Provider value={values}>{children}</Provider>
}