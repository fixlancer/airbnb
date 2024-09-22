import { StyleSheet, Dimensions, Platform } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    height: height,
    flex: 1,
  },


  header: {
    height: 'auto',
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: '#fff',
    //    backgroundColor:'#7E178E',
    //  borderBottomColor:'#ddd',
    //  borderBottomWidth: StyleSheet.hairlineWidth,
  },

  newModalHeader: {
    width: '100%', height: 'auto', paddingTop: 20, paddingBottom: 10, marginBottom: 10, paddingHorizontal: 15,
  },

  modalHeader: {

    paddingHorizontal: 15, paddingTop: 20, paddingBottom: 15,
    marginBottom: 10,
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

  midBg: {
    paddngTop: 0, flex: 1,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#f9f9f9',
  },

  Row: {
    flexDirection: 'row',
  },

  RowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  lineBottom: {
    borderBottomColor: '#ddd',
    paddingVertical: 0,
    //  marginBottom:15,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  alignCenter: {
    justifyContent: 'center', alignItems: 'center'
  },

  bgWhite: {
    backgroundColor: '#fff',
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
    color: '#7E178E',
  },


  /* *** CHAT DESIGN  */

  imgArea: {
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center', marginRight: 5
  },

  SendArea: {
    height: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    paddingBottom: Platform.OS == 'ios' ? 40 : 10,
    width: '100%',
  },

  ActionArea: {
    height: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    width: '100%',
  },

  ActionArea2: {
    height: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    width: '100%',
  },

  uploadArea: {
    flexDirection: 'row', marginBottom: 20, marginLeft: 15, height: 'auto'
  },

  Video: {
    width: 60,
    height: 60,
    marginRight: 0,
    borderRadius: 4, borderWidth: StyleSheet.hairlineWidth, borderColor: '#ddd',
    backgroundColor: '#f2f2f2'
  },
  file: {
    width: 100,
    height: 100,
    marginRight: 0,
    padding: 5,
    borderRadius: 4, borderWidth: StyleSheet.hairlineWidth, borderColor: '#ddd',
    backgroundColor: '#f2f2f2',
  },
  file11: {
    width: 200,
    height: 200,
    marginLeft: 5,
    padding: 5,
    borderRadius: 4, borderWidth: StyleSheet.hairlineWidth, borderColor: '#ddd',
    backgroundColor: '#f2f2f2',
  },
  img1: {
    width: moderateScale(50),
    height: moderateScale(40),
    marginRight: 0,
    borderRadius: 5,
  },


  img: {
    width: 100,
    height: 100,
    marginRight: 0,
    borderRadius: 4,
  },
  img11: {
    width: 200,
    height: 200,
    marginLeft: 5,
    borderRadius: 4,
  },

  tabBG: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd',
  },


  maintabConatiner: {
    paddingHorizontal: 2,
    width: moderateScale(210),
    height: moderateScale(30),
    backgroundColor: '#ddd',
    borderRadius: 8.91,
    marginVertical: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    height: moderateScale(25),
    width: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6.93,
  },
  tabContainerActive: {
    height: moderateScale(25),
    width: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6.93,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },


  /*
  jt1: {
    justifyContent:'flex-start',
    flexDirection:'row',
    flex:1,
  },
  
  jt2: {
    flexDirection:'row',
justifyContent:'flex-end',
  flex:1,
  },

otherUserBubble: {
//  borderTopLeftRadius: 10,
//  borderTopRightRadius:10,
//  borderBottomRightRadius:10,
borderRadius:12,
  height:'auto',
  minWidth:100,
  maxWidth:'74%',
  paddingHorizontal:5,
  paddingTop:3,
  marginTop:5,
  alignSelf:'flex-start',
//  marginRight:'25%',
  backgroundColor:'#fff',
  borderWidth:StyleSheet.hairlineWidth, borderColor:'#ddd'
  },
  
currentUserBubble: {
//    borderTopLeftRadius: 10,
//    borderTopRightRadius:10,
//    borderBottomLeftRadius:10,
borderRadius:12,
    height:'auto',
    minWidth:100,
    maxWidth:'74%',
    paddingHorizontal:5,
    paddingTop:3,
    marginTop:5,
 //   marginLeft:'25%',
    backgroundColor: '#7E178E', 
    borderWidth:StyleSheet.hairlineWidth, borderColor:'#7E178E'
    },
*/

  messageBubble: {
    borderRadius: 10,
    height: 'auto',
    minWidth: 70,
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 1,
    maxWidth: '80%',
  },
  currentUserBubble: {
    backgroundColor: '#7E178E',
    alignSelf: 'flex-end',
  },
  otherUserBubble: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f2f2f2',
  },

  ChatText: {
    textAlign: 'left', color: '#fff', fontSize: 13, paddingBottom: 14,
    paddingHorizontal: 3, height: 'auto', width: 'auto',
    fontFamily: 'Nunito-Regular',
  },


  leftChat: {
    textAlign: 'left', fontSize: moderateScale(8), color: '#808080', paddingRight: 5, paddingTop: 9,
  },

  rightChat: {
    textAlign: 'right', fontSize: moderateScale(8), color: '#919191', paddingRight: 5, paddingTop: 9,
  },

  groupedBubble: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },

  lastBubble: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 10,
    marginBottom: 10,
  },

  firstBubble: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 2,
  },

  lastBubble2: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 10,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  firstBubble2: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 2,
  },

  dateBubble: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    opacity: 0.8,
  },

  dateLabel: {
    fontSize: moderateScale(11),
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Nunito-Regular',
  },


  /**** END CHAT DESIGN    */

  mb40: {
    marginBottom: 40,
    width: '100%',
  },

  mb30: {
    marginBottom: 30,
    width: '100%',
  },

  mb25: {
    marginBottom: 25,
    width: '100%',
  },

  mb20: {
    marginBottom: 20,
    width: '100%',
  },

  mb15: {
    marginBottom: 15,
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

  ph15: {
    paddingHorizontal: 15
  },

  pt30: {
    paddingTop: 30,
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

  pb5: {
    paddingBottom: 5,
  },

  bgFilter: {
    height: 'auto',
    padding: 5,
    marginRight: 10,
    width: 'auto',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth, alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    marginVertical: 5,
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
    marginTop: -2,
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


  moreLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#7E178E',
    marginTop: 5,
    fontFamily: 'Nunito-SemiBold',
    textDecorationLine: 'underline',
  },

  titleLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    marginBottom: 0,
    fontFamily: 'Nunito-SemiBold',
  },

  subLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    marginTop: 1,
    fontFamily: 'Nunito-Regular'
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

  thinLabel: {
    fontSize: moderateScale(8),
    textAlign: 'left',
    color: '#808080',
    marginTop: 2,
    marginBottom: 5,
    fontFamily: 'Nunito-Regular',
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

  text: {
    padding: 2, paddingLeft: 5, borderRadius: 5, color: '#343434',
    width: '70%', minHeight: moderateScale(30), borderWidth: StyleSheet.hairlineWidth, borderColor: '#ddd',
    fontSize: moderateScale(12), marginHorizontal: 0, maxHeight: moderateScale(100),
    fontFamily: 'Nunito-Regular',
  },



  bottomBar: {
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'ios' ? 40 : 15,
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  button: {
    backgroundColor: '#7E178E',
    //borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#7E178E',
    //    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  buttonWhite: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
    borderColor: '#ddd', 
    borderWidth: StyleSheet.hairlineWidth,
  },

  buttonLabel: {
    fontSize: moderateScale(12),
    color: '#fff',
    textAlign: 'center',
  },

  mainText: {
    color: '#343434',
    alignSelf: 'center',
    padding: 8,
    paddingLeft: 5,
    fontSize: moderateScale(12),
    width: '100%'
  },

  loaderFlex: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },

  loaderMiddle: {
    backgroundColor: '#343434', height: 50, justifyContent: 'center',
    alignItems: 'center', width: 50, padding: 10, borderRadius: 10, elevation: 2,
  },

  circleBg: {
    width: moderateScale(60),
    height: moderateScale(60),
    padding: 0,
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#343434',
  },

  sendBtn: {
    backgroundColor: '#1cc88a', borderRadius: 30, width: 30, height: 30,
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

  textArea: {
    color: '#343434',
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 0,
    fontSize: moderateScale(13),
    fontFamily: 'Nunito-Regular',
    width: '100%'
  },

});



export default styles;
