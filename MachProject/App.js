import * as React from "react";
import NavBar from "./components/navBar";

import * as SQLite from 'expo-sqlite';

export default function App() {
    const db = SQLite.openDatabase('Mach.db');

    return (
       <NavBar/>
    );
}