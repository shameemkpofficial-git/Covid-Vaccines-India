/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/common/Context';
import Splash from './src/screens/splash/Splash';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
