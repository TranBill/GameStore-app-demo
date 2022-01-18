import React, {useState} from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';

import { WindowWidth } from '../utils/dimensions';
import { FreeGames, PaidGames, SliderData } from '../models/data';
import CustomSwitch from '../components/CustomSwitch';
import BannerSlider from '../components/BannerSlider';
import ListItems from '../components/ListItems';
import GameDetailsScreen from './GameDetailsScreen';


function HomeScreen({navigation})  {
    
    const renderBanner = ({item,index}) => {
        return <BannerSlider data={item}/>
    }

    const [gamesTab, setGameTab] = useState(1);

    
    const onSelectSwitch = (value) =>{
        setGameTab(value);
    }


    return(
        <SafeAreaView style={styles.container}> 
            <ScrollView style={{padding:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom: 20}}>
                <Text style={{fontSize:18,fontFamily:'AvenirNext-BoldItalic'}}> Hello, DumbassBill</Text>

                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <ImageBackground 
                source={require('../assets/images/avatar.jpg')} 
                style ={{width:40,height:40,marginLeft:5}}
                imageStyle={{borderRadius:25}}
                />
                </TouchableOpacity>


            </View>

            <View style={styles.searchBar}>
                <Icon 
                name='search' 
                size={22} 
                color='gray' 
                style={{marginRight:6,marginTop:2}}
                />
                <TextInput placeholder='Search'/>
            </View>

            <View style={{
                marginVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <Text style={{fontSize:15,fontFamily:'Arial Rounded MT Bold',color:'#ff00ff'}}>
                    Upcoming Games
                </Text>
                <TouchableOpacity onPress={()=>{} }>
                    <Text style={{color:'cyan'}}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>

            <Carousel
                ref={(c) => { this.carousel = c; }}
                data={SliderData}
                renderItem={renderBanner}
                sliderWidth={WindowWidth - 40}
                itemWidth={300}
                loop={true}
            />

            <View style={{
                marginVertical: 20
            }}
            >
                <CustomSwitch 
                selectionMode={1} 
                Option1="Free to play"
                Option2="Paid games"
                onSelectSwitch={onSelectSwitch}
                />
            </View>

            {gamesTab == 1 && FreeGames.map(item =>(
                <ListItems
                key={item.id} 
                poster={item.poster}
                title={item.title}
                subtitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                onPress={()=> navigation.navigate('GameDetails',{title:item.title, id:item.id, poster:item.poster})}
                />
            ))
            }
            {gamesTab == 2 && PaidGames.map(item =>(
                <ListItems 
                key={item.id} 
                poster={item.poster}
                title={item.title}
                subtitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                onPress={()=> navigation.navigate('GameDetails',{title:item.title,id: item.id, poster:item.poster})}
                />
            ))
            }

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff'
    },

    searchBar: {
        flexDirection:'row',
        borderColor:'black',
        borderWidth:2,
        borderRadius:8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor:'white'
    }
});
