import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface UsersContextData {
  users: User[];
  removeUser: (userId: number) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

type User = {
  id: number;
  name: string;
  image: string;
  stars: number;
};

const UsersContext = createContext({} as UsersContextData);

export function UsersProvider({ children }: ModalProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  async function removeUser(userId: number) {
    // REMOVER USUÁRIO
  }

  async function getUsers() {
    // BUSCAR OS USUÁRIOS NA API COM AXIOS
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, removeUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export const useUsers = () => useContext(UsersContext);
