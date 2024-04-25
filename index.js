/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';




// if (!Firebase.apps.length) {
    // Firebase.initializeApp();
  // }
  


AppRegistry.registerComponent(appName, () => App);
