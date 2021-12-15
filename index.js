//function findMatching(arr, name) {
  //  return arr.filter(function(test) {
//	    return test.toLowerCase() == name.toLowerCase();
//	    })
//	}


const findMatching = (arr, name) => {
    return arr.filter(function(test) {
        return test.toLowerCase() == name.toLowerCase();
        })
    }

const fuzzyMatch = (arr, inp) => {
    return arr.filter(function(test) {
        return test.toLowerCase().indexOf(inp.toLowerCase()) == 0
        })
    }

    const matchName = (obj, names) => {
        return obj.filter(function(test) {
            return test.name.toLowerCase() == names.toLowerCase();
            })
        }

