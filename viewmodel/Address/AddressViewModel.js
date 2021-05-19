import CommonMethods from '../../utilities/Common/CommonMethods';

const AddressViewModel = {
  ValidateEmptyString: (text) => {
    return CommonMethods.CheckEmptyString(text);
  },

  ValidateNumber: (text) => {
    return CommonMethods.CheckisNumber(text);
  },

  ValidateZipcodeNumber: (text) => {
    return CommonMethods.CheckValidZipcode(text);
  },
};
export default AddressViewModel;
