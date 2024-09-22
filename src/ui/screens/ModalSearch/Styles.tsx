import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {scale, moderateScale, verticalScale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    height: height,
    flex:1,
    },

  artwork: {
  width: (width - 100) / 1,
  height: (width - 120) / 1,
  borderRadius: 20,
  marginTop:10,
  justifyContent:'center',
  alignSelf:'center'
  },

  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  midBg: {

    paddingTop: 0, flex: 1,
    paddingHorizontal: 0, width: '100%', height: '100%', 
    backgroundColor: '#fff',
  },

  

  bgGrey: {
    backgroundColor:'#F4F4F6',
    paddingHorizontal:10,
    height:50,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'center',
  },

  bgIcon: {
backgroundColor:'#EBEAEC',
width:30,
marginTop:8,
borderRadius:30,
marginLeft:2,
height:30, justifyContent:'center',alignItems:'center',
  },


  modalHeader: {
    justifyContent:'center', alignItems:'center',  width:'100%', height:'auto', paddingBottom:10, marginBottom:10
  },

  
  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:10, marginBottom:15, alignSelf:'center'
  },

  largeLabel: {
    fontSize: moderateScale(17),
    textAlign:'left',
    color:'#343434',
    marginBottom:15,
    fontFamily: 'Nunito-SemiBold',
  },

  largeLabel2: {
    fontSize: moderateScale(15),
    textAlign:'left',
    color:'#343434',
    marginBottom:10,
    fontFamily: 'Nunito-SemiBold',
  },

  dLabel: {
    fontSize: moderateScale(12),
    textAlign:'left',
    color:'#343434',
    marginBottom:0,
    fontFamily: 'Nunito-SemiBold',
  },

  titleLabel: {
    fontSize: moderateScale(13),
    textAlign:'left',
    color:'#343434',
    marginBottom:10,
    fontFamily: 'Nunito-SemiBold',
  },

  subLabel: {    
    fontSize: moderateScale(13),
    textAlign:'left',
    color:'#343434',
    fontFamily: 'Nunito-Regular'
  },

/*** MARGIN & PADDING */

  mb40: {
      marginBottom:40,
      width:'100%',
  },

  mb30: {
    marginBottom:30,
    width:'100%',
},

  mb20: {
    marginBottom:20,
    width:'100%',
},

  mb10: {
      marginBottom:10,
      width:'100%',
  },

  pt10: {
      paddingTop:10,
  },

  pt15: {
    paddingTop:15,
  },

  ph15: {
      paddingHorizontal:15
  },

  pl15: {
      paddingLeft:15,
  },

  pb20: {
paddingBottom:20,
  },

  /*** END OF MARGIN & PADDING */


  resultItem: {
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:33,
      flexDirection:'row',
  },

  bottomBar: {
      backgroundColor:'#fff',
      paddingBottom: Platform.OS === 'ios' ? 40 : 15,
    borderTopColor:'#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  button: {
    backgroundColor: '#7E178E',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:10,
    marginTop:0,
    width:'auto',
    marginRight:10,
    paddingVertical:10,
    paddingHorizontal:20,
    height:'auto',
    justifyContent:'center',alignItems:'center',
      },
    
      submitButton: {
        backgroundColor: '#7E178E',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius:10,
        marginTop:0,
        width:'auto',
        paddingVertical:10,
        paddingHorizontal:15,
        height:'auto',
        justifyContent:'center',alignItems:'center',
          },

      buttonLabel: {
        fontSize: moderateScale(12),
        color:'#fff',
        textAlign:'center',
      },

      drop: {
        width:'100%',
        borderWidth: StyleSheet.hairlineWidth, 
        borderColor: '#ddd',
        borderRadius:10,alignItems:'center',
        paddingHorizontal:15,
        height:45,
        marginTop:5,
        marginBottom:20,
      },
    
      text: {
        color:'#343434',
        alignSelf:'center',
        padding:10,
        paddingLeft:15,
        fontSize: moderateScale(12),
        width:'100%'
      },

      mainText: {
        color:'#343434',
        alignSelf:'center',
        padding:8,
        paddingLeft:15,
        fontSize: moderateScale(12),
        width:'100%'
      },
});

export default styles;
