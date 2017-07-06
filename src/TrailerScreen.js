import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export const TRAILER_SCREEN_NAME = 'TRAILER_NAME';

export default class TrailerScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.trailer.title,
    });

    constructor(props) {
        super(props);

    }

    render() {
        //Receiving params of navigation
        const {trailer} = this.props.navigation.state.params;

        return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Image
                style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
                source={{uri: trailer.poster}}/>
                <Text>{trailer.genre}</Text>
                <Text>{trailer.actors}</Text>
        </View>
        );
    }
    
}

