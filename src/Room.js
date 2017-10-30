import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Platform, ScrollView, StatusBar, FlatList, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const eWidth = Math.floor(width/15);

export default class Room extends Component<{}>{
    constructor(props){
        super(props);
        let arrTable = [];
        for(let i=0; i<10;i++){
            arrTable.push({key: i, })
        }
        this.name = 'tungnt';
        this.state = {
            arrTable,
            players: {me: {name: this.name, score: 10, turn: true}, opponent: {name: '', score: 0, turn: false}},
            message: 'Click bắt đầu để chơi'
        }
    }

    joinRoom(id){
        this.props.navigation.navigate('Table', {id});
    }

    createRoom(){

    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={{flex: 1, alignItems:'center'}}>
                    <View style={{marginTop: 20}}>
                        <Button title='Tạo phòng' color="#68BEAC" onPress={()=>this.createRoom()}/>
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 18, color:'#000'}}>Danh sách phòng</Text>
                    <FlatList
                        style={{alignSelf: 'center', marginTop: 10}}
                        data={this.state.arrTable}
                        renderItem = {({item})=>
                            <TouchableOpacity
                                onPress={()=>this.joinRoom(item.key)}
                                style={{margin:5}}>
                                <Text style={{paddingHorizontal: 20, paddingVertical: 5, color: '#fff', fontSize: 18, textAlign:'center', backgroundColor:'#1194F6'}}>Phòng {item.key}</Text>
                            </TouchableOpacity>
                        }
                        horizontal = {false}
                        numColumns = {3}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

});
