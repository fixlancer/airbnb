import { StyleSheet, Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7E178E',
    width: '100%',
    height: height,
    flex: 1,
    //#7E178E
  },

  header: {
    height: 'auto',
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    // borderBottomColor:'#ddd',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },


  headerLineBottom: {
    borderBottomColor: '#ddd',
    paddingVertical: 0,
    marginBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  lineBottom: {
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },


  newModalHeader: {
    width: '100%', height: 'auto', paddingTop: 20, paddingBottom: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: '#7E178E',
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

  bgCurve: {
    width: '100%', height: 15, borderTopLeftRadius: 30, borderTopRightRadius: 30,
  },

  
  
  /**** PHOTO   */

  photoBg: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom:50,
  },

  photoAttach: {
    alignSelf: 'center', 
    alignItems:'center',
    flexDirection: 'row', justifyContent: 'center',
    backgroundColor: '#f9f9f9', 
    height: 70,
    width: '100%', marginHorizontal: 15,
    borderRadius: 15, marginBottom: 0, borderWidth: StyleSheet.hairlineWidth, 
    borderColor: '#ddd', borderStyle: 'dashed',
  },

  photoImg: {
    borderRadius: 8, backgroundColor: '#f2f2f2',
    width: (width - 40) / 2,
    height: (width - 40) / 2,
    alignItems:'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  attachMore: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    paddingVertical:8,
    paddingHorizontal:10,
    bottom: 10,
    justifyContent:'center',
    alignSelf:'center',
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius:20, 
  },

  deleteBg: {
    position:'absolute',top:10, borderRadius:6, 
    padding:5, right:5, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //  backgroundColor:'#fbd2d0'
  },

  mainBg: {
    position:'absolute',bottom:5, borderRadius:8, 
    padding:5, width:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //  backgroundColor:'#fbd2d0'
  },

  
  photoLabel: {
    fontSize: moderateScale(10),
    textAlign: 'left',
    color: '#808080',
    marginTop: 2,
    marginBottom: 2,
    fontFamily: 'Nunito-Regular',
  },

  /* END OF PHOTO  */


  midBg: {
    paddngTop: 0,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },


  Row: {
    flexDirection: 'row',
  },

  RowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  bgWhite: {
    backgroundColor: '#fff',
  },

  bgGrey: {
    backgroundColor: '#f2f2f2',
  },


  alignCenter: {
    justifyContent: 'center', alignItems: 'center'
  },

  textCenter: {
    textAlign: 'center',
  },

  textRight: {
    textAlign: 'right',
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

  textGreen: {
    color: '#1cc88a',
  },

  textPurple: {
    color: '#7E178E'
  },

  /*PADDING & MARGN **/

  mb40: {
    marginBottom: 40,
  },

  mb30: {
    marginBottom: 30,
  },

  mb20: {
    marginBottom: 20,
  },
  mb15: {
    marginBottom: 15,
  },

  mb10: {
    marginBottom: 10,
  },

  mb5: {
    marginBottom: 5,
  },

  mt5: {
    marginTop:5,
  },

  mr10: {
    marginRight: 10
  },

  mr5: {
    marginRight: 5
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
  ph5: {
    paddingHorizontal:5,
  },

  pt10: {
    paddingTop: 10,
  },

  pt15: {
    paddingTop: 15,
  },

  pt20: {
    paddingTop: 20,
  },

  pl15: {
    paddingLeft: 15,
  },

  pl10: {
    paddingLeft: 10,
  },

  pl5: {
    paddingLeft: 5,
  },

  /* END OF PADDING **/




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
    fontFamily: 'Nunito-SemiBold',
    textDecorationLine: 'underline',
  },

  noLabel: {
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: '#808080',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'line-through'
  },

  mediumLabel: {
    fontSize: moderateScale(12),
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
    width: (width - 65) / 1,
  },


  tinyDark: {
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
    width: (width - 65) / 1,
  },


  /** END OF TEXT LABEL */


  circleLabel: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
  },

  circlePlus: {
    width: moderateScale(30),
    height: moderateScale(30),
    padding: 0,
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#808080',
  },

  circlePlus2: {
    width: moderateScale(27),
    height: moderateScale(27),
    padding: 0,
    marginHorizontal: 1,
    justifyContent: 'center',   
    alignItems:'center',
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#808080',
  },



  circlePlus2Color: {
    width: moderateScale(27),
    height: moderateScale(27),
    padding: 0,
    marginHorizontal: 1,
    justifyContent: 'center',
    borderRadius: 100,
  //  borderWidth: StyleSheet.hairlineWidth,
  //  borderColor: '#7E178E',
    backgroundColor:'#7E178E'
  },



  calBg: {
    width: 'auto', height: 'auto', marginRight: 8, backgroundColor: '#8a8a8a', borderRadius: 30, paddingVertical: 5, paddingHorizontal: 6,
  },

  calBg2: {
    width: 'auto', height: 'auto', marginRight: 8, backgroundColor: '#343434', borderRadius: 30, paddingVertical: 5, paddingHorizontal: 6,
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

  dropCustom: {
    marginTop: -4, width: 90, height: 'auto', padding: 5, borderRadius: 10, borderWidth: 1, borderColor: '#ddd'
  },

  dropBg: {
    position: 'absolute', borderRadius: 10, backgroundColor: '#fff',
    width: 150, height: 'auto', right: 0, zIndex: 999, borderWidth: 1, borderColor: '#ddd'
  },

  priceForm: {
    width: 'auto',
    minWidth: 150,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    padding: 0,
    height: 60,
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

  drop2: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginTop: 0,
    marginBottom: 10,
  },

  drop3: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    paddingHorizontal: 15,
    height: 'auto',
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

  hr: {
    borderBottomColor: '#ddd', borderBottomWidth: StyleSheet.hairlineWidth
  },

  progressBar: {
    height: 2,
    backgroundColor: '#7E178E',
    position: 'absolute',
    top: -1,
    left: 0,
    zIndex: 999,
    maxWidth: '100%',
  },

  bottomBar: {
    backgroundColor: '#fff',
    // paddingBottom: Platform.OS === 'ios' ? 40 : 10,
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
    height: Platform.OS === 'ios' ? moderateScale(100) : moderateScale(65)
  },

  button: {
    backgroundColor: '#7E178E',
    // borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    marginRight: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#7E178E',
    // borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  buttonLabel: {
    fontSize: moderateScale(12),
    color: '#fff',
    textAlign: 'center',
  },

  btn: {
    backgroundColor: '#fff', borderRadius: 10, padding: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#343434',
    width: 180,
  },

    
  loader: {
    backgroundColor: '#000', height: 50, justifyContent: 'center', 
    alignItems: 'center', width: 50, 
    padding: 10, 
    borderRadius: 10, elevation: 2,
  },

});


export default styles;
