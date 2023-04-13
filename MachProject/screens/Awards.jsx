import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, FlatList, Button, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import Database from '../components/Database.js'

const db = Database.getDatabase();

    class AwardDatabase {
    findPath() {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;`,
                [],
                (_, result) => {
                    if (result.rows.length > 0) {
                        const path = db._db.filename;
                        console.log(path);
                    } else {
                        console.log('No tables found');
                    }
                },
                error => {
                    console.log(`Error getting database path: ${error.message}`);
                }
            );
        });

    }
    createTable() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT name FROM sqlite_master WHERE type="table" AND name="awards";',
                    [],
                    (_, result) => {
                        if (result.rows.length > 0) {
                            resolve(false); // Table already exists
                        } else {
                            tx.executeSql(
                                'CREATE TABLE awards (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, points INT);',
                                [],
                                () => {
                                    resolve(true); // Table created successfully
                                },
                                (_, error) => {
                                    console.log('Error creating table:', error);
                                    resolve(false); // Error creating table
                                }
                            );
                        }
                    },
                    (_, error) => {
                        console.log('Error checking for table:', error);
                        resolve(false); // Error checking for table
                    }
                );
            });
        });
    }

    insertAward(name, points) {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO awards (name, points) VALUES (?, ?);',
                [name, points],
                (_, { insertId }) => console.log(`Inserted row with id ${insertId}`),
                (_, error) => console.log(`Error inserting row: ${error}`)
            );
        });
    }

    insertMultiple(awards) {
        const values = awards.map(({ name, points }) => `("${name}", ${points})`).join(',');
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO awards (name, points) VALUES ${values};`,
                [],
                () => console.log(`Inserted ${awards.length} rows`),
                (_, error) => console.log(`Error inserting rows: ${error}`)
            );
        });
    }

    readAwards() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM awards',
                    [],
                    (txObj, { rows: { _array } }) => {
                        // Map each row to an object containing id, name, and points
                        const awards = _array.map(row => ({
                            id: row.id,
                            name: row.name,
                            points: row.points,
                        }));
                        resolve(awards);
                    },
                    error => reject(error)
                );
            });
        });
    }


    updatePoints(id, points) {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE awards SET points = ? WHERE id = ?;',
                [points, id],
                () => console.log('Updated row'),
                (_, error) => console.log(`Error updating row: ${error}`)
            );
        });
    }

    deleteAward(id) {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM awards WHERE id = ?;',
                [id],
                () => console.log('Deleted row'),
                (_, error) => console.log(`Error deleting row: ${error}`)
            );
        });
    }
}

const Awards = ({ navigation }) => {
    const awardsList = [ //Basically the Database because it won't work
        { name: 'Mach Water Bottle + Stickers + Tattoos', points: 0 },
        { name: 'Mach Drawstring Backpack', points: 300 },
        { name: 'Mach Socks', points: 500 },
        { name: 'Mach Hat', points: 700 },
        { name: 'Mach Coffee Mug', points: 900 },
        { name: 'Mach Beanie', points: 1100 },
        { name: 'Mach T-shirt', points: 1300 },
        { name: 'Mach Hoodie', points: 1500 },
        { name: 'Team Mach Transition Towel', points: 1750 },
        { name: 'Mach Gloves', points: 2000 },
        { name: 'Mach Base Layer', points: 2250 },
        { name: 'Mach Gilet', points: 2500 },
        { name: 'Mach Cycling Jacket', points: 2750 },
        { name: 'Mach Running Shorts', points: 3000 },
        { name: 'Mach Tri-shorts', points: 3250 },
        { name: 'Mach Tri-jersey', points: 3500 },
        { name: 'Mach Swimsuit', points: 4000 },
        { name: '$150 Value Gift Card To Mach Apparels Store', points: 4500 },
        { name: 'Mach Surprise Package', points: 5000 },
        { name: 'Next Years Team T-shirt', points: 5500 },
        { name: 'Next Years Team Tri-suit', points: 6000 },
        { name: 'Next Years Team Cycling Bibs', points: 6500 },
        { name: 'Mach Tri-suit', points: 7000 },
        { name: 'Mach Cycling Kit', points: 7500 },
        { name: 'Team Mach Tri Bag', points: 10000 },
        { name: '$300 Value Gift Card To Mach Apparels Store', points: 12500 },
        { name: 'Custom Mach Race Week Shirt', points: 15000 },
        { name: 'Custom Mach Tri-suit', points: 17500 },
        { name: 'Mach Pays For Your USAT Membership', points: 20000 },
        { name: 'Mach Pays For 3 Race Entries', points: 22500 },
        { name: 'Mach Pays For 1 Flight To A Race Of Your Choosing (North America)', points: 25000 },
        { name: 'Win A Trip To Train With The Pros', points: 30000 },
        { name: 'Mach Surprise Package', points: 35000 },
        { name: 'Mach Sends Videographer For Day In The Life Video (Mach YouTube Channel)', points: 40000 },
        { name: 'Win A Trip To Kona Hawaii World Championships', points: 45000 },
        { name: 'Free Team Bundle For Life', points: 50000 },
    ];

    const [awards, setAwards] = useState([]);

    useEffect(() => {
        const awardsDB = new AwardDatabase();
        //awardsDB.findPath();
        // awardsDB.createTable().then(success => {
        //     console.log(success)
        //     if (success) {
        //         awardsDB.insertMultiple(awardsList)
        //     }
        // });
        //awardsDB.insertAward('New', 2);
        awardsDB.readAwards().then(awards => {
            setAwards(awards);
            //console.log(awards);
        }).catch(error => {
            console.error(error);
        });
        //awardsDB.updatePoints(1, 150);
        //awardsDB.deleteAward(10);

    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={{marginTop: 10}}>
                {awards.map(award => (
                    <View
                        key={award.id}
                        style={[
                            styles.button,
                            { backgroundColor: award.points > 250 ? '#6bd0f6' : '#AAAAAA' },
                        ]}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.title}>{award.name}</Text>
                            <Text style={styles.points}>{award.points} Points</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    button: {
        width: 320,
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    points: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        marginLeft: 10,
        width: 100,
    },
});


export default withNavigation(Awards);