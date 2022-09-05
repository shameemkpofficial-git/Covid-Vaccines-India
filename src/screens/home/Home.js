import React, {useState, useEffect, useContext} from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconPack from '@components/IconPack'
import axios from 'axios';
import {View, Text, StatusBar, Alert, Modal, Dimensions} from 'react-native';
import ChangeUrl from '@components/ChangeUrl';

export default function Home({navigation}) {
  //   const [updateUrlModal, setCloseModal] = useState(true)
  const data = [
    { quarter: 'Apr 1', earnings: 13000 },
    { quarter: 'Apr 2', earnings: 16500 },
    { quarter: 'Apr 3', earnings: 14250 },
    { quarter: 'Apr 4', earnings: 19000 }
  ];

  return (
    // <Modal
    //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    //   transparent={true}
    //   visible={updateUrlModal}
    //   animationType="fade">
    //   <ChangeUrl onClose={() => setCloseModal(false)}/>
    // </Modal>
    <View style={{flex:1,backgroundColor:'#131053'}}>
            {/* <View style={{height:40,backgroundColor:'#131053', borderRadius:20, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:10}}>
                  <IconPack iconName="menu" pack="Entypo" iconColor="#fff" iconSize={30} />
                  <IconPack iconName="bells" pack="AntDesign" iconColor="#fff" iconSize={30}/>       
            </View> */}
            <View style={{height:40, backgroundColor:'#131053', marginHorizontal:10, marginTop:10}}>
              <Text style={{color:'#fff', fontSize:24, fontWeight:'500'}}>Covid 19 India</Text>
            </View>   
            <View style={{height:120, backgroundColor:'#131053', marginTop:30, marginHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{height:'100%', backgroundColor:'#ebcc34', width:180, borderRadius:20}}>
              <Text style={{fontSize:20, fontWeight:'700', color:'#fff', textAlign:'center', marginTop:10}}>Affected</Text>
              </View>
              <View style={{height:'100%', backgroundColor:'red', width:180, borderRadius:20}}>
              <Text style={{fontSize:20, fontWeight:'700', color:'#fff', textAlign:'center', marginTop:10}}>Death</Text>
              </View>
            </View> 
            <View style={{height:120, backgroundColor:'#131053', marginTop:30, marginHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{height:'100%', backgroundColor:'green', width:110, borderRadius:20}}>
                <Text style={{fontSize:20, fontWeight:'700', color:'#fff', textAlign:'center', marginTop:10}}>Recovered</Text>
              </View>
              <View style={{height:'100%', backgroundColor:'darkcyan', width:110, borderRadius:20}}>
              <Text style={{fontSize:20, fontWeight:'700', color:'#fff', textAlign:'center', marginTop:10}}>Active</Text>
              </View>
              <View style={{height:'100%', backgroundColor:'darkblue', width:110, borderRadius:20}}>
              <Text style={{fontSize:20, fontWeight:'700', color:'#fff', textAlign:'center', marginTop:10}}>Serious</Text>
              </View>
            </View> 
            <View style={{height:320, backgroundColor:'#131053', justifyContent:'center', flexDirection:'row'}}>
            <VictoryChart   height={300}
            width={300} theme={VictoryTheme.material} >
            <VictoryBar data={data} x="quarter" y="earnings"  style={{ data: { fill: "#ff0000" } }} />
            </VictoryChart>
            </View>
            
            {/* <BarChart 
            style={{height:200}}
            data={data}
            width={120}
            height={220}
            yAxisLabel="$"
         chartConfig={backgroundGradientFrom: "#1E2923",
         backgroundGradientFromOpacity: 0,
         backgroundGradientTo: "#08130D",
         backgroundGradientToOpacity: 0.5,
         color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
         strokeWidth: 2, // optional, default 3
         barPercentage: 0.5,
         useShadowColorFromDataset: false}
            verticalLabelRotation={30}></BarChart> */}
    </View>
  );
}
