import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import MyText from '../DefaultTextComponent/MyText';
import newStyles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

interface Props {
    route: any;
    headerTitle: any;
}


const HeaderLineClose: React.FC<Props> = props => {
    const { route, headerTitle } = props;

    const theme = useTheme()
    const styles = newStyles(theme);

    return (
        <>
            <View style={[styles.newModalHeader, styles.ph16, styles.RowB]}>
                <TouchableOpacity
                    onPress={route}
                    //style={[styles.b30, styles.alignCenter, styles.bgWhite, styles.borderDark, styles.mt10, {width: moderateScale(30), height : moderateScale(30)}]}>
                    style={[styles.mt8]}>
                    <IconM
                        name={'close'}
                        size={moderateScale(17)}
                        color={theme.dark ? '#fff' : '#222'}
                        style={{}} />

                </TouchableOpacity>

                <Text style={[styles.largeLabel, styles.fontSemi, styles.fontSize14, styles.textDark, styles.mt8]}>{headerTitle}</Text>
                <Text style={[styles.pl12]}></Text>
            </View>

            <View style={[styles.lineDark]} />
        </>

    );
};


export default HeaderLineClose;