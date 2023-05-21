import { configureStore } from '@reduxjs/toolkit';
import navLinks from "./navLinksSlice";

export default configureStore({
    reducer: {
        navLinks: navLinks.reducer,
    },
});