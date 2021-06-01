import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SaleDetail from '../Components/SaleDetail'
import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen : Search,
        navigationOptions: {
            title: 'Search'
        }
    },
    SaleDetail: {
        screen: SaleDetail,
        navigationOptions: {
            title: ''
        }
    }
})

export default createAppContainer(SearchStackNavigator)