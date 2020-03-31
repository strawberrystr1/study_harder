const foo = function (arg) {
    if (typeof(arg) !== 'string') {
        alert('Введите строку');
    }
    let str = arg.trim();
    if (str.length >= 30) {
        str = str.substring(0, 30) + '...';
    }
    return str;
};

console.log(foo('  foo0000000000000000000000000002132132131   '));
