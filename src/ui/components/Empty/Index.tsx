import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Platform,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import IconM from 'react-native-vector-icons/Ionicons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';
import styles from './Styles';


const Empty = () => {


    const theme = useTheme()
 //   const styles = newStyles(theme);

    return (

        <View style={{flex:1}}>
            <View style={[styles.alignCenter, styles.pv20, { height:'100%', width:'100%' }]}>

            <IconM
                            name={'folder-open-outline'}
                            size={moderateScale(40)}
                            color={theme.dark ? '#fff' : '#222'}
                            style={{ alignSelf: 'center' }}
                        />
                    <Text style={[styles.textDark, styles.fontSize12, styles.fontLight, styles.pt8, styles.textCenter]}>No data found</Text>

            </View>

        </View>

    )
}


export default Empty;