import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, COLORS } from "@/constant";

const initialState = {
    [MENU_ITEMS.PENCIL]: {
        color: COLORS.BLACK,
        size: 5
    },
    [MENU_ITEMS.ERASER]: {
        color: COLORS.WHITE,
        size: 3
    },
    [MENU_ITEMS.UNDO]: {},
    [MENU_ITEMS.REDO]: {},
    [MENU_ITEMS.DOWNLOAD]: {},
}

export const toolBoxSlice = createSlice({
    name: "toolBox",
    initialState,
    reducers: {
        changeColor: (state, action)=>{
            state[action.payload.item].color = action.payload.color;
        },
        changeToolSize: (state, action)=>{
            state[action.payload.item].size = action.payload.size;
        }
    }
})


export const { changeColor, changeToolSize } = toolBoxSlice.actions;

export default toolBoxSlice.reducer;