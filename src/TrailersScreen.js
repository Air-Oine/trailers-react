import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FetchService from './FetchService';

const lodash = require('lodash');

export const TRAILERS_SCREEN_NAME = 'TRAILERS_NAME';

export default class TrailersScreen extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log('query')
        FetchService.getTrailersFromApi().then((response) => {
                    console.log('received')
            let re = response;
            console.log(re);
        });
        
    }

    

    render() {
        return (
        <View>
        </View>
        );
    }
    
}