import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('Mach.db');

export default {
    getDatabase() {
        return db;
    },
};