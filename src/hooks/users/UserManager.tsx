import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutationSignOut } from "./mutations/useMutationSignOut";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedProject: string | null;
  setSelectedProject: (id: string | null) => void;
  isSignedIn: boolean;
  handleSignOut: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  selectedProject: null,
  setSelectedProject: () => {},
  isSignedIn: false,
  handleSignOut: () => {},
});

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

const UserManager = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>("");
  const isSignedIn = useMemo(() => !!user, [user]);
  const { mutate: signOut } = useMutationSignOut();

  const handleSignOut = () => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(null));
    signOut();
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        selectedProject,
        setSelectedProject,
        isSignedIn,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserManager;
