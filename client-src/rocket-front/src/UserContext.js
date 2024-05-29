import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider({children}) {
  const [user, setUser] = useState({ email: '', initials: ''})

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem('userId');
      if (userId !== null && userId !== undefined && !user.email) {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        const user = response.data;
        const initials = `${user.first_name[0]}${user.last_name[0]}`;
        user.initials = initials
        setUser(response.data);
      }
    };

    getUser();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}