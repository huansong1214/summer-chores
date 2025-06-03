// Define the functions

function mowYard(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name + " mowed the yard.");
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        const choreCompleted = Math.random() > 0.3; // 70% chance they completed the chore
        setTimeout(() => {
            if (choreCompleted) {
                resolve(name + " finished using the weed eater.");
            } else {
                reject(name + " fell asleep after mowing the yard.");
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        const choreCompleted = Math.random() > 0.4; // 60% chance they completed the chore
        setTimeout(() => {
            if (choreCompleted) {
                resolve(name + " finished trimming the hedges.");
            } else {
                reject(name + " fell asleep after weed eating the yard.");
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise ((resolve, reject) => {
        const choreCompleted = Math.random() > 0.5; // 50% chance they completed the chore
        setTimeout(() => {
            if (choreCompleted) {
                resolve(name + " finished collecting wood.");
            } else {
                reject(name + " fell asleep after trimming the hedges.");
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        const choreCompleted = Math.random() > 0.6; // 40% chance they completed the chore
        setTimeout(() => {
            if (choreCompleted) {
                resolve(name + " finished watering the garden.");
            } else {
                reject(name + " fell asleep after collecting wood.");
            }
        }, 500);
    });
}

function doSummerChores(name) {
    mowYard(name)
        .then(value => {console.log(value); return weedEat(name)})
        .then(value => {console.log(value); return trimHedges(name)})
        .then(value => {console.log(value); return collectWood(name)})
        .then(value => {console.log(value); return waterGarden(name)})
        .then(value => {console.log(value); console.log(name + " finished all their chores!")})
        .catch(error => {console.log(error)});
}

// Call the function

doSummerChores("Bob");