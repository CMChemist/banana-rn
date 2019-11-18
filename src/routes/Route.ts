import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TermsScreen from '../screens/TermsScreen';
import ApplicationApprovedScreen from '../screens/ApplicationApprovedScreen';
import ApplicationPendingScreen from '../screens/ApplicationPendingScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';

const MainStack = createStackNavigator({
	LoginScreen,
	DashboardScreen,
	RegistrationScreen,
	TermsScreen,
	ApplicationApprovedScreen,
	ApplicationPendingScreen,
	ContactScreen,
	LoginSuccessScreen,
}, {
	defaultNavigationOptions: {
		header: null,
		gesturesEnabled: false,
	},
	initialRouteName: 'LoginSuccessScreen',
});

const App = createAppContainer(MainStack);

export default App;