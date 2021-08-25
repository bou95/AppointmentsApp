
import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput, Image,
} from 'react-native';
import {Card} from 'react-native-elements';

const Search = () => {
    const coaches = [
        {
            name: 'Jake Hill',
            job: 'Career Coach',
            reviews: '36',
            avatar: require('../assets/user1.png')
        },
        {
            name: 'Emily Brown',
            job: 'Health/Wellness coach',
            reviews: '21',
            avatar: require('../assets/user2.png')
        },
        {
            name: 'Kim Yard',
            job: 'Family/Parenting coach',
            reviews: '16',
            avatar: require('../assets/user3.png')
        },
        {
            name: 'Ahmed Mosa',
            job: 'Relationship coach',
            reviews: '42',
            avatar: require('../assets/user4.png')
        },
    ]
    const names = coaches.map((c) => c.name);

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        setFilteredDataSource(coaches);
        setMasterDataSource(coaches);
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
                        <Text style={styles.reviews}>{item.reviews} reviews</Text>
                    </View>
                </View>
            </Card>
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

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
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
    }
});

export default Search;
