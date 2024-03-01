'use client'
import { store } from "./store";

const { Provider } = require("react-redux");

// We can directly wrap <Provider store={store}>{children}</Provider> inside layout.js
export const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
};
