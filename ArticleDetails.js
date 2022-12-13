import React from 'react'
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper'

function ArticleDetails(props) {
    const data = props.route.params.data;

    const deletedData = (data) => {
        fetch(`http://10.21.183.52/api/articles/${data.id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            props.navigation.navigate("Home")
        })
        .catch(err => console.log(Alert.alert("Error", err)))
    }
    return (
    <ScrollView>
    <View style = {styles.viewStyle}>
        <Text style = {{fontSize: 25}}>
            {data.title}
        </Text>
        <Text style = {{fontSize: 20, marginTop: 10}}>
        {data.description}
        </Text>
        <View style = {styles.btnStyle}>
            <Button 
            icon = "update" 
            mode = "contained"
            onPress = {() => props.navigation.navigate("Edit", {data:data})}>
            Edit
            </Button>
            <Button 
            icon = "delete" 
            mode = "contained"
            onPress = {() => deletedData(data)}>
            Delete
            </Button>
        </View>
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        margin: 10
    },

    btnStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 15,
        padding: 10
    }
})

export default ArticleDetails