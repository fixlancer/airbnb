import { StyleSheet, Dimensions, Platform } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const newStyles = (theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.dark ? '#160622' : '#fff',
      width: '100%',
      height: height,
      flex: 1,
      //#6510A4
    },

    header: {
      height: 'auto',
      width: '100%',
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: 'transparent',
      // borderBottomColor:'#ddd',
      // borderBottomWidth: StyleSheet.hairlineWidth,
    },


    accountBG: {
      width: '100%',
      height: 300,
      position: 'absolute',
      top: 0,
      zIndex: -2,
      left: 0, right: 0,
    },

    headerBG: {
      width: '100%',
      height: moderateScale(140),
      position: 'absolute',
      top: 0,
      zIndex: -1,
      left: 0, right: 0,
    },

    logoImg: {
      width: moderateScale(150),
      height: moderateScale(40),
    },

    newModalHeader: {
      width: '100%', height: 'auto', paddingTop: 10, paddingBottom: 0, marginBottom: 0, paddingHorizontal: 15,
    },

    modalHeader: {
      justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', paddingBottom: 10, marginBottom: 10
    },

    modalHeader2: {
      paddingHorizontal: 15, paddingTop: 20, paddingBottom: 0,
    },


    modalLine: {
      height: 4, width: 30, borderRadius: 8, backgroundColor: theme.dark ? '#fff' : '#ddd', marginBottom: 15, alignSelf: 'center'
    },


    /** BORDER LINES */

    borderWidthPurple: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#a45bda',
    },

    borderWidthLight: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.dark ? '#3b0861' : '#f2f2f2',
    },

    borderWidthDark: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.dark ? '#3b0861' : '#ddd',
    },


    borderDark: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.dark ? '#3b0861' : '#b0b0b0',
    },

    borderWidthRed: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#ff0000',
    },

    lineBottomLight: {
      borderBottomColor: theme.dark ? '#2d0c46' : '#f2f2f2',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },

    lineBottomDark: {
      borderBottomColor: theme.dark ? '#2d0c46' : '#ddd',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },


    lineBottomCatDark: {
      borderBottomColor: theme.dark ? '#fff' : '#222222',
      borderBottomWidth: 1.5,
    },

    lineTopLight: {
      borderTopColor: theme.dark ? '#3b0861' : '#f2f2f2',
      borderTopWidth: StyleSheet.hairlineWidth,
    },

    lineTopDark: {
      borderTopColor: theme.dark ? '#3b0861' : '#ddd',
      borderTopWidth: StyleSheet.hairlineWidth,
    },


    tabLine: {
      minWidth: '50%',
      justifyContent: 'center', alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'transparent',
    },

    tabLineAuto: {
      width: 'auto',
      justifyContent: 'center', alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'transparent',
      height: moderateScale(30),
    },

    flexWrap: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },


    bgScroll: {
      width: '100%', height: '100%', backgroundColor: '#fff',
      //  borderTopLeftRadius:30, borderTopRightRadius: 30,

    },

    bgCurve: {
      width: '100%', height: 15, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    },

    midBg: {
      width: '100%', height: '100%',
      backgroundColor: theme.dark ? '#160622' : '#fff',
    },

    midBgGrey: {
      width: '100%', height: '100%',
      backgroundColor: theme.dark ? '#160622' : '#F4F4F6',
      //240727
    },

    bgGrey: {
      backgroundColor: theme.dark ? '#2d0b47' : '#F4F4F6',
      //370a3d
    },

    bgGreen: {
      backgroundColor: '#1cc88a',
    },

    bgPurple: {
      backgroundColor: '#6510A4',
      //7E178E
    },

    bgPurpleFilter: {
      backgroundColor: theme.dark ? '#320b50' : '#f9f4fc',
    },

    bgPurpleDark: {
      backgroundColor: theme.dark ? '#200734' : '#fff',
    },

    bgLightGreen: {
      backgroundColor: '#d9e0df',
    },

    bgRed: {
      backgroundColor: '#ff0000',
    },

    bgWhiteAll: {
      backgroundColor: '#fff',
    },


    bgWhite: {
      backgroundColor: theme.dark ? '#160622' : '#fff',
    },

    bgLightGrey: {

      backgroundColor: theme.dark ? '#353535' : '#fafafa',
    },

    formWhite: {
      backgroundColor: theme.dark ? '#1c1c1c' : '#fff',
      height: 'auto',
      borderRadius: 10,
      width: '100%'
    },

    box: {
      //  borderWidth: StyleSheet.hairlineWidth,
      // borderColor:'#ddd',
      paddingHorizontal: moderateScale(15),
      paddingVertical: 10,
      backgroundColor: '#f2f4f8',
      width: '98%',
      height: 'auto',
      marginRight: 10,
      borderRadius: 10,
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

    Wrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    Row: {
      flexDirection: 'row',
    },

    RowB: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },


    textCenter: {
      textAlign: 'center',
    },


    textLeft: {
      textAlign: 'left',
    },

    textRight: {
      textAlign: 'right',
    },

    textWhite: {
      color: '#fff',
    },

    textDark: {
      color: theme.dark ? '#f1f1f1' : '#222222',
    },

    textDarkAll: {
      color: '#222222',
    },

    textGrey: {
      color: theme.dark ? '#c2c3c1' : '#717171',
    },

    textLightGrey: {
      color: theme.dark ? '#717171' : '#ddd',
    },

    textRed: {
      color: '#ff0000',
    },

    textGreen: {
      color: '#1cc88a',
    },

    textPurpleAll: {
      color: '#6810ac',
    },

    textPurple: {
      color: theme.dark ? '#fff' : '#6810ac',
    },

    alignCenter: {
      justifyContent: 'center', alignItems: 'center'
    },

    icon: {
      width: moderateScale(32), height: moderateScale(32), borderRadius: 32, justifyContent: 'center', alignItems: 'center',
    },

    round: {
      width: moderateScale(35), height: moderateScale(35), borderRadius: 30, justifyContent: 'center', alignItems: 'center',
    },

    roundSmall: {
      width: moderateScale(25), height: moderateScale(25), borderRadius: 25, justifyContent: 'center', alignItems: 'center',
    },

    roundBorder: {
      borderTopLeftRadius: 30, borderTopRightRadius: 30
    },

    roundBorderBottom: {
      borderBottomLeftRadius: 30, borderBottomRightRadius: 30
    },

    roundBorderTop: {
      borderTopLeftRadius: 30, borderTopRightRadius: 30
    },

    width35: {
      height: moderateScale(35), width: moderateScale(35)
    },

    width40: {
      height: moderateScale(40), width: moderateScale(40)
    },

    width45: {
      height: moderateScale(45), width: moderateScale(45)
    },

    shadow: Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 1.41,
      },
      android: {
        elevation: 1,
        shadowColor: '#808080'
      }
    }),

    round10: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#ddd',
      borderRadius: 8,
      justifyContent: 'center', alignItems: 'center',
      paddingVertical: 4,
    },

    /* BORDERS */

    b5: {
      borderRadius: 5,
    },
    b8: {
      borderRadius: 10,
    },

    b15: {
      borderRadius: 15,
    },

    b20: {
      borderRadius: 20,
    },
    b30: {
      borderRadius: 30,
    },




    /*PADDING & MARGN **/

    p20: {
      padding: 10
    },

    p15: {
      padding: 15
    },

    p10: {
      padding: 10
    },

    p5: {
      padding: 5
    },


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
    mt20: {
      marginTop: 20,
    },
    mt15: {
      marginTop: 15,
    },
    mt10: {
      marginTop: 10,
    },
    mt8: {
      marginTop: 8,
    },

    mt5: {
      marginTop: 5,
    },

    pt30: {
      paddingTop: 30,
    },

    pt20: {
      paddingTop: 20,
    },

    pt15: {
      paddingTop: 15,
    },

    pt10: {
      paddingTop: 10,
    },
    pt5: {
      paddingTop: 5,
    },
    pv15: {
      paddingVertical: 15,
    },
    pv10: {
      paddingVertical: 10,
    },
    pv5: {
      paddingVertical: 5,
    },


    newPH: {
      width: width - 68
    },

    pb30: {
      paddingBottom: 30,
    },

    pb20: {
      paddingBottom: 20,
    },

    pb15: {
      paddingBottom: 15,
    },

    pb10: {
      paddingBottom: 10,
    },

    pb5: {
      paddingBottom: 5,
    },

    pb2: {
      paddingBottom: 2,
    },

    ph40: {
      paddingHorizontal: 40
    },

    ph30: {
      paddingHorizontal: 30
    },

    ph20: {
      paddingHorizontal: 20
    },

    ph15: {
      paddingHorizontal: 15
    },

    ph10: {
      paddingHorizontal: 10
    },

    ph5: {
      paddingHorizontal: 5
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

    mr5: {
      marginRight: 5
    },

    mr10: {
      marginRight: 10
    },

    mr15: {
      marginRight: 15,
    },

    mr20: {
      marginRight: 20
    },

    mr30: {
      marginRight: 30,
    },


    /* END OF PADDING **/



    /*** TEXT LABEL */

    extraLabel: {
      fontSize: moderateScale(20),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-SemiBold',
    },

    
    largeLabel: {
      fontSize: moderateScale(17),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-SemiBold',
    },

    largeLabel2: {
      fontSize: moderateScale(15),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-SemiBold',
    },

    largeLabel3: {
      fontSize: moderateScale(14),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-Light',
    },

    priceLabel: {
      fontSize: moderateScale(12),
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-Light',
    },

    moreLabel: {
      fontSize: moderateScale(14),
      textAlign: 'left',
      color: '#6510A4',
      fontFamily: 'Nunito-SemiBold',
      textDecorationLine: 'underline',
    },

    lineLabel: {
      fontSize: moderateScale(13),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-SemiBold',
      textDecorationLine: 'underline',
    },

    noLabel: {
      fontSize: moderateScale(13),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-Light',
      textDecorationLine: 'line-through'
    },

    mediumLabel: {
      fontSize: moderateScale(13),
      textAlign: 'center',
      fontFamily: 'Nunito-Light',
      color: theme.dark ? '#fff' : '#222222',
    },


    userLabel: {
      fontSize: moderateScale(14),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-Light',
    },

    titleLabel: {
      fontSize: moderateScale(12),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-Light'
    },

    subLabel: {
      fontSize: moderateScale(14),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222',
      fontFamily: 'Nunito-Light'
    },

    thinLabel: {
      fontSize: moderateScale(8),
      textAlign: 'left',
      color: '#717171',
      fontFamily: 'Nunito-Regular',
    },

    tinyLabel: {
      fontSize: moderateScale(12),
      textAlign: 'left',
      color: theme.dark ? '#c2c3c1' : '#717171',
      // marginTop:2,
      //  marginBottom:5,
      fontFamily: 'Nunito-Light',
       width: (width - 60) / 1,
    },


    tinyDark: {
      fontSize: moderateScale(12),
      textAlign: 'left',
      color: theme.dark ? '#fff' : '#222222',
      fontFamily: 'Nunito-Light',
       width: (width - 60) / 1,
    },



    /*** END OF MARGIN & PADDING */

    /* FONT WEIGHT */
    fontRegular: {
      fontFamily: 'Nunito-Regular',
    },

    fontSemi: {
      fontFamily: 'Nunito-SemiBold',
    },

    fontLight: {
      fontFamily: 'Nunito-Light',
    },


    fontBold: {
      fontWeight: 'bold'
    },

    font100: {
      fontWeight: '100'
    },



    /** TEXT SIZE */


    fontSize8: {
      fontSize: moderateScale(8),
    },

    fontSize9: {
      fontSize: moderateScale(9),
    },

    fontSize10: {
      fontSize: moderateScale(10),
    },

    fontSize11: {
      fontSize: moderateScale(11),
    },

    fontSize12: {
      fontSize: moderateScale(12),
    },

    fontSize13: {
      fontSize: moderateScale(13),
    },

    fontSize14: {
      fontSize: moderateScale(14),
    },

    fontSize15: {
      fontSize: moderateScale(15),
    },

    fontSize16: {
      fontSize: moderateScale(16),
    },

    fontSize17: {
      fontSize: moderateScale(17),
    },
    fontSize18: {
      fontSize: moderateScale(18),
    },
    fontSize19: {
      fontSize: moderateScale(19),
    },
    fontSize20: {
      fontSize: moderateScale(20),
    },

    fontSize22: {
      fontSize: moderateScale(22),
    },

    fontSize23: {
      fontSize: moderateScale(23),
    },

    fontSize24: {
      fontSize: moderateScale(24),
    },

    fontSize25: {
      fontSize: moderateScale(25),
    },



    /** ABSOLUTE POSITION **/

    absolute: {
      position: 'absolute',
      zIndex: 99,
    },

    bottom5: {
      bottom: moderateScale(5),
    },

    bottom10: {
      bottom: moderateScale(10),
    },

    bottom15: {
      bottom: moderateScale(15),
    },

    bottom20: {
      bottom: moderateScale(20),
    },

    bottomIOS: {
      bottom: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(10),
    },

    top5: {
      top: moderateScale(5)
    },

    top10: {
      top: moderateScale(10)
    },

    top15: {
      top: moderateScale(15)
    },

    top20: {
      top: moderateScale(20)
    },

    left5: {
      left: moderateScale(5)
    },

    left10: {
      left: moderateScale(10)
    },

    left15: {
      left: moderateScale(15)
    },

    left20: {
      left: moderateScale(20)
    },

    left25: {
      left: moderateScale(25)
    },

    left30: {
      left: moderateScale(30)
    },



    right5: {
      right: moderateScale(5)
    },

    right10: {
      right: moderateScale(10)
    },

    right15: {
      right: moderateScale(15)
    },

    right20: {
      right: moderateScale(20)
    },

    right25: {
      right: moderateScale(25)
    },

    right30: {
      right: moderateScale(30)
    },


    /** OPACITY **/

    opacity05: {
      opacity: 0.5,
    },

    opacity06: {
      opacity: 0.6,
    },

    opacity07: {
      opacity: 0.7,
    },

    opacity08: {
      opacity: 0.8,
    },

    opacity09: {
      opacity: 0.9,
    },

    opacity1: {
      opacity: 1,
    },


    /** END OPACITY **/



    resultItem: {
      paddingTop: moderateScale(15),
      paddingBottom: moderateScale(15),
      paddingLeft: moderateScale(30),
      flexDirection: 'row',
    },

    loader: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },

    iosBar: {
      paddingBottom: Platform.OS === 'ios' ? 40 : 15,
    },

    iosBarNav: {
      paddingBottom: Platform.OS === 'ios' ? 100 : 70,
    },


    bottomBar: {
      backgroundColor: theme.dark ? '#160622' : '#fff',
      paddingBottom: Platform.OS === 'ios' ? 40 : 10,
      borderTopColor: theme.dark ? '#3b0861' : '#ddd',
      borderTopWidth: StyleSheet.hairlineWidth,
    },

    button: {
      backgroundColor: '#6510A4',
      borderWidth: StyleSheet.hairlineWidth,
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
      borderRadius: 15,
      marginTop: 0,
      width: 'auto',
      paddingVertical: 10,
      paddingHorizontal: 15,
      height: 'auto',
      justifyContent: 'center', alignItems: 'center',
    },

    buttonLabel: {
      fontSize: moderateScale(13),
      color: '#fff',
      fontFamily: 'Nunito-SemiBold',
      textAlign: 'center',
    },

    drop: {
      width: '100%',
      minHeight: moderateScale(40),
      fontFamily: 'Nunito-Regular',
    },

    text: {
      color: theme.dark ? '#fff' : '#222222',
      alignSelf: 'center',
      padding: 10,
      paddingLeft: 15,
      fontSize: moderateScale(12),
      fontFamily: 'Nunito-Regular',
      width: '100%'
    },
    shortDrop: {
      color: theme.dark ? '#fff' : '#222222',
      alignSelf: 'center',
      borderRadius: 10,
      height: moderateScale(45),
      paddingLeft: 15,
      width: moderateScale(170),
      fontFamily: 'Nunito-Regular',
    },
    mainText: {
      color: theme.dark ? '#fff' : '#222222',
      alignSelf: 'center',
      borderRadius: 10,
      height: moderateScale(45),
      paddingLeft: 15,
      fontSize: moderateScale(13),
      fontFamily: 'Nunito-Regular',
      width: '100%',
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
      borderColor: theme.dark ? '#535353' : '#222222',
    },


    emptyCont: {
      height: 'auto',
      width: '100%',
      backgroundColor: theme.dark ? '#000' : '#fff',
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




    notifBg: {
      position: 'absolute', zIndex: 999, top: 5, right: 5,
      paddingVertical: 3,
      borderRadius: 15, paddingHorizontal: 8, backgroundColor: '#d40b27'
    },

    stats: {
      position: 'absolute', left: 5, top: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingVertical: 3,
      paddingHorizontal: 7,
    },


    opacityBg: {
      position: 'absolute',
      width: 'auto',
      maxWidth: (width - 80) / 1,
      height: 'auto',
      paddingVertical: 8,
      paddingHorizontal: 10,
      bottom: 10,
      zIndex: 99,
      left: 25,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 20,
    },

    opacityBg2: {
      position: 'absolute',
      width: 'auto',
      maxWidth: (width - 80) / 1,
      height: 'auto',
      paddingVertical: moderateScale(4),
      paddingHorizontal: moderateScale(10),
      bottom: moderateScale(10),
      zIndex: 99,
      right: moderateScale(15),
      opacity: 1,
      borderRadius: 15,
    },

    listImg: {
      width: '100%',
      height: moderateScale(200),
      justifyContent: 'center',
      alignSelf: 'center',
      zIndex: -1,
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
    chat_img1: {
      width: moderateScale(50),
      height: moderateScale(40),
      marginRight: 0,
      borderRadius: 5,
    },


    chat_img: {
      width: 100,
      height: 100,
      marginRight: 0,
      borderRadius: 4,
    },
    chat_img11: {
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
      backgroundColor: '#6510A4', 
      borderWidth:StyleSheet.hairlineWidth, borderColor:'#6510A4'
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
      backgroundColor: '#6510A4',
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
      textAlign: 'left', fontSize: moderateScale(8), color: '#717171', paddingRight: 5, paddingTop: 9,
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



    /** SLIDER CSS */

    nRoot: {
      width: 8,
      height: 8,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: '#ddd',
      borderLeftWidth: 4,
      borderRightWidth: 4,
      borderTopWidth: 4
    },

    labelRoot: {
      alignItems: 'center',
      padding: 8,
      backgroundColor: '#222222',
      borderRadius: 10,
    },

    root: {
      height: 4,
      backgroundColor: '#6510A4',
      borderRadius: 2,
    },

    rootRail: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      backgroundColor: '#ddd',
    },

    rootLow: {
      width: THUMB_RADIUS_LOW * 2,
      height: THUMB_RADIUS_LOW * 2,
      borderRadius: THUMB_RADIUS_LOW,
      borderWidth: 2,
      borderColor: '#6510A4',
      backgroundColor: '#fff',
    },

    rootHigh: {
      width: THUMB_RADIUS_HIGH * 2,
      height: THUMB_RADIUS_HIGH * 2,
      borderRadius: THUMB_RADIUS_HIGH,
      borderWidth: 2,
      borderColor: '#6510A4',
      backgroundColor: '#ffffff',
    },

  });
}

export default newStyles;