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

interface Props {
text: any;
}

const EmptyCustom: React.FC<Props> = props => {

    const {text} = props;

 //   const theme = useTheme()
 //   const styles = newStyles(theme);

    return (

        <View style={{flex:1}}>
            <View style={[styles.alignCenter, styles.pv20, { height:'100%', width:'100%' }]}>

            <IconM
                            name={'folder-open-outline'}
                            size={moderateScale(40)}
                            color={'#222'}
                            style={{ alignSelf: 'center' }}
                        />
                    <Text style={[styles.textDark, styles.fontSize12, styles.fontLight, styles.ph16, styles.pt8, styles.textCenter]}>{text}</Text>

            </View>

        </View>

    )
}


export default EmptyCustom;