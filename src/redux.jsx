// Tạo store cho thằng redux

import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Redux Thunk là một Middleware cho phép bạn viết các Action trả về một function
// thay vì một plain javascript object bằng cách trì hoãn việc đưa action đến reducer.
// Redux Thunk được sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập đến Store
// hoặc đơn giản là việc lấy dữ liệu như Ajax request

// Cấu hình cho redux
const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
};

export default reduxConfig;
