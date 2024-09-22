import {StyleSheet, Dimensions} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
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
    paddingBottom:10,
    marginBottom:10,
    width:'100%',justifyContent:'center',alignItems:'center',
    paddingHorizontal:0,
  //  backgroundColor:'transparent',
  //  borderBottomColor:'#ddd',
  //  borderBottomWidth: StyleSheet.hairlineWidth,
  },

  header2: {
    height:90,
    width:'100%',
    top:-30,
    paddingTop:50,
    paddingHorizontal:0,
    backgroundColor:'#7E178E', //#45074F
  //  border: 0,
  //  borderBottomColor:'#ddd',
  //  borderBottomWidth: StyleSheet.hairlineWidth,
  },

  accountBG: {
    width: '100%',
    height: 300,
    position:'absolute',
    top:0,
    zIndex:-2,
    left:0,right:0,
    },


  image: {
    resizeMode: 'contain',
    width: moderateScale(170),
    height: moderateScale(60),
    marginTop: moderateScale(25),
    marginBottom: moderateScale(25)
  },

  bgSearch: {
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:'#F4DBF8',
    padding:8,
    paddingHorizontal:15,
    borderRadius:20,
   // marginRight: 15,
    width:'90%'
  },

  img: {
    width: (width - 60) / 2,
    height: moderateScale(150),
    borderRadius: 20,
    marginRight:10,
    justifyContent: 'flex-start',
    alignSelf:'flex-start',
    marginBottom:10,
    },


  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  opacityBg: {
    position: 'absolute',
    width: 171,
    height: 'auto',
    paddingVertical:10,
    left: 5,
    bottom: 5,
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
  },

  modal: {
    height: 'auto',
    width:'100%',
    paddingHorizontal:15,
    paddingVertical:moderateScale(20),
    position:'absolute',
    bottom:0,
    backgroundColor:'#fff',
    borderTopLeftRadius:20, borderTopRightRadius:20,
    borderTopColor: '#7E178E', borderTopWidth:0,
    borderBottomColor:'#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  bgGrey: {
    backgroundColor:'#F4F4F6',
    paddingHorizontal:15,
    height:50,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'center',
  },

  bgIcon: {
backgroundColor:'#EBEAEC',
width:30,
borderRadius:30,
height:30, justifyContent:'center',alignItems:'center',
  },

  textLeft: {
    textAlign:'left',
  },

  textCenter: {
    textAlign:'center',
  },

  textDark: {
    color: '#343434'
  },

  pt20: {
    paddingTop:moderateScale(20)
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

pl10: {
  paddingLeft: 10,
},

mediumLabel: {
  fontSize: moderateScale(9),
  textAlign:'center',
  paddingTop:0,
  paddingLeft:0,
  fontFamily: 'Nunito-Regular',
  color:'#fff'
},

titleLabel2: {
  fontSize: moderateScale(15),
  textAlign:'left',
  paddingLeft:10,
  fontFamily: 'Nunito-SemiBold',
  color:'#fff'
},

  subLabel: {
    fontSize: moderateScale(13),
    textAlign:'left',
    paddingLeft:10,
    color:'#fff'
  },


  emptyCont: {
      height: 'auto',
      width:'100%',
      backgroundColor:'transparent',
      borderRadius:8,
      marginVertical:3,
      paddingHorizontal:9,
      paddingVertical:10,
      elevation:0,
  },
  cont: {
    height: 'auto',
    width:'100%',
    marginVertical:1.5,
    paddingHorizontal:6,
},

dropDown: {
  backgroundColor: '#fff',
  height: 'auto',
  width: '100%',
  paddingHorizontal: 0,
  marginBottom: 10,
  paddingVertical: 0,
  borderRadius: 10,
  borderColor: '#ddd',
  borderWidth: StyleSheet.hairlineWidth,
  alignSelf: 'center',
},
dropDownBtn: {
  width: '100%',
  height: 45, backgroundColor: 'transparent',
},
rowStyle: {
  backgroundColor: '#f9f9f9', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd', width: '100%'
},
btnText: {
  textAlign: 'left',
  fontSize: moderateScale(13),
  color: '#343434',
  fontFamily: 'Nunito-Regular',
},
});

export default styles;
