import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBorad from "../components/DashBorad";
import Items from "../components/Items/Items";
import Login from "../components/Login";
import SubItem from "../components/Subitem/SubItem";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBorad />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/navitem"
        element={
          <PrivateRoute>
            <Items />
          </PrivateRoute>
        }
      />
      <Route
        path="/subitem/:id"
        element={
          <PrivateRoute>
            <SubItem />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
