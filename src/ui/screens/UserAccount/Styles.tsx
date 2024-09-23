import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height,
        flex:1,
        },
    
        header: {
          height:'auto',
          marginBottom:20,
          paddingTop:15,
          flexDirection:'row',
          paddingHorizontal:15,
          justifyContent:'space-between'
        },

    Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  
  signinBG: {
    width: '100%',
    height: 320,
    position:'absolute',
//    borderRadius:20,
    top:0,
    zIndex:-2,
    left:0,right:0,
// marginVertical:20,

    },

  accountBG: {
    width: '100%',
    height: 333,
    position:'absolute',
    top:0,
    zIndex:-2,
    left:0,right:0,
    },

    
  talent: {
    width: 146,
    height: 220,
    position:'absolute',
    top:0,
    zIndex:-1,
    left:0,
    },

    listener: {
        width: 146,
        height: 221,
        position:'absolute',
        top:0,
        zIndex:-1,
        right:0,
        },

    billingBG: {
        marginTop:10, padding:8, borderRadius:10, borderColor:'#f27415', borderWidth: StyleSheet.hairlineWidth
    },

  midBg: {
    paddingTop: 0, flex: 1,
    paddingHorizontal: RFValue(15), width: '100%', height: '100%',
    backgroundColor: 'transparent',paddingBottom: Platform.OS === 'ios' ? 45 : 20,
  },

  loginBg: {
    marginTop: 10, flex: 1,
    paddingHorizontal: 30, width: '100%', height: '100%',
    paddingTop:20,borderTopLeftRadius:30,borderTopRightRadius:30,
    backgroundColor: '#16191e',
  },

  scrollBg: {
    height:'100%', width:'100%', flex:1, backgroundColor: '#16191e',borderTopLeftRadius:30,borderTopRightRadius:30,
  },

  titleLabel: {
    fontSize: RFValue(16),
    textAlign:'left',
    marginBottom:5,
    color:'#343434',
    fontFamily: 'Hestina',
  },

  tinyLabel: {
    fontSize: RFValue(11),
    textAlign:'left',
    color:'#808080',
    paddingLeft:0,
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#343434',
    paddingLeft:0,
  },

  errorBg: {
      backgroundColor:'transparent',
      borderRadius:10,
      borderWidth:1,
      justifyContent:'center',alignSelf:'center',
      alignItems:'center',
      borderColor:'#ff0000',
      marginTop:10,
paddingVertical:10,
paddingHorizontal:15,
width:'auto',
height:'auto',
  },

  errorLabel : {
textAlign:'center', color:'#ff0000',
fontSize: RFValue(12)
  },

  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  button: {
    backgroundColor: '#343434',
    borderRadius:10,
    marginTop:0,
    width:'auto',
    paddingVertical:10,
    paddingHorizontal:15,
    height:'auto',
    justifyContent:'center',alignItems:'center',
      },
    
      buttonLabel: {
        fontSize: RFValue(12),
        color:'#fff',
        textAlign:'center',
      },

      drop: {
        width:'100%',
        borderWidth: StyleSheet.hairlineWidth, 
        borderColor: '#808080',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        height:'auto',
        marginTop:5,
        marginBottom:20,
      },
    
      text: {
        color:'#fff',
        alignSelf:'center',
        padding:10,
        paddingLeft:15,
        fontSize: RFValue(12),
        width:'100%'
      },

});

export default styles;
