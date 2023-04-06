import fs from 'fs'
const dir = './input';
const out = './output';

function getValues({name}) {
    return {name}
}

fs.readdir(dir, (err, files) => {
    if (err) throw err;

    // Loop through each file in directory
    files.forEach(async (file) => {
        // Check if file is a JSON file
        if (file.endsWith('.json')) {
            // Read JSON data from file
            console.log('reading files')

            const data = JSON.parse(fs.readFileSync(`${dir}/${file}`, 'utf-8'));

            fs.writeFileSync(`${out}/${file}`, JSON.stringify(data.map(getValues), null, 2), 'utf8')
        }
    });
});