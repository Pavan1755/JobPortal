import DataUriParser from "datauri/parser.js"

import path from "path";

// const getDataUri = (file) => {
//     const parser = new DataUriParser();
//     const extName = path.extname(file.originalname).toString();
//     return parser.format(extName, file.buffer);
// }


const getDataUri = (file) => {
    if (!file || !file.originalname) {
        // If file is not present, return null or handle it as needed
        return null;
    }
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;