import React, { Component } from 'react';
import { NetInfo, AsyncStorage, View, Image, FlatList, Text, TouchableHighlight } from 'react-native';

import FetchService from './FetchService';
import {TRAILER_SCREEN_NAME} from './TrailerScreen';

const lodash = require('lodash');

export const TRAILERS_SCREEN_NAME = 'TRAILERS_NAME';

export default class TrailersScreen extends Component {
    
    static navigationOptions = {
        title: 'Trailers',
    };
    
    constructor(props) {
        super(props);

        this.state = {
            trailers: []
        }
        
        this.navigate = this.props.navigation.navigate;

        this.showTrailerDetails = this.showTrailerDetails.bind(this);
        this.renderItemList = this.renderItemList.bind(this);
        this.loadTrailersData = this.loadTrailersData.bind(this);
    }

    componentWillMount() {
        this.loadTrailersData();
    }

    showTrailerDetails (item) {
        this.navigate(TRAILER_SCREEN_NAME, {trailer: item});
    };    
    
    loadTrailersData() {
        FetchService.getTrailersFromApi().then((trailerList) => {
            this.setState({trailers: trailerList}); 
        });
    }

    renderItemList({item}) {
        return (
        <TouchableHighlight onPress={() => this.showTrailerDetails(item)}>
            <View style={{flex: 1, flexDirection: 'row', margin: 2}}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: item.poster}}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text>{item.title}</Text>
                    <Text>{item.genre}</Text>
                </View>
            </View>
        </TouchableHighlight>
        );
    }
    
    render() {
        return (
        <FlatList
            data={this.state.trailers}
            renderItem={this.renderItemList}
            keyExtractor={item => item.title}
        />
        );
    }
    
}