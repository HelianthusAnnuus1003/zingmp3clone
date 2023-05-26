import React from "react";
import { Outlet } from "react-router-dom";

// Outlet => đại diện cho các child component ở trong layout này

const Public = () => {
    return (
        <div>
            Public
            <Outlet />
        </div>
    );
};

export default Public;
