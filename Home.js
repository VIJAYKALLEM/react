import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import {Card, FAB} from 'react-native-paper';


function Home(props){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadData = () => {
        fetch('http://10.21.183.52/api/articles/', {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(err => Alert.alert("Error", err))
    }
    useEffect(() => {
        loadData()
    }, [])

    const clickeditem = (data) => {
        props.navigation.navigate("Details", {data:data})
    }
    const renderdata = item => {
        return(
        <Card style ={styles.cardStyle} onPress = {() => clickeditem(item)}>
        <Text style= {{fontSize: 25}}>{item.title}</Text>
        </Card>
        )
    }
    return (
        <View>
        {/*<Card style = {styles.cardStyle}>
        <Text style= {{fontSize: 25}}>I have to poooooop {this.state.title} </Text>

        </Card>*/}

        <FlatList
        data = {data}
        renderItem = {({item}) => renderdata(item)}
        onRefresh = {() => loadData()}
        refreshing = {loading}
        keyExtractor = {item => `${item.id}`}
        />
        <FAB style = 
        {styles.fab}
        small = {false}
        icon = "plus"
        onPress = {() => props.navigation.navigate("Create")}/>
        {/*<Button styles = {{padding: 5}}title="Click Me" onPress = {() => 
        {if (this.state.name == "Noma"){
            this.setState({name: "Marami"})
        }
        else{
            this.setState({name: "Noma"})}}}/>*/}
        </View>
            )
    }


const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        margin: 10
    },

    fab: {
        position: 'absolute',
        margin: 0,
        right: 0,
        bottom: 0,  
        backgroundColor: 'yellow'
    }
})

export default Home