import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Public } from "./pages/public";
import paths from "./ultils/paths";

function App() {
    // Nested routes => Hiển thị các trang khác nhau ở chung bên trong một layout
    // Layout chung, gốc là Public, các component khác sẽ có chung layout đó
    return (
        <>
            <Routes>
                <Route path={paths.PUBLIC} element={<Public />}>
                    <Route path={paths.HOME} element={<Home />} />
                    <Route path={paths.LOGIN} element={<Login />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
