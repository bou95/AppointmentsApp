import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput, Image, TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Icon } from 'react-native-elements'


import {faCalendarAlt, faClock, faCoffee, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    /*********************************************DATE PICKER**************************************************************/

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const [fullDate, setFullDate] = useState('--/--/----');
    const [fullTime, setFullTime] = useState('--:--');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = selectedDate => {
        setDate(selectedDate);

        const day = selectedDate.getDate();
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();

        const formattedDateEnglish = day + '/' + month + '/' + year;
        setFullDate(formattedDateEnglish);

        hideDatePicker();
    };

    const handleConfirm2 = selectedTime => {
        setDate(selectedTime);

        const hours = selectedTime.getHours();
        const minutes = selectedTime.getMinutes();

        const time = hours + ':' + minutes;
        setFullTime(time);

        hideTimePicker();
    };

    /**********************************************************************************************************************/

    const coaches = [
        {
            id: 0,
            visible: false,
            booked: false,
            name: 'Jake Hill',
            job: 'Career Coach',
            reviews: '36',
            avatar: require('../assets/user1.png')
        },
        {
            id: 1,
            visible: false,
            booked: false,
            name: 'Emily Brown',
            job: 'Health/Wellness coach',
            reviews: '21',
            avatar: require('../assets/user2.png')
        },
        {
            id: 2,
            visible: false,
            booked: false,
            name: 'Kim Yard',
            job: 'Family/Parenting coach',
            reviews: '16',
            avatar: require('../assets/user3.png')
        },
        {
            id: 3,
            visible: false,
            booked: false,
            name: 'Ahmed Mosa',
            job: 'Relationship coach',
            reviews: '42',
            avatar: require('../assets/user4.png')
        },
    ]
    const [coachesArray, setCoachesArray] = useState(coaches);

    const names = coaches.map((c) => c.name);

    const [refresh, setRefresh] = useState(false);



    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        setFilteredDataSource(coachesArray);
        setMasterDataSource(coachesArray);
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {
                let newArray = [...coachesArray];
                newArray[item.id].visible = !coachesArray[item.id].visible;
                newArray[item.id] = {...newArray[item.id], key: !coachesArray[item.id]};
                setCoachesArray(newArray);


                setRefresh(!refresh)
                console.log(refresh)

            }}>
                <Card containerStyle={styles.coaches}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Image
                                style={styles.avatar}
                                resizeMode="cover"
                                source={item.avatar}
                            />
                        </View>
                        <View style={[styles.col, {paddingLeft: 20}]}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.job}>{item.job}</Text>
                            { item.booked ?
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesomeIcon
                                        icon={ faCalendarAlt }
                                        color={'#53A653'}
                                        size={17} />
                                    <Text
                                        style={styles.booked}>
                                        {' '}{fullDate.toString()} {fullTime.toString()}
                                    </Text>
                                </View>
                                :
                                <Text style={styles.reviews}>{item.reviews} reviews</Text>
                            }
                        </View>
                    </View>
                    {item.visible ?
                    <View>
                        <Text style={styles.label}>Select Appointment Date</Text>
                        <View style={styles.timeContainer}>
                            <View style={styles.timeItem}>
                                <Text
                                    style={{ textAlign: 'left', left: 20, color: (fullDate.toString() === '--/--/----' || fullDate.toString() === '----/--/--') ? '#97AABD' : '#000759' }}>
                                    {fullDate.toString()}
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <View>
                                        <FontAwesomeIcon
                                            icon={ faCalendarAlt }
                                            color={'#294E95'}
                                            size={22} />
                                    </View>
                                </TouchableOpacity>

                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    textColor="#00000090"
                                />
                            </View>
                        </View>

                        <Text style={styles.label}>Select Appointment Time</Text>
                        <View style={styles.timeContainer}>
                            <View style={styles.timeItem}>
                                <Text
                                    style={{ textAlign: 'left', left: 20, color: (fullTime.toString() === '--:--') ? '#97AABD' : '#000759' }}>
                                    {fullTime.toString()}
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={showTimePicker}>
                                    <View>
                                        <FontAwesomeIcon
                                            icon={ faClock }
                                            color={'#294E95'}
                                            size={22} />
                                    </View>
                                </TouchableOpacity>

                                <DateTimePickerModal
                                    isVisible={isTimePickerVisible}
                                    mode="time"
                                    onConfirm={handleConfirm2}
                                    onCancel={hideTimePicker}
                                    textColor="#00000090"
                                />
                            </View>
                        </View>

                        <View style={styles.location}>
                            <View style={styles.timeItem}>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesomeIcon
                                        icon={ faMapMarkerAlt }
                                        color={'#294E95'}
                                        size={22} />
                                        <Text style={styles.locationText}> Street 12, building 7, office 5</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.confirm} onPress={() =>
                        {
                           console.log("CONFIRM!!!" +
                               "");


                            let newArray = [...coachesArray];
                            newArray[item.id].visible = !coachesArray[item.id].visible;
                            newArray[item.id].booked = true;
                            newArray[item.id] = {...newArray[item.id], key: !coachesArray[item.id]};
                            setCoachesArray(newArray);
                            console.log("come on!")

                            console.log(coachesArray);

                        }}>
                            <View style={styles.timeItem}>
                                <View>
                                    <Text style={styles.confirmText}>Confirm Appointment</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                        :
                        <View></View>
                    }
                </Card>
            </TouchableOpacity>

        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search a life coach"
                    placeholderTextColor='#C7C7C7'
                />
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    extraData={refresh}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 60,
        borderWidth: 1,
        paddingLeft: 20,
        marginHorizontal: 20,
        marginTop: 20,
        borderColor: '#C7C7C7',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    coaches: {
        borderRadius: 10,
        borderColor: '#294E95',
        margin: 20,
        padding: 0
    },
    row: {
        flexDirection: "row",
    },
    col: {
        padding: 0,
        flexDirection: "column",
        justifyContent: 'center',
    },
    avatar: {
        padding: 0,
        margin: 0,
    },
    name: {
        color: '#294E95',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 6,
    },
    job: {
        color: '#6F6F6F',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 6,
    },
    reviews: {
        color: '#6F6F6F',
        fontSize: 12,
        fontWeight: '300',
    },
    booked: {
        color: '#53A653',
        fontSize: 12,
        fontWeight: '700',
    },
    timeContainer: {
        alignSelf: 'center',
        width: '70%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // fill rows left to right
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#294E95',
        borderWidth: 1,
        marginBottom: 10,
    },
    location: {
        alignSelf: 'center',
        width: '70%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    timeItem: {
        width: '90%',
    },
    label: {
        color: '#294E95',
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: 60,
        paddingTop: 20,
    },
    locationText: {
        color: '#294E95',
        fontSize: 15,
        fontWeight: '400',
    },
    confirmText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    confirm: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '70%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#294E95',
        borderRadius: 10,
        borderColor: '#294E95',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 30,
},
});

export default Search;
