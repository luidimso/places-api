const fs = require('node:fs/promises');
const path = require('path');

const absPath = path.join(__dirname, '../data/places.json');

exports.getPlaces = async (req, res, next) => {
    const fileContent = await fs.readFile(absPath);
    const places = {
        places: JSON.parse(fileContent)
    };

    res.status(200).json(places);
}