function debounce(func,gap){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), gap)
    }
}

let log = debounce(() => console.log('Debounced'),3000)
log();