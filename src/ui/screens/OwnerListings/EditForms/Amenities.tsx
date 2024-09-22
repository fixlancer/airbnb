import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView, AppRegistry } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import styles from '../Styles';
const { width, height } = Dimensions.get('window');

interface Props {
    formData: any;
    setFormData: any;
}

const Amenities: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [essence, setEssence] = useState(0);
    const [air, setAir] = useState(0);
    const [wifi, setWifi] = useState('');
    const [tv, setTV] = useState('');
    const [game, setGame] = useState(0);
    const [kitchen, setKitchen] = useState(0);
    const [breakfast, setBreakfast] = useState(0);
    const [iron, setIron] = useState(0);
    const [hairdryer, setHairdryer] = useState(0);
    const [pEntrance, setPEntrance] = useState(0);
    const [parking, setParking] = useState(0);
    const [pool, setPool] = useState(0);
    const [elevator, setElevator] = useState(0);
    const [coffeemaker, setCoffeemaker] = useState(0);
    const [smoke, setSmoke] = useState(0);
    const [aid, setAid] = useState(0);
    const [camera, setCamera] = useState(0);
    const [fire, setFire] = useState(0);
    const [ocean, setOcean] = useState(0);
    const [mountain, setMountain] = useState(0);
    const [hill, setHill] = useState(0);
    const [garden, setGarden] = useState(0);
    const [poolView, setPoolView] = useState(0);
    const [hotwater, setHotwater] = useState(0);
    const [shampoo, setShampoo] = useState(0);
    const [bath, setBath] = useState(0);
    const [shower, setShower] = useState(0);
    const [washer, setWasher] = useState(0);
    const [wardrobe, setWardrobe] = useState('');
    const [hangers, setHangers] = useState(0);
    const [bluetooth, setBluetooth] = useState(0);
    const [sound, setSound] = useState(0);
    const [ceiling, setCeiling] = useState(0);
    const [standing, setStanding] = useState(0);
    const [firePlace, setFirePlace] = useState(0);
    const [workspace, setWorkspace] = useState(0);
    const [fridge, setFridge] = useState(0);
    const [dining, setDining] = useState(0);
    const [microwave, setMicrowave] = useState(0);
    const [dishes, setDishes] = useState(0);
    const [gym, setGym] = useState(0);
    const [balcony, setBalcony] = useState(0);
    const [furniture, setFurniture] = useState(0);
    const [backyard, setBackyard] = useState(0);
    const [bbq, setBBQ] = useState(0);
    const [sParking, setSParking] = useState(0);
    const [cleaning, setCleaning] = useState(0);



    useEffect(() => {

        formData?.amenities[0].outsideView.forEach(i => {
            if (i == 'Ocean view') {
                setOcean(1)
            }
            if (i == 'Mountain view') {
                setMountain(1);
            }
            if (i == 'Hill view') {
                setHill(1);
            }           
            if (i == 'Garden view') {
                setGarden(1)
            }
            if (i == 'Pool view') {
                setPoolView(1);
            }
        })

        formData?.amenities[0].bathroom.forEach(i => {
            if (i == 'Hot water') {
                setHotwater(1)
            }
            if (i == 'Shampoo') {
                setShampoo(1);
            }
            if (i == 'Hair dryer') {
                setHairdryer(1)
            }
            if (i == 'Bath') {
                setBath(1);
            }
            if (i == 'Shower') {
                setShower(1);
            }
        })

        formData?.amenities[0].bedroom.forEach(i => {

            if (i == 'Essentials') {
                setEssence(1)
            }
            if (i == 'Iron') {
                setIron(1);
            }
            if (i == 'Washer') {
                setWasher(1);
            }
            if (i == 'Wardrobe') {
                setWardrobe('Wardrobe');
            }
            if (i == 'Walk in closet') {
                setWardrobe('Walk in closet');
            }
            if (i == 'Hangers') {
                setHangers(1);
            }
        })

        formData?.amenities[0].entertainment.forEach(i => {

            if (i == 'HD TV with Netflix') {
                setTV('HD TV with Netflix')
            }
            if (i == 'TV') {
                setTV('TV');
            }
            if (i == 'Video game') {
                setGame(1);
            }
            if (i == 'Bluetooth sound system') {
                setBluetooth(1);
            }
            if (i == 'Sound system') {
                setSound(1);
            }
        })

        formData?.amenities[0].cooling.forEach(i => {

            if (i == 'Air conditioning') {
                setAir(1)
            }
            if (i == 'Ceiling fan') {
                setCeiling(1);
            }
            if (i == 'Standing fan') {
                setStanding(1);
            }
            if (i == 'Indoor fireplace') {
                setFirePlace(1);
            }
        })

        formData?.amenities[0].internet.forEach(i => {

            if (i == 'Wifi') {
                setWifi('Wifi')
            }
            if (i == 'Starlink Wifi') {
                setWifi('Starlink Wifi');
            }
            if (i == 'Dedicated workspace') {
                setWorkspace(1);
            }
        })

        formData?.amenities[0].safety.forEach(i => {

            if (i == 'Smoke detector') {
                setSmoke(1)
            }
            if (i == 'First-aid kit') {
                setAid(1);
            }
            if (i == 'Security cameras') {
                setCamera(1);
            }
            if (i == 'Fire extinguisher') {
                setFire(1);
            }
        })

        formData?.amenities[0].kitchen.forEach(i => {

            if (i == 'Kitchen') {
                setKitchen(1)
            }
            if (i == 'Refridgerator') {
                setFridge(1);
            }
            if (i == 'Coffee maker') {
                setCoffeemaker(1);
            }
            if (i == 'Microwave') {
                setMicrowave(1);
            }
            if (i == 'Dishes') {
                setDishes(1);
            }
            if (i == 'Dining table') {
                setDining(1);
            }
        })

        formData?.amenities[0].outdoor.forEach(i => {

            if (i == 'Private entrance') {
                setPEntrance(1)
            }
            if (i == 'Elevator in building') {
                setElevator(1);
            }
            if (i == 'Pool') {
                setPool(1);
            }
            if (i == 'Gym') {
                setGym(1);
            }
            if (i == 'Private balcony') {
                setBalcony(1);
            }
            if (i == 'Outdoor furniture') {
                setFurniture(1);
            }
            if (i == 'Private backyard') {
                setBackyard(1);
            }
            if (i == 'BBQ grill') {
                setBBQ(1);
            }
        })

        formData?.amenities[0].parking.forEach(i => {

            if (i == 'Free parking on premises') {
                setParking(1)
            }
            if (i == 'Street parking') {
                setSParking(1);
            }
        })

        formData?.amenities[0].services.forEach(i => {

            if (i == 'Breakfast') {
                setBreakfast(1)
            }
            if (i == 'Cleaning during stay') {
                setCleaning(1);
            }
        })

    }, [])



/*  ---------  OUTDSIDE VIEW ------------- */

    const handleOcean = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].outsideView.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].outsideView.splice(index, 1);
            setOcean(0);
        } else {
            updatedData.amenities[0].outsideView.push(myData);
            setOcean(1);
        }
        setFormData(updatedData);
    }

    const handleMountain = (myData) => {
        const index = formData?.amenities[0].outsideView.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outsideView.splice(index, 1);
            setMountain(0);
        } else {
            updatedData.amenities[0].outsideView.push(myData);
            setMountain(1);
        }
        setFormData(updatedData);
    }    
    
    const handleHill = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].outsideView.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].outsideView.splice(index, 1);
            setHill(0);
        } else {
            updatedData.amenities[0].outsideView.push(myData);
            setHill(1);
        }
        setFormData(updatedData);
    }

    const handleGarden = (myData) => {
        const index = formData?.amenities[0].outsideView.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outsideView.splice(index, 1);
            setGarden(0);
        } else {
            updatedData.amenities[0].outsideView.push(myData);
            setGarden(1);
        }
        setFormData(updatedData);
    }    
    
    const handlePoolView = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].outsideView.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].outsideView.splice(index, 1);
            setPoolView(0);
        } else {
            updatedData.amenities[0].outsideView.push(myData);
            setPoolView(1);
        }
        setFormData(updatedData);
    }


    /*  ---------  BATHROOM ------------- */

    const handleHotwater = (myData) => {
        const index = formData?.amenities[0].bathroom.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].bathroom.splice(index, 1);
            setHotwater(0);
        } else {
            updatedData.amenities[0].bathroom.push(myData);
            setHotwater(1);
        }
        setFormData(updatedData);
    }    
    
    const handleShampoo = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].bathroom.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].bathroom.splice(index, 1);
            setShampoo(0);
        } else {
            updatedData.amenities[0].bathroom.push(myData);
            setShampoo(1);
        }
        setFormData(updatedData);
    }

    const handleHairdryer = (myData) => {
        const index = formData?.amenities[0].bathroom.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].bathroom.splice(index, 1);
            setHairdryer(0);
        } else {
            updatedData.amenities[0].bathroom.push(myData);
            setHairdryer(1);
        }
        setFormData(updatedData);
    }    
    
    const handleBath = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].bathroom.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].bathroom.splice(index, 1);
            setBath(0);
        } else {
            updatedData.amenities[0].bathroom.push(myData);
            setBath(1);
        }
        setFormData(updatedData);
    }

    const handleShower = (myData) => {
        const index = formData?.amenities[0].bathroom.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].bathroom.splice(index, 1);
            setShower(0);
        } else {
            updatedData.amenities[0].bathroom.push(myData);
            setShower(1);
        }
        setFormData(updatedData);
    }    
    

    /*  ---------  BEDROOM & LAUNDRY ------------- */


    const handleEssence = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].bedroom.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].bedroom.splice(index, 1);
            setEssence(0);
        } else {
            updatedData.amenities[0].bedroom.push(myData);
            setEssence(1);
        }
        setFormData(updatedData);
    }

    const handleIron = (myData) => {
        const index = formData?.amenities[0].bedroom.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].bedroom.splice(index, 1);
            setIron(0);
        } else {
            updatedData.amenities[0].bedroom.push(myData);
            setIron(1);
        }
        setFormData(updatedData);
    }    
    
    const handleWasher = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].bedroom.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].bedroom.splice(index, 1);
            setWasher(0);
        } else {
            updatedData.amenities[0].bedroom.push(myData);
            setWasher(1);
        }
        setFormData(updatedData);
    }

    const handleWardrobe = (myData) => {
        const index = formData?.amenities[0].bedroom.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].bedroom.splice(index, 1);
            setWardrobe(myData);
        } else {
            updatedData.amenities[0].bedroom.push(myData);
            setWardrobe(myData);
        }
        setFormData(updatedData);
    }    
    
    const handleHangers = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].bedroom.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].bedroom.splice(index, 1);
            setHangers(0);
        } else {
            updatedData.amenities[0].bedroom.push(myData);
            setHangers(1);
        }
        setFormData(updatedData);
    }


       
    /*  ---------  ENTERTAINMENT ------------- */


    const handleTv = (myData) => {
        const index = formData?.amenities[0].entertainment.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].entertainment.splice(index, 1);
            setTV(myData);
        } else {
            updatedData.amenities[0].entertainment.push(myData);
            setTV(myData);
        }
        setFormData(updatedData);
    }    
    
    const handleGame = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].entertainment.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].entertainment.splice(index, 1);
            setGame(0);
        } else {
            updatedData.amenities[0].entertainment.push(myData);
            setGame(1);
        }
        setFormData(updatedData);
    }

    const handleBluetooth = (myData) => {
        const index = formData?.amenities[0].entertainment.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].entertainment.splice(index, 1);
            setBluetooth(0);
        } else {
            updatedData.amenities[0].entertainment.push(myData);
            setBluetooth(1);
        }
        setFormData(updatedData);
    }    
    
    const handleSound = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].entertainment.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].entertainment.splice(index, 1);
            setSound(0);
        } else {
            updatedData.amenities[0].entertainment.push(myData);
            setSound(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  COOLING & HEATING ------------- */


    const handleAir = (myData) => {
        const index = formData?.amenities[0].cooling.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].cooling.splice(index, 1);
            setAir(0);
        } else {
            updatedData.amenities[0].cooling.push(myData);
            setAir(1);
        }
        setFormData(updatedData);
    }    
    
    const handleCeiling = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].cooling.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].cooling.splice(index, 1);
            setCeiling(0);
        } else {
            updatedData.amenities[0].cooling.push(myData);
            setCeiling(1);
        }
        setFormData(updatedData);
    }

    const handleStanding = (myData) => {
        const index = formData?.amenities[0].cooling.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].cooling.splice(index, 1);
            setStanding(0);
        } else {
            updatedData.amenities[0].cooling.push(myData);
            setStanding(1);
        }
        setFormData(updatedData);
    }    
    
    const handleFirePlace = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].cooling.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].cooling.splice(index, 1);
            setFirePlace(0);
        } else {
            updatedData.amenities[0].cooling.push(myData);
            setFirePlace(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  INTERNET & DEDICATED WORKSPACE ------------- */


    const handleWifi = (myData) => {
        const index = formData?.amenities[0].internet.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].internet.splice(index, 1);
            setWifi(myData);
        } else {
            updatedData.amenities[0].internet.push(myData);
            setWifi(myData);
        }
        setFormData(updatedData);
    }    
    
    const handleWorkspace = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].internet.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].internet.splice(index, 1);
            setWorkspace(0);
        } else {
            updatedData.amenities[0].internet.push(myData);
            setWorkspace(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  SAFETY ------------- */


    const handleSmoke = (myData) => {
        const index = formData?.amenities[0].safety.indexOf(myData);
        const index2 = formData?.amenities[0].notIncluded.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].safety.splice(index, 1);
            updatedData.amenities[0].notIncluded.push(myData);
            setSmoke(0);
        } else {
            updatedData.amenities[0].safety.push(myData);
            updatedData.amenities[0].notIncluded.splice(index2, 1);
            setSmoke(1);
        }
        setFormData(updatedData);
    }    
    
    const handleAid = (myData) => {
        const index = formData?.amenities[0].safety.indexOf(myData);
        const index2 = formData?.amenities[0].notIncluded.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].safety.splice(index, 1);
            updatedData.amenities[0].notIncluded.push(myData);
            setAid(0);
        } else {
            updatedData.amenities[0].safety.push(myData);
            updatedData.amenities[0].notIncluded.splice(index2, 1);
            setAid(1);
        }
        setFormData(updatedData);
    }

    const handleCamera = (myData) => {
        const index = formData?.amenities[0].safety.indexOf(myData);
        const index2 = formData?.amenities[0].notIncluded.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].safety.splice(index, 1);
            updatedData.amenities[0].notIncluded.push(myData);
            setCamera(0);
        } else {
            updatedData.amenities[0].safety.push(myData);
            updatedData.amenities[0].notIncluded.splice(index2, 1);
            setCamera(1);
        }
        setFormData(updatedData);
    }    
    
    const handleFire = (myData) => {
        const index = formData?.amenities[0].safety.indexOf(myData);
        const index2 = formData?.amenities[0].notIncluded.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].safety.splice(index, 1);
            updatedData.amenities[0].notIncluded.push(myData);
            setFire(0);
        } else {
            updatedData.amenities[0].safety.push(myData);
            updatedData.amenities[0].notIncluded.splice(index2, 1);
            setFire(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  KITCHEN ------------- */


    const handleKitchen = (myData) => {
        const index = formData?.amenities[0].kitchen.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].kitchen.splice(index, 1);
            setKitchen(0);
        } else {
            updatedData.amenities[0].kitchen.push(myData);
            setKitchen(1);
        }
        setFormData(updatedData);
    }    
    
    const handleFridge = (myData) => {
        const updatedData = {...formData};
        const index = formData?.amenities[0].kitchen.indexOf(myData);

        if (index !== -1) {
            updatedData.amenities[0].kitchen.splice(index, 1);
            setFridge(0);
        } else {
            updatedData.amenities[0].kitchen.push(myData);
            setFridge(1);
        }
        setFormData(updatedData);
    }

    const handleCoffee = (myData) => {
        const index = formData?.amenities[0].kitchen.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].kitchen.splice(index, 1);
            setCoffeemaker(0);
        } else {
            updatedData.amenities[0].kitchen.push(myData);
            setCoffeemaker(1);
        }
        setFormData(updatedData);
    }

    const handleMicrowave = (myData) => {
        const index = formData?.amenities[0].kitchen.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].kitchen.splice(index, 1);
            setMicrowave(0);
        } else {
            updatedData.amenities[0].kitchen.push(myData);
            setMicrowave(1);
        }
        setFormData(updatedData);
    }

    const handleDishes = (myData) => {
        const index = formData?.amenities[0].kitchen.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].kitchen.splice(index, 1);
            setDishes(0);
        } else {
            updatedData.amenities[0].kitchen.push(myData);
            setDishes(1);
        }
        setFormData(updatedData);
    }

    const handleDining = (myData) => {
        const index = formData?.amenities[0].kitchen.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].kitchen.splice(index, 1);
            setDining(0);
        } else {
            updatedData.amenities[0].kitchen.push(myData);
            setDining(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  OUTDOOR ------------- */


    const handlePrivate = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setPEntrance(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setPEntrance(1);
        }
        setFormData(updatedData);
    }

    const handlePool = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setPool(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setPool(1);
        }
        setFormData(updatedData);
    }

    const handleElevator = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setElevator(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setElevator(1);
        }
        setFormData(updatedData);
    }

    const handleGym = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setGym(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setGym(1);
        }
        setFormData(updatedData);
    }

    const handleBalcony = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setBalcony(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setBalcony(1);
        }
        setFormData(updatedData);
    }

    const handleFurniture = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setFurniture(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setFurniture(1);
        }
        setFormData(updatedData);
    }

    const handleBackyard = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setBackyard(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setBackyard(1);
        }
        setFormData(updatedData);
    }

    const handleBBQ = (myData) => {
        const index = formData?.amenities[0].outdoor.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].outdoor.splice(index, 1);
            setBBQ(0);
        } else {
            updatedData.amenities[0].outdoor.push(myData);
            setBBQ(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  PARKING ------------- */


    const handleParking = (myData) => {
        const index = formData?.amenities[0].parking.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].parking.splice(index, 1);
            setParking(0);
        } else {
            updatedData.amenities[0].parking.push(myData);
            setParking(1);
        }
        setFormData(updatedData);
    }

    const handleSParking = (myData) => {
        const index = formData?.amenities[0].parking.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].parking.splice(index, 1);
            setSParking(0);
        } else {
            updatedData.amenities[0].parking.push(myData);
            setSParking(1);
        }
        setFormData(updatedData);
    }
   

    /*  ---------  SERVICES ------------- */


    const handleBreakfast = (myData) => {
        const index = formData?.amenities[0].services.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].services.splice(index, 1);
            setBreakfast(0);
        } else {
            updatedData.amenities[0].services.push(myData);
            setBreakfast(1);
        }
        setFormData(updatedData);
    }

    const handleCleaning = (myData) => {
        const index = formData?.amenities[0].services.indexOf(myData);
        const updatedData = {...formData};

        if (index !== -1) {
            updatedData.amenities[0].services.splice(index, 1);
            setCleaning(0);
        } else {
            updatedData.amenities[0].services.push(myData);
            setCleaning(1);
        }
        setFormData(updatedData);
    }



    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb20]}>What amenities do you offer?</Text>

                    <Text style={[styles.largeLabel, styles.mb20]}>Outside View</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleOcean('Ocean view')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={ocean === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={ocean === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Ocean view</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleMountain('Mountain view')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={mountain === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={mountain === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Mountain view</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleHill('Hill view')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={hill === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={hill === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Hill view</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleGarden('Garden view')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={garden === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={garden === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Garden view</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handlePoolView('Pool view')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={poolView === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={poolView === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Pool view</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Bathroom</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleHotwater('Hot water')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={hotwater === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={hotwater === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Hot water</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleShampoo('Shampoo')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={shampoo === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={shampoo === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Shampoo</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleHairdryer('Hair dryer')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={hairdryer === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={hairdryer === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Hair dryer</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBath('Bath')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={bath === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={bath === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Bath</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleShower('Shower')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={shower === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={shower === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Shower</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Bedroom and laundry</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleEssence('Essentials')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={essence === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={essence === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Essentials</MyText>
                                    <MyText style={[styles.tinyLabel]}>Towels, bed sheets, soap and toilet paper</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleIron('Iron')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={iron === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={iron === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Iron</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWasher('Washer')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={washer === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={washer === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Washer</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWardrobe('Wardrobe')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={wardrobe === 'Wardrobe' ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={wardrobe === 'Wardrobe' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Wardrobe</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWardrobe('Walk in closet')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={wardrobe === 'Walk in closet' ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={wardrobe === 'Walk in closet' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Walk in closet</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleHangers('Hangers')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={hangers === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={hangers === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Hangers</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <Text style={[styles.largeLabel, styles.mb20]}>Entertainment</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleTv('HD TV with Netflix')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={tv === 'HD TV with Netflix' ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={tv === 'HD TV with Netflix' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>HD TV with Netflix</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleTv('TV')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={tv === 'TV' ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={tv === 'TV' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>TV</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleGame('Video game')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={game === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={game === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Video game</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBluetooth('Bluetooth sound system')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={bluetooth === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={bluetooth === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Bluetooth sound system</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleSound('Sound system')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={sound === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={sound === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Sound system</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Heating and cooling</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleAir('Air conditioning')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={air === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={air === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Air conditioning</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleCeiling('Ceiling fan')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={ceiling === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={ceiling === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Ceiling fan</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleStanding('Standing fan')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={standing === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={standing === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Standing fan</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleFirePlace('Indoor fireplace')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={firePlace === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={firePlace === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Indoor fireplace</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <Text style={[styles.largeLabel, styles.mb20]}>Internet and office</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWifi('Wifi')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={wifi === 'Wifi' ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={wifi === 'Wifi' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Wifi</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWifi('Starlink Wifi')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={wifi === 'Starlink Wifi' ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={wifi === 'Starlink Wifi' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Starlink Wifi</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWorkspace('Dedicated workspace')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={workspace === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={workspace === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Dedicated workspace</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Safety</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleSmoke('Smoke detector')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={smoke === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={smoke === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Smoke detector</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleAid('First-aid kit')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={aid === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={aid === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>First-aid kit</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleCamera('Security cameras')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={camera === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={camera === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Security cameras</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleFire('Fire extinguisher')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={fire === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={fire === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Fire extinguisher</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Kitching and dining</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleKitchen('Kitchen')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={kitchen === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={kitchen === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Kitchen</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleFridge('Refridgerator')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={fridge === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={fridge === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Refridgerator</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleCoffee('Coffee maker')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={coffeemaker === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={coffeemaker === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Coffee maker</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleMicrowave('Microwave')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={microwave === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={microwave === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Microwave</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleDishes('Dishes')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={dishes === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={dishes === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Dishes</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleDining('Dining table')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={dining === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={dining === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Dining table</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <Text style={[styles.largeLabel, styles.mb20]}>Outdoor</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handlePrivate('Private entrance')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={pEntrance === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={pEntrance === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Private entrance</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleElevator('Elevator in building')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={elevator === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={elevator === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Elevator in building</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handlePool('Pool')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={pool === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={pool === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Pool</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleGym('Gym')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={gym === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={gym === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Gym</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBalcony('Private balcony')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={balcony === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={balcony === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Private balcony</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleFurniture('Outdoor furniture')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={furniture === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={furniture === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Outdoor furniture</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBackyard('Private backyard')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={backyard === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={backyard === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Private backyard</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBBQ('BBQ grill')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={bbq === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={bbq === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>BBQ grill</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>



                    <Text style={[styles.largeLabel, styles.mb20]}>Parking</Text>



                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleParking('Free parking on premises')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={parking === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={parking === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Free parking on premises</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleSParking('Street parking')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={sParking === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={sParking === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Street parking</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Services</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBreakfast('Breakfast')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={breakfast === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={breakfast === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Breakfast</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleCleaning('Cleaning during stay')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={cleaning === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={cleaning === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Cleaning during stay</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>




                </View>
            </ScrollView>


        </>
    )
}

export default Amenities;