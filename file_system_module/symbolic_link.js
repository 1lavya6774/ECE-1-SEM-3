import fs from 'fs';
fs.symlink('notes.txt', 'notes_link.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Symbolic link created successfully.');
});