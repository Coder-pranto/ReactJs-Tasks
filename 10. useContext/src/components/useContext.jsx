import { createContext} from "react";


const UserContext = createContext();

export default UserContext;


//* step 1: create context
//* step 2: wrap childs with context provider
//* step 3: state access useContext hook