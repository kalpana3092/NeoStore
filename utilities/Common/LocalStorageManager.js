import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageManager = {
  SaveData: async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data), (error) => {
        if (error == undefined) {
          console.log('success!');
        }
      });
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  },

  GetStoredData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return JSON.parse(value);
      }
    } catch (error) {
      // Error retrieving data
      return error;
    }
  },

  RemoveData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  },
};
export default LocalStorageManager;
