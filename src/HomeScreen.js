import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Search from './Search';


const ScreenHeight = Dimensions.get("window").height;

const HomeScreen = () => {

    // const [searchQuery, setSearchQuery] = React.useState('');
    // const onChangeSearch = query => setSearchQuery(query);
    // const coaches = [
    //     {
    //         name: 'Jake Hill',
    //         job: 'Career Coach',
    //         reviews: '36',
    //         avatar: require('../assets/user1.png')
    //     },
    //     {
    //         name: 'Emily Brown',
    //         job: 'Health/Wellness coach',
    //         reviews: '21',
    //         avatar: require('../assets/user2.png')
    //     },
    //     {
    //         name: 'Kim Yard',
    //         job: 'Family/Parenting coach',
    //         reviews: '16',
    //         avatar: require('../assets/user3.png')
    //     },
    //     {
    //         name: 'Ahmed Mosa',
    //         job: 'Relationship coach',
    //         reviews: '42',
    //         avatar: require('../assets/user4.png')
    //     },
    // ]
    //
    // const [search, setSearch] = useState('');
    // const [filteredDataSource, setFilteredDataSource] = useState([]);
    // const [masterDataSource, setMasterDataSource] = useState([]);

    // const searchFilterFunction = (text) => {
    //     // Check if searched text is not blank
    //     if (text) {
    //         // Inserted text is not blank
    //         // Filter the masterDataSource and update FilteredDataSource
    //         const newData = masterDataSource.filter(
    //             function (item) {
    //                 // Applying filter for the inserted text in search bar
    //                 const itemData = item.title
    //                     ? item.title.toUpperCase()
    //                     : ''.toUpperCase();
    //                 const textData = text.toUpperCase();
    //                 return itemData.indexOf(textData) > -1;
    //             }
    //         );
    //         setFilteredDataSource(newData);
    //         setSearch(text);
    //     } else {
    //         // Inserted text is blank
    //         // Update FilteredDataSource with masterDataSource
    //         setFilteredDataSource(masterDataSource);
    //         setSearch(text);
    //     }
    // };


    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <Image
                    source={require('../assets/Hero.png')}
                    style={{ width: '100%', height: '100%' }}
                    animation="bounceIn"
                    duraton="1500"
                    resizeMode="stretch"
                />
            </View>
            {/*<SearchBar*/}
            {/*    placeholder="Search a life coach"*/}
            {/*    style={{height: 60, marginTop: 20}}*/}
            {/*    searchIconImageStyle='#C7C7C7'*/}
            {/*    placeholderTextColor='#C7C7C7'*/}



            {/*    onChangeText={(text) => searchFilterFunction(coaches)}*/}
            {/*    onSearchPress={() => console.log("Search Icon is pressed")}*/}
            {/*    onClearPress={() => searchFilterFunction("")}*/}
            {/*    onPress={() => alert("onPress")}*/}

            {/*/>*/}

            {/*<ScrollView>*/}
            {/*        {*/}
            {/*            coaches.map((c, i) => {*/}
            {/*                return (*/}
            {/*                    <View key={i}>*/}
            {/*                       <Card containerStyle={styles.coaches}>*/}
            {/*                           <View style={styles.row}>*/}
            {/*                               <View style={styles.col}>*/}
            {/*                                   <Image*/}
            {/*                                       style={styles.avatar}*/}
            {/*                                       resizeMode="cover"*/}
            {/*                                       source={c.avatar}*/}
            {/*                                   />*/}
            {/*                               </View>*/}
            {/*                               <View style={[styles.col, {paddingLeft: 20}]}>*/}
            {/*                                   <Text style={styles.name}>{c.name}</Text>*/}
            {/*                                   <Text style={styles.job}>{c.job}</Text>*/}
            {/*                                   <Text style={styles.reviews}>{c.reviews} reviews</Text>*/}
            {/*                               </View>*/}
            {/*                           </View>*/}
            {/*                       </Card>*/}
            {/*                    </View>*/}
            {/*                );*/}
            {/*            })*/}
            {/*        }*/}
            {/*</ScrollView>*/}


            <Search/>

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    hero: {
        alignItems: 'center',
        height: ScreenHeight * 30 / 100,
        width: '100%',
        backgroundColor: '#f3f7ff',
    },
});
