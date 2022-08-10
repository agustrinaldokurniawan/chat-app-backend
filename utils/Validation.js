const validator = require('validator');

const validation = async (keys, data) => {
  for (let i = 0; i < keys.length; i++) {
    if (!data[keys[i].value]) return `[${keys[i].value}] is required`;
    if (keys[i].validator) {
      if (!validator[keys[i].validator](data[keys[i].value]))
        return `[${keys[i].value}] has invalid character`;
    }
  }
};

module.exports = validation;
