import React, { Component } from 'react';

export default class FetchService {

    //Get all trailers from remote server
    static async getTrailersFromApi() {
        try {
            let response = await fetch('http://localhost:8080/trailers');

            let responseJson = await response.json();

            return responseJson;
        }
        catch(error) {
            console.log(error);
        }
    }
}