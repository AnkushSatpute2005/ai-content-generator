// const { useContext } = require("react");

// export const TotalUsageContext = useContext(0);

import { createContext } from "react";

// Create the context with an initial value (e.g., 0 for Total Usage)
export const TotalUsageContext = createContext(0);
