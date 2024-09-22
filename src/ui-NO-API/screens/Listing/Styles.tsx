import { StyleSheet, Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',
    height: height,
    flex: 1,
  },

  header: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
    paddingBottom:10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    // borderBottomColor:'#ddd',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },

  header2: {
    height: 'auto',
    width: '100%',
    paddingTop: 10,
    paddingBottom:10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    // borderBottomColor:'#ddd',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },

  lineBottom: {
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },


  newModalHeader: {
    width: '100%', height: 'auto', paddingTop: 20, paddingBottom: 10, marginBottom: 10, paddingHorizontal: 15,
  },

  modalHeader: {
    justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', paddingBottom: 10, marginBottom: 10
  },

  modalHeader2: {
    paddingHorizontal: 15, paddingTop: 20, paddingBottom: 0,
  },


  modalLine: {
    height: 4, width: 30, borderRadius: 8, backgroundColor: '#ddd', marginTop: 10, marginBottom: 15, alignSelf: 'center'
  },


  bgScroll: {
    width: '100%', height: '100%', backgroundColor: '#fff',
    //  borderTopLeftRadius:30, borderTopRightRadius: 30,

  },

  bgStraight: {
    width: '100%', 
  //  height: 15,
   // borderTopColor: '#ddd',
   // borderTopWidth: StyleSheet.hairlineWidth,
  },

  bgCurve: {
    width: '100%', height: 15, backgroundColor:'#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30,
  },

  midBg: {
    paddngTop: 0,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },

  img: {
    width: '100%',
    height: moderateScale(300),
    position: 'absolute',
    top: 0,
    zIndex: -1,
    left: 0, right: 0,
  },

  imgs: {
    width: moderateScale(70),
    height: moderateScale(70),
    marginRight: 4,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
  },

  bgOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: 40,
    paddingHorizontal: 0,
    height: moderateScale(30),
    width: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },

  bgLay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 0,
    borderRadius: 40,
    height: moderateScale(30),
    width: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },

  Row: {
    flexDirection: 'row',
  },

  RowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bgOver: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  bgItem: {
    height: 'auto',
    paddingVertical: 10,
    marginRight: 0,
    width: 'auto',
    paddingHorizontal: 10,
    justifyContent: 'center',
    // borderRightWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    // borderRightColor:'#ddd',
    borderRadius: 0,
  },

  alignCenter: {
    justifyContent: 'center', alignItems: 'center'
  },


  textCenter: {
    textAlign: 'center',
  },

  textWhite: {
    color: '#fff',
  },

  textDark: {
    color: '#343434'
  },

  textGrey: {
    color: '#808080',
  },

  textPurple: {
    color: '#7E178E'
  },


  /*PADDING & MARGN **/

  mb40: {
    marginBottom: 40,
    width: '100%',
  },

  mb30: {
    marginBottom: 30,
    width: '100%',
  },

  mb20: {
    marginBottom: 20,
    width: '100%',
  },

  mb10: {
    marginBottom: 10,
    width: '100%',
  },
  mb5: {
    marginBottom: 5,
  },
  pt15: {
    paddingTop: 15,
  },

  newPH: {
    width: width - 68
  },

  pt30: {
    paddingTop: 30,
  },

  pt5: {
    paddingTop: 5
  },
  pb5: {
    paddingBottom: 5,
  },
  ph15: {
    paddingHorizontal: 15
  },
  pt10: {
    paddingTop: 10,
  },

  pl15: {
    paddingLeft: 15,
  },

  pl10: {
    paddingLeft: 10,
  },

  /* END OF PADDING **/

  reviewBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    paddingVertical: 10,
  },

  bb: {
    marginBottom: 0,
    paddingVertical: 30,
    borderBottomColor: '#f5f4f3',
    borderBottomWidth: 5,
  },

  bb2: {
    marginBottom: 0,
    paddingVertical: 30,
    borderBottomColor: '#f5f4f3',
    borderBottomWidth: 5,
    backgroundColor: '#f9f9f9'
  },

  bgDark: {
    backgroundColor: '#343434',
    width: '100%',
    paddingVertical: 5,
    height: 'auto',
    minHeight: 50,
    marginBottom: -10,
  },


  /*** TEXT LABEL */

  extraLabel: {
    fontSize: moderateScale(20),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-SemiBold',
  },

  moreLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#7E178E',
    marginTop: 5,
    fontFamily: 'Nunito-SemiBold',
    textDecorationLine: 'underline',
  },

  noLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'line-through'
  },

  noLabel2: {
    fontSize: moderateScale(10),
    textAlign: 'left',
    color: '#d40b27',
    marginTop: 0,
    opacity:0.5,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'line-through'
  },


  mediumLabel: {
    fontSize: moderateScale(11),
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    color: '#343434'
  },


  largeLabel: {
    fontSize: moderateScale(17),
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    marginBottom: 0,
    fontFamily: 'Nunito-SemiBold',
  },

  largeLabel2: {
    fontSize: moderateScale(15),
    textAlign: 'left',
    color: '#343434',
    marginBottom: 15,
    fontFamily: 'Nunito-SemiBold',
  },

  userLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-SemiBold',
  },

  titleLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    marginBottom: 2,
    fontFamily: 'Nunito-SemiBold',
  },

  subLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    fontFamily: 'Nunito-Regular'
  },

  thinLabel: {
    fontSize: moderateScale(8),
    textAlign: 'left',
    color: '#808080',
    marginTop: 2,
    marginBottom: 5,
    fontFamily: 'Nunito-Regular',
  },

  tinyLabel: {
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: '#808080',
    marginTop: 2,
    marginBottom: 5,
    fontFamily: 'Nunito-Regular',
    width: (width - 60) / 1,
  },


  tinyDark: {
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
    width: (width - 60) / 1,
  },


  /** END OF TEXT LABEL */


  drop2: {
    width: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    paddingHorizontal: 5,
    height: 40,
    marginTop: 0,
    marginBottom: 0,
  },

  drop: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginTop: 0,
    marginBottom: 10,
  },

  text: {
    color: '#343434',
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 0,
    fontSize: moderateScale(13),
    fontFamily: 'Nunito-Regular',
    width: '100%'
  },


  emptyCont: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 3,
    paddingHorizontal: 9,
    paddingVertical: 10,
    elevation: 0,
  },
  cont: {
    height: 'auto',
    width: '100%',
    marginVertical: 1.5,
    paddingHorizontal: 6,
  },


  bottomBar: {
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'ios' ? 40 : 15,
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  button: {
    backgroundColor: '#7E178E',
 //   borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: moderateScale(40),
    justifyContent: 'center', alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#7E178E',
  //  borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: moderateScale(40),
    justifyContent: 'center', alignItems: 'center',
  },

  buttonLabel: {
    fontSize: moderateScale(12),
    color: '#fff',
    textAlign: 'center',
  },

  
  loader: {
    backgroundColor: '#000', height: 50, justifyContent: 'center', 
    alignItems: 'center', width: 50, 
    padding: 10, 
    borderRadius: 10, elevation: 2,
  },
});



export default styles;
