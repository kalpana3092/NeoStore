import NetInfo from '@react-native-community/netinfo';
const NetworkReachability = {
  CheckConnectivity: async () => {
    try {
      const value = await NetInfo.fetch();
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
      return error;
    }
  },
};
export default NetworkReachability;
