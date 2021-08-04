  
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('perfil.db');

export const init = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS perfil (
                    id INTEGER PRIMARY KEY NOT NULL,
                    image TEXT NOT NULL 
                )`,
                [],
                () => {resolve()},
                (_, err) => {reject(err)},
            )
        });
    });
    return promise;
}

export const insertFoto = (image) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql (
            `INSERT INTO perfil (image) VALUES (?)`,
            [image],
            (_, result) => resolve(result),
            (_, err) => reject (err),
            )
        });
    });
    return promise;
}

export const fetchFoto = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT image FROM perfil;`,
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            );
        });
    });
    return promise;
}
