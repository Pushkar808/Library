const userCSV = './assets/regularUser.csv';
const adminCSV = './assets/adminUser.csv';
const fs = require('fs');
const csv = require('csv-parser');
const json2csv = require('json2csv');

exports.addBook = async (user, data) => {
    try {
        const { bookName, author, year } = data;
        const newData = {
            BookName: bookName,
            Author: author,
            PublicationYear: year
        }
        const jsonData = await readCSVFile(userCSV);
        jsonData.push(newData);
        writeCSVFile(jsonData);

        return {
            status: true,
            message: "Data Modified Successfully",
            data: null
        };
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: "Some Error Occurred",
            data: null
        }
    }
}

exports.deleteBook = async (user, data) => {
    try {
        const { bookName } = data;
        const jsonData = await readCSVFile(userCSV);
        const modifiedData = jsonData.filter(item => item.BookName.toLowerCase() !== bookName.toLowerCase());
        writeCSVFile(modifiedData);
        return {
            status: true,
            message: "Data Modified Successfully",
            data: null
        };
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

function writeCSVFile(jsonData) {
    // Convert the object to CSV format
    const csv = json2csv.parse(jsonData);
    // add the CSV data to the existing file
    fs.writeFileSync(userCSV, csv);
}

