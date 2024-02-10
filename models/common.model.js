const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const csv = require('csv-parser');
const userCSV = './assets/regularUser.csv';
const adminCSV = './assets/adminUser.csv';
exports.home = async (user, data) => {
    try {
        const jsonData = await readCSVFile(userCSV);
        if (user?.userType == "admin")
            jsonData.push(await readCSVFile(adminCSV));
        return {
            status: true,
            message: "Data Fetched Success",
            data: jsonData
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: "Some Error Occurred",
            data: null
        }
    }
}

function readCSVFile(filePath) {
    return new Promise((resolve, reject) => {
        const jsonData = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                jsonData.push(row);
            })
            .on('end', () => {
                resolve(jsonData);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}