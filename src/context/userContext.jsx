import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState(null)
    //kullanıcı projeye girdiğinde localden tokeni aldık
    useEffect(() => {
        const signedUser = localStorage.getItem("token")
        //kayıtlı kullanıcıyı localden aldık state'e atadık
        setUser(signedUser)
    }, [])

    const signUser = (newUser) => {
        //kullanıcıya id ekleme
        newUser.id = v4();

        //olşturduğumuz id yi locale attık
        localStorage.setItem('token', newUser.id)
        //state güncelledik
        setUser(newUser.id);

        
    }
    const logoutUser = () => {
        // local'den silme
        localStorage.removeItem('token');
        // state'den kullanıcıyı kaldırma
        setUser(null);//buna null verince giriş sayfasına gidecek
      };

    return (
        <UserContext.Provider value={{ user, signUser,logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext