import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    Platform,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import IconM from 'react-native-vector-icons/Ionicons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';
import newStyles from '../../screens/Logistics/Styles/Styles';


const Loader = () => {


    const theme = useTheme()
    const styles = newStyles(theme);

    return (
                <View style={[styles.loader, styles.alignCenter]}>
                <View style={[styles.b32, styles.p8, styles.alignCenter, styles.shadow, styles.bgWhiteDark, styles.opacity09, {}]}>
                    <ActivityIndicator color={theme.dark ? '#fff' : '#343434'} size={'small'} />
                </View>
            </View>
    )
}


export default Loader;