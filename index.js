const arrayMaker = (collection) => {
    if (typeof collection === "object") {
        let newArrayFromObj = Object.values(collection);
        return [...newArrayFromObj]
    } else if (Array.isArray(collection)) {
        return [...collection]
    }
}

const myEach = (collection, callback) => {
    let formattedCollection = arrayMaker(collection)
    for (let key of formattedCollection) {
        callback(key)
    }
    return collection
}

const myMap = (collection, callback) => {
    const arr = arrayMaker(collection);
    const result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i));
    }
    return result;
};

const myReduce = (collection, callback, startValue) => {
    const newArray = arrayMaker(collection);
    let acc = startValue !== undefined ? startValue : newArray.shift();

    newArray.forEach((val) => {
        acc = callback(acc, val, collection);
    });

    return acc
};

const myFind = (collection, predicate) => {
    const arr = arrayMaker(collection);
    for(let i = 0; i < arr.length; i++) {
        if(predicate(arr[i], i, arr)) {
            return arr[i]
        }
    }
}

const myFilter = (collection, predicate) => {
    let filterArr = []
    const arr = arrayMaker(collection);
    for(let i = 0; i < arr.length; i++) {
        if(predicate(arr[i]) === true) {
            filterArr.push(arr[i])
        }
    }
    return filterArr;

}

const mySize = (collection) => arrayMaker(collection).length

const myFirst = (array, n) => { 
    if(n) {
        return array.slice(0, n)
    }else {
        return array[0]
    }
}

const myLast = (array, n) => {
    if(n) {
        let nSlice = array.slice(array.length - n, array.length)
        return [...nSlice]
    }else {
        return array[array.length - 1]
    }
}

const myKeys = (object) => {
    let keys = []
    for(let key in object) {
        keys.push(key)
    }
    return keys
}

const myValues = (object) => {
    let values = Object.values(object)
    return [...values]
}