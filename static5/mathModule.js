
export const add = (x, y) => {
    return x + y;
};

// You can export individual parts of a module
export const subtract = (x, y) => {
    return x - y;
};

// You can also export a default part of a module
export default (x, y) => {
    return x * y;
};

export const calc = {
    m: function(n) {
        return n / 2;
    }
}


