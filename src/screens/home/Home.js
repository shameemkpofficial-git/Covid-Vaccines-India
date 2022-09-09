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
  useEffect(() => {
    console.log(state);
  }, []);

  const data = [
    {quarter: 'Apr 1', earnings: 13000},
    {quarter: 'Apr 2', earnings: 16500},
    {quarter: 'Apr 3', earnings: 14250},
    {quarter: 'Apr 4', earnings: 19000},
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
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
          items={state}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{width: 120, marginLeft: 90}}
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
            Affected
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
            Death
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
          height: 320,
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
      <View style={{backgroundColor: '#fff', height: 90, flexDirection: 'row'}}>
        <FlatList
          data={[{}, {}, {}, {}, {}]}
          // numColumns={3}
          horizontal={true}
          renderItem={({item, index}) => (
            <View
              style={{
                height: 120,
                width: 160,
                backgroundColor: '#fff',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <Text
                style={{fontSize: 20, color: 'black', fontFamily: 'Teko-Bold'}}>
                Demo
              </Text>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
}
