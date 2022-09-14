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
import RNPickerSelect from 'react-native-picker-select'
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
  const [value, setValue] = useState('Kerala');
  const [selectedStateData, setselectedStateData] = useState({
    state: '',
    state_code: '',
    total_doses: 0,
    total_vaccinated: 0,
    total_fully_vaccinated: 0,
    population: 0,
    last_updated: '',
    ref: '',
  });

  useEffect(() => {
    getStateData(value);
  }, [value]);

  const getStateData = async statename => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://india-covid19vaccine.github.io/api/state_latest.json',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log('STATE DATA', response.data);
        response.data.map(item => {
          console.log('Selected State Name', statename);

          if (item.state === statename) {
            console.log('Selected state', item);
            setselectedStateData(item);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#181818',
        zIndex: 1,
      }}>
      <View
        style={{
          height: 40,
          backgroundColor: '#181818',
          marginHorizontal: 20,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: Fonts.light,
            }}>
            Covid-19 Vaccin
          </Text>
        </View>
        <View>
          <DropDownPicker
            listMode="MODAL"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme="LIGHT"
            style={{width: 140}}
          />
        </View>
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#181818',
          marginTop: 30,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '100%',
            backgroundColor: '#8758FF',
            marginHorizontal: 10,
            flex: 1,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Total Vaccinated
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            {selectedStateData.total_vaccinated}
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: '#8758FF',
            flex: 1,
            borderRadius: 20,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Total Doses
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            {selectedStateData.total_doses}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#181818',
          marginTop: 30,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '100%',
            backgroundColor: '#5CB8E4',
            width: 110,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            Population
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            {selectedStateData.population}
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: '#5CB8E4',
            width: 110,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            State Code
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontFamily: Fonts.light,
            }}>
            {selectedStateData.state_code}
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: '#5CB8E4',
            width: 110,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
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
          backgroundColor: '#181818',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {/* <VictoryChart height={300} width={300} theme={VictoryTheme.material}>
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            style={{data: {fill: '#ff0000'}}}
          />
        </VictoryChart> */}
      </View>
    </View>
  );
}
