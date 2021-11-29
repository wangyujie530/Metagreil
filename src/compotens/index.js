/*
 * @Author: your name
 * @Date: 2021-05-14 15:32:49
 * @LastEditTime: 2021-11-28 20:10:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bounce-market-masterc:\Users\wangyujie\Desktop\reactbcx\my-app\src\compotens\index.js
 */
import React from 'react'
import {
    HashRouter,
    Route,
    Redirect
} from 'react-router-dom'
import Header from './headers/headers'
import Home from './pages/home/home'
import MyNFT from './pages/MyNFT/MyNFT'
import Withdrawalhistory from './pages/Withdrawalhistory/Withdrawalhistory'

import Whitepaper from './pages/Whitepaper/Whitepaper'

export default function Index() {

    return ( <
        HashRouter >

        <Header />
        <Route exact path = '/'
        render = {
            () => {
                return <Redirect to = '/Home' / >
            }
        }
        />

        <Route exact path = '/Home'
        component = {
            Home
        }
        />
         < Route exact path = '/Whitepaper'
         component = {
             Whitepaper
         }
         />
        
        < Route exact path = '/MyNFT'
        component = {
            MyNFT
        }/> 
        < Route exact path = '/Withdrawalhistory'
        component = {
            Withdrawalhistory
        }/> 

        </HashRouter>
    )
}