import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Room from './Room';
import Table from './Table';

export const Navigator = StackNavigator({
    Login:{
        screen: Login,
        navigationOptions:{
            title: 'Đăng nhập'
        }
    },
    Room:{
        screen: Room,
        navigationOptions:{
            title: 'Phòng game'
        }
    },
    Table:{
        screen: Table,
        // navigationOptions:{
        //     title: 'Phòng chơi'
        // }
    },
});