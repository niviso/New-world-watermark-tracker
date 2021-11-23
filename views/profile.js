import {AppContext} from '../contexts/appContext';
import React,{useContext,useState,useEffect} from 'react';
import { Switch, Text, View,ScrollView,TouchableOpacity,Alert,Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Collapsible from 'react-native-collapsible';
import AsyncStorageHelper from '../helpers/asyncStorageHelper';
export default function Profile(props){
    const [state,setState] = useContext(AppContext)
    const [selectedSlot,setSelectedSlot] = useState("legs");
    const [showModal,setShowModal] = useState(false);
    const UpdateState = async () => {
        const data = await AsyncStorageHelper.get();
        if(data){
            setState(JSON.parse(data));
        }
    }
    const UpdateAsync = async (data) => {
        await AsyncStorageHelper.set(data);
    }
    useEffect(() => {
        UpdateState();
    },[]);
    const Slot = (props) => {
        const {slotKey,data} = props;
        const slotDesign = {
            width: '100%',
            padding: 15,
            height:75,
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            borderBottomColor:'white',
            borderBottomWidth:1,
            backgroundColor: data.score == 600 ? 'green' : ''
        }
        const toggleSwitch = () => {
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.watermark[slotKey].isEnabled = !stateCopy.watermark[slotKey].isEnabled;
                setState(stateCopy);
                UpdateAsync(stateCopy);
        }
        const UpdateScore = () => {
            if(!data.isEnabled){
                return;
            }
            setSelectedSlot(slotKey);
            setShowModal(true);
        }
        return(
            <TouchableOpacity onPress={UpdateScore} style={slotDesign}>
                              <View style={{width:'25%',borderRadius:10,backgroundColor:'white',padding:10,paddingLeft:20,paddingRight:20}}>
                    <Text style={{color:'black',fontSize: 10,textAlign:'center',}}>{data.name}</Text>
                    </View>
                                <Text style={{color:'white',width:'50%',fontSize: 20,textAlign:'center'}}>{data.score}</Text>
                <TouchableOpacity style={{width:'25%'}} onPress={toggleSwitch}><Text style={{color:'white',fontSize: 12,textAlign:'right'}}>{data.isEnabled ? 'REMOVE' : 'ADD'}</Text></TouchableOpacity>

            </TouchableOpacity>
        )

    }
    let GearScoreLabels = [];
    for(let i = 500;i!= 601;i++){
        GearScoreLabels.push(<Picker.Item key={i} label={i.toString()} value={i.toString()} />)
    }
    const UpdateSlotScore = (value) => {
        let stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.watermark[selectedSlot].score = parseInt(value);
        setState(stateCopy);
        UpdateAsync(stateCopy);
    }
    return(
        <ScrollView>
            <TouchableOpacity>
            <Text style={{fontSize: 32,color:'green',padding: 35,backgroundColor:'rgba(0,0,0,0.2)',textAlign:'center'}}>Active slots</Text>
            </TouchableOpacity>
            {
                Object.keys(state.watermark).map(function(key, index) {
                    return state.watermark[key].isEnabled && <Slot data={state.watermark[key]} slotKey={key} key={key}/>
                    })
            }
            <TouchableOpacity style={{fontSize: 32,color:'red',padding: 35,backgroundColor:'rgba(0,0,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize: 32,color:'red'}}>Inactive slots</Text>
            </TouchableOpacity>
            {
                Object.keys(state.watermark).map(function(key, index) {
                    return !state.watermark[key].isEnabled && <Slot data={state.watermark[key]} slotKey={key} key={key}/>
                    })
            }

            <View style={{height: 35}}/>

            <Modal 
            visible={showModal}
            transparent={true}
            animationType="slide"
            >
                <View style={{position:'absolute',bottom:0,left:0,width:'100%',backgroundColor:'#C6C6C6',display:'flex'}}>
                <TouchableOpacity onPress={() => setShowModal(false)} style={{alignSelf: 'flex-end',padding:15}}><Text style={{color:'blue'}}>Done</Text></TouchableOpacity>
                <Picker
  selectedValue={state.watermark[selectedSlot].score.toString()}
  onValueChange={(itemValue, itemIndex) =>
    UpdateSlotScore(itemValue)
  }>
     {GearScoreLabels}
</Picker>
              </View>
            </Modal>
        </ScrollView>
    );

}
