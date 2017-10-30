import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Platform, ScrollView, StatusBar, FlatList, Dimensions} from 'react-native';
import {NavigationActions} from 'react-navigation';
const width = Dimensions.get('window').width;
const eWidth = Math.floor(width/15);

export default class Login extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            error:''
        }
    }

    login(){
        if(this.state.username === ''){
            this.setState({
                error: 'Bạn chưa nhập tên đăng nhập'
            })
        }
        else{
            let action = NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Room'})
                ]
            });
            this.props.navigation.dispatch(action);
        }
    }

    render(){
        return(
            <View style={{backgroundColor:'#fff', paddingTop: 50, paddingHorizontal: 20, flex:1}}>
                <Text style={{color:'#000', fontSize: 18}}>Nhập tên đăng nhập</Text>
                <TextInput value={this.state.username} onChangeText={(username) => this.setState({username})}/>
                <Text style={{color:'red', fontSize: 14, marginVertical: 10}}>{this.state.error}</Text>
                <Button title="Đăng nhập" color="#1194F6" style={{marginTop: 20}} onPress={()=>this.login()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
