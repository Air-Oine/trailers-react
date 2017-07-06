import React, { Component } from 'react';

export default class FetchService {
    
    
    static async getTrailersFromApi() {
        //Checking network state
        NetInfo.fetch().then((reach) => {
            console.log('Initial: ' + reach);
            
            //No network
            if(reach === 'none' | reach === 'unknown') {
                
                //Getting saved trailers
                try {
                    const trailerList = await AsyncStorage.getItem('TrailersApp:trailers');
                }
                catch(error) {
                    console.log(error);
                }
                 
                return trailerList;
            }
            else {
                try {
                    //Get all trailers from remote server
                    let response = await fetch('http://localhost:8080/trailers');
                    
                    let responseJson = await response.json();
                    
                    const trailerList = lodash.sortBy(responseJson, ['title']);
                    
                    //Saving trailers in local storage
                    await AsyncStorage.setItem('TrailersApp:trailers', JSON.stringify(trailerList));
                }
                catch(error) {
                    console.log(error);
                }
                
                return trailerList;
            }
        });
    }
}