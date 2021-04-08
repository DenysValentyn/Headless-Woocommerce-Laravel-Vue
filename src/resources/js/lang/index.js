import _ from 'lodash';

let exported = {};
let languages = []

// DYNAMIC IMPORT BADASO LANG
try {
  const modules = require.context("./modules", false, /\.js$/); //
  modules.keys().forEach((fileName) => {
    let property = fileName
      .replace("./", "")
      .replace(".js", "")
      .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, "-") // replace all spaces and low dash
      .replace(/^\.\/_/, "")
      .replace(/\.\w+$/, "")
      .split("-")
      .map((word, index) => {
        if (index > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join("");
    
      languages.push({
        label: modules(fileName).label,
        key: property
      })
    exported[property] = modules(fileName).default;
  });
} catch (error) {
  console.info("Failed to load badaso languages", error);
}

// DYNAMIC IMPORT CUSTOM LANG
try {
  const modules = require.context(
    "../../../../../../../resources/js/badaso/lang",
    false,
    /\.js$/
  ); //
  modules.keys().forEach((fileName) => {
    let property = fileName
      .replace("./", "")
      .replace(".js", "")
      .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, "-") // replace all spaces and low dash
      .replace(/^\.\/_/, "")
      .replace(/\.\w+$/, "")
      .split("-")
      .map((word, index) => {
        if (index > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join("");
    if (exported[property]) {
      exported[property] = _.merge(exported[property], modules(fileName).default);
    } else {
      exported[property] = modules(fileName).default;
      languages.push({
        label: modules(fileName).label,
        key: property
      })
    }
  });
} catch (error) {
  console.info("Failed to load custom languages", error);
}

export default {
  languages,
  i18n: exported
};
