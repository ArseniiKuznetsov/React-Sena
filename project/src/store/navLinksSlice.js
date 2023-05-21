import { createSlice } from '@reduxjs/toolkit';

const navLinks = createSlice({
    name: 'navLinks',
    initialState: {
        link:[
        {name:'Личные документы',icon:'vector_menu_block.svg',link:'/'},
        {name:'Образование и стаж',icon:'Vector_Menu_Hat.svg',link:'/document'},
        {name:'Дополнительные сведения',icon:'Vector_Menu_Note.svg',link:'/about'},
        {name:'Приложения',icon:'Vector_Menu_Plus.svg',link:'/applications'},
    ]},
    reducers: {
        addNavLinks(state,action) {
            state.link.push(action.payload);
        },
    },
});

export const { addNavLinks } = navLinks.actions;
export default navLinks;