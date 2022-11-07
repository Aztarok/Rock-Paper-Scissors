function getComputerChoice() {
    const min = 1;
    const max = 3;
    let randomOject = Math.floor(Math.random() * (max - min + 1) + min);
    return randomOject;
}

console.log(getComputerChoice())