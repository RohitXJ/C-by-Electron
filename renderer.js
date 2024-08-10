const { ipcRenderer } = require('electron');

document.getElementById('runCppButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    ipcRenderer.send('run-cpp', userInput);
});

ipcRenderer.on('cpp-output', (event, output) => {
    document.getElementById('output').textContent = output;
});
