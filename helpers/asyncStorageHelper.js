import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageHelper = {
    key: 'GearScoreForNewWorld',
    get: async function() {
            //Note when fetching remember get(x).then(response=>{console.log(response)});
            try {
              return await AsyncStorage.getItem(this.key);
            } catch (error) {
              // Error retrieving data
              console.log(error.message);
            }


    },
    set: function(data){
        try{
            return AsyncStorage.setItem(this.key,JSON.stringify(data));
        } catch(error){
            console.log(error.message);
        }
    }

};
export default AsyncStorageHelper;
