// code your solution here
function saturdayFun(fun = "roller-skate") {
    return (`This Saturday, I want to ${fun}!`);
}

mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrap) {
    return function (char = "special") {
        return `You are ${wrap}${char}${wrap}!`
    }
};


