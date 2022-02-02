function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (task = 'go to the office') => {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective (flair = '*'){
    const innerFun = function(adj = 'specail'){
        return `You are ${flair}${adj}${flair}!`;
    }
    return innerFun
}