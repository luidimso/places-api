const fs = require('node:fs/promises');
const path = require('path');

const absPath = path.join(__dirname, '../data/places.json');
const absPathUser = path.join(__dirname, '../data/user-places.json');

exports.getPlaces = async (req, res, next) => {
    const fileContent = await fs.readFile(absPath);
    const places = {
        places: JSON.parse(fileContent)
    };

    res.status(200).json(places);
}

exports.updateUserPlaces = async (req, res, next) => {
    const fileContent = await fs.readFile(absPathUser);
    let userPlaces = JSON.parse(fileContent);
    userPlaces.push(req.body.places);

    await fs.writeFile(absPathUser, JSON.stringify(userPlaces));

    res.status(200).json({
        message: "Success"
    });
}

exports.getUserPlaces = async (req, res, next) => {
    const fileContent = await fs.readFile(absPathUser);
    const places = {
        places: JSON.parse(fileContent)
    };

    res.status(200).json(places);
}