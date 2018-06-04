var checkRange = function(value) {
    if(typeof value !== 'number'){
        return false
    } else return value >= this.minimum && value <= this.maximum
}

var range = {minimum: 10, maximum: 20}

var boundedCheckRange = checkRange.bind(range)

console.log(boundedCheckRange(12))

