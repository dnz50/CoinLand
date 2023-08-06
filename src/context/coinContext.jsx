import axios from "axios";
import { createContext, useState } from "react";

export const CoinContext = createContext()


export const CoinProvider = ({children})=> {
    const [coins, setCoins] = useState([])
    //coin sayfasına istek atıyoruz
    const getCoins = ()=>{ // bunu farklı bir yerde kullanmak istiyorsak value ya ekleriz
        axios.get('https://api.coincap.io/v2/assets')
        .then((res)=>setCoins(res.data.data))
    }

    return (
        <CoinContext.Provider value={{coins,getCoins}}>
            {children}
        </CoinContext.Provider>
    )
}