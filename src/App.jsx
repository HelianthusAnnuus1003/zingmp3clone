import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const { test } = useSelector((state) => state.app);

    console.log(test);

    return (
        <>
            <h1 className="text-[30px] font-bold bg-gray-300 p-5 text-red-500">
                Hello world!
            </h1>
        </>
    );
}

export default App;
