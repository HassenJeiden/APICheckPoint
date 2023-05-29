import { UPDATE_DATA } from "./TypeOfAction";

const userDetails = {
    user: [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: "",
        phone: "1-000-000-0000 00000",
        website: "hildegard.org",
        company: ""
    }]
}
const rootReducers = (state = userDetails, action) => {
    switch (action.type) {

        case UPDATE_DATA:
            const updated = state.user.map((obj) =>
                obj.id === action.payload.id ? action.payload : obj
            );
            return { ...state, user: updated };
        default:
            return state
    }
}
export default rootReducers