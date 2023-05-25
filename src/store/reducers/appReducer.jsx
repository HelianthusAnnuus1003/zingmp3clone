// lưu những state, biến có các giá trị liên quan đến thông tin chung của app

import actionTypes from "../actions/actionTypes";

// Khởi tạo giá trị ban đầu
const initState = {
    homeData: [],
    test: "hello 123",
};

// Dùng switch case để check xem type của action được gửi vào, type nào thì xử lý action đó,
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state;

        default:
            return state;
    }
};

export default appReducer;
