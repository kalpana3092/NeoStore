const CommonMethods = {
  CheckEmptyString: (text) => {
    return text === '' || text === null;
  },

  CheckValidEmail: (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text);
  },

  CheckValidPassword: (text) => {
    return text.length < 8;
  },

  CheckConfirmPassword: (password, oldpassword) => {
    return password === oldpassword;
  },

  CheckValidPhNumber: (text) => {
    return text.length < 10;
  },

  CheckValidZipcode: (text) => {
    return text.length < 6;
  },

  CheckisNumber: (text) => {
    return /^\d+$/.test(text);
  },

  range: (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  },
};
export default CommonMethods;
