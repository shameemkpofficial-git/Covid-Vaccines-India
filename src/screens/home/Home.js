import React, {useState, useEffect, useContext} from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import state from '../../common/State';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconPack from '@components/IconPack';
import axios from 'axios';
import {
  View,
  Text,
  StatusBar,
  Alert,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';
import ChangeUrl from '@components/ChangeUrl';
import DropDownPicker from 'react-native-dropdown-picker';
import Fonts from '../../theme/Fonts';

export default function Home({navigation}) {
  const data = [
    {quarter: 'Apr 1', earnings: 13000},
    {quarter: 'Apr 2', earnings: 16500},
    {quarter: 'Apr 3', earnings: 14250},
    {quarter: 'Apr 4', earnings: 19000},
  ];
  const [open, setOpen] = useState(false);
  const [axiosData, setAxiosData] = useState('');
  const [list, setList] = useState(false);
  const [items, setItems] = useState(state);
  const [value, setValue] = useState(items[12].value);
  const arrayOfObj = Object.entries(axiosData).map(e => ({[e[0]]: e[1]}));

  useEffect(() => {
    getAxiosData();
  }, []);

  const getAxiosData = async () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://api.covid19india.org/state_district_wise.json',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        const arrayOfObj = Object.entries(response.data).map(e => ({
          [e[0]]: e[1],
        }));
        setAxiosData(arrayOfObj);
        // console.log(JSON.stringify(response.data));
        // console.log(JSON.stringify(arrayOfObj[17].Kerala));

        // response.data.map(item => console.log('item', item[0]));
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item, index}) => {
    console.log('Item', item);
    return (
      <View
        style={{
          height: 120,
          width: 160,
          backgroundColor: '#fff',
          marginTop: 20,
          flexDirection: 'row',
          marginLeft: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontFamily: 'Teko-Bold',
          }}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    // <Modal
    //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    //   transparent={true}
    //   visible={updateUrlModal}
    //   animationType="fade">
    //   <ChangeUrl onClose={() => setCloseModal(false)}/>
    // </Modal>
    <View style={{flex: 1, backgroundColor: '#131053', zIndex: 1}}>
      {/* <View style={{height:40,backgroundColor:'#131053', borderRadius:20, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:10}}>
                  <IconPack iconName="menu" pack="Entypo" iconColor="#fff" iconSize={30} />
                  <IconPack iconName="bells" pack="AntDesign" iconColor="#fff" iconSize={30}/>       
            </View> */}
      <View
        style={{
          height: 40,
          backgroundColor: '#131053',
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            // fontWeight: '500',
            fontFamily: Fonts.light,
          }}>
          Covid 19 India
        </Text>
        {/* <Dropdown
          style={{
            marginLeft: 30,
            height: 50,
            borderBottomColor: '#fff',
            borderBottomWidth: 0.5,
            width: 150,
          }}
          placeholderStyle={{fontSize: 16, color: '#fff'}}
          selectedTextStyle={{fontSize: 16, color: '#fff'}}
          inputSearchStyle={{height: 40, fontSize: 16}}
          iconStyle={{marginRight: 5}}
          data={data2}
          search
          maxHeight={300}
          valueField="Value"
          placeholder="Select State"
          value={value}
          onFocus={() => setIsFocus(true)}
          labelField="label"
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            console.log(item);
            setValue(item.value);
          }}></Dropdown> */}
        <DropDownPicker
          // style={{zIndex: 999}}
          // zIndex={1000}
          // zIndexInverse={5000}
          // zIndex={199}
          // zIndex={1}
          listMode="MODAL"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
          style={{width: 140, marginLeft: 90}}
        />
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#131053',
          marginTop: 30,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '100%',
            backgroundColor: '#ebcc34',
            width: 180,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Active
          </Text>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            {/* {arrayOfObj[0].Kerala.districtData.arrayOfObj['Other State'].active} */}
            {/* {arrayOfObj[10]} */}
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: 'red',
            width: 180,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Confirmed
          </Text>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            99
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#131053',
          marginTop: 30,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '100%',
            backgroundColor: 'green',
            width: 110,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Deceased
          </Text>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            99
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: 'darkcyan',
            width: 110,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Recovered
          </Text>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            99
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: 'darkblue',
            width: 110,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Serious
          </Text>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            99
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 200,
          backgroundColor: '#131053',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <VictoryChart height={300} width={300} theme={VictoryTheme.material}>
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            style={{data: {fill: '#ff0000'}}}
          />
        </VictoryChart>
      </View>
      <View
        style={{backgroundColor: '#131053', height: 90, flexDirection: 'row'}}>
        <FlatList
          data={arrayOfObj}
          horizontal={true}
          // keyExtractor={item=>item.}
          // renderItem={({item, index}) => (
          //   <View
          //     style={{
          //       height: 120,
          //       width: 160,
          //       backgroundColor: '#fff',
          //       marginTop: 20,
          //       flexDirection: 'row',
          //       marginLeft: 10,
          //     }}>
          //     <Text
          //       style={{
          //         fontSize: 20,
          //         color: 'black',
          //         fontFamily: 'Teko-Bold',
          //       }}>
          //       {/* demo{item.districtData.Nicobars.notes} */}
          //     </Text>
          //   </View>
          // )}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
