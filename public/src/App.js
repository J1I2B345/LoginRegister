import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Login />} />
				<Route path="/pages" element={<Pages />} />
			</Routes>
		</BrowserRouter>
	);
}
