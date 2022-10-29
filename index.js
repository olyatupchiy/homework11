let numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr === null:
        console.log('ви скасували')
        break;
    case numOrStr==='':
        console.log('Empty String');
        break;
    case isNaN (+numOrStr):
        console.log(`${numOrStr} is Ba_NaN`);
        break;
    default:
        console.log('OK!');
        break;
}

