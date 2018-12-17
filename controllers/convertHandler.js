/*
*
*
*       Complete the handler logic below
*       
*       
*/
const fullUnit = {
  kg: "kilograms",
  lbs: "pounds",
  gal: "gallons",
  L: "liters",
  mi: "miles",
  km: "kilometers"
}

const validateUnit = (val) => {

  const units = {
    gal: "gal",
    gals: "gal",
    gallons: "gal",
    l: "L",
    L: "L",
    liters: "L",
    lb: "lbs",
    lbs: "lbs",
    pounds: "lbs",
    kg: "kg",
    Kg: "kg",
    Kgs: "kg",
    kilograms: "kg",
    mi: "mi",
    miles: "mi",
    km: "km",
    Km: "km",
    kilometers: "km"
  }

  let test = units[val]

  if (!test) {
    throw "invalid unit"
  }
  return test
}

const validateNum = (val) => {

  if(val.match(/\.+/g) && val.match(/\.+/g).length > 1) {
    return "invalid number"
  }
  return val
}

const roundNum = (num) => {
  return Math.round(num * 100000) / 100000
}

function ConvertHandler() {

  
  this.getNum = function(input) {

    let valueArr;
    const splitPoint = input.search(/[^\.|^\d|^\/]/)
    let value = input.slice(0, splitPoint)
    try {
      if (!value) {
        value = 1
      } else {
        if (value.match(/\/+/g) && value.match(/\/+/g).length > 1) {
          throw "invalid number"
        } else {
          if (value.match(/\/+/g)) {
            valueArr = value.split("/")
          } else {
            valueArr = [value]
          }
          valueArr.forEach(element => {
            if(validateNum(element) === element) {
              return element
            } else {
              throw "invalid number"
            }
          });

          if (valueArr.length > 1) {
            let dec = valueArr[0] / valueArr[1]
            return roundNum(dec)
          } 
          return roundNum(valueArr[0])
        }
      }
    }
    catch(err) {
      return false
    }
  };
  
  this.getUnit = function(input) {
    
    const splitPoint = input.search(/[^\.|^\d|^\/]/)
    let value = input.slice(splitPoint)
    try {validateUnit(value)}
    catch(err) {return false}
    return value
  };
  
  this.getReturnUnit = function(initUnit) {
    
    switch(initUnit) {
      case "gal":
        return "L"
      case "L":
        return "gal"
      case "lbs":
        return "kg"
      case "kg":
        return "lbs"
      case "mi":
        return "km"
      case "km":
        return "mi"
    }
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let value

    switch(initUnit) {
      
      case "gal":
        value = initNum * galToL
        break
      case "L":
        value = initNum / galToL
        break
      case "lbs":
        value = initNum * lbsToKg
        break
      case "kg":
        value = initNum / lbsToKg
        break
      case "mi":
        value = initNum * miToKm
        break
      case "km":
        value = initNum / miToKm
        break
    }
    return roundNum(value)
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    return `${initNum} ${fullUnit[initUnit]} converts to ${returnNum} ${fullUnit[returnUnit]}`
  };
  
}

module.exports = ConvertHandler;
