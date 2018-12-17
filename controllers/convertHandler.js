/*
*
*
*       Complete the handler logic below
*       
*       
*/
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
    return "invalid unit"
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
      return "invalid number"
    }
  };
  
  this.getUnit = function(input) {
    
    const splitPoint = input.search(/[^\.|^\d|^\/]/)
    let value = input.slice(splitPoint)
    let validated = validateUnit(value)
    return validated
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
