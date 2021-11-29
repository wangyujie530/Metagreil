/*
 * @Author: your name
 * @Date: 2021-05-07 16:36:48
 * @LastEditTime: 2021-11-27 21:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bounce-market-masterc:\Users\wangyujie\Desktop\BCX\bounce-market-master\src\App.js
 */
// import './stastic/css/Font.css'
import './stastic/css/App.css'
// import Page from './pages'
import Pages from './compotens'
import { IntlProvider } from 'react-intl'; 

const currentLang = 'en-US'      // en-US

function App() {
     
  return (
    <div className="App"> 
        < IntlProvider locale = {
          currentLang
        } >  < Pages />

        </IntlProvider> 
    </div>
  );
}

export default App;
