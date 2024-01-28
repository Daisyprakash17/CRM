
function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      console.error(e.message);
      return false;
    }
    return true;
  }


export const storePersist = {
    set: (key, state) => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    get: (key) => {
      const result = window.localStorage.getItem(key);
      if (!result) {
        return false;
      } else {
        if (!isJsonString(result)) {
          window.localStorage.removeItem(key);
          return false;
        } else return JSON.parse(result);
      }
    },
    remove: (key) => {
      window.localStorage.removeItem(key);
    },
    getAll: () => {
      return window.localStorage;
    },
    clear: () => {
      window.localStorage.clear();
    },
  };
  
  export default storePersist;