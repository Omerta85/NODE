function studentBuilder(name, age) {
    return {
        name,
        age,
        sleep: () => {
            console.log('I want be break free');
        }
    }
}

module.exports = {
    studentBuilder
}