import React, {useState} from 'react'
import { StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper'


function ArticleEdit(props) {
    const data = props.route.params.data;
    const[title, setTitle] = useState(data.title)
    const[description, setDescription] = useState(data.description)

    const updatedata = () => {
        fetch(`http://10.21.183.52/api/articles/${data.id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title:title, description:description})
        })
        .then(res => res.json())
        .then(data => {
            props.navigation.navigate("Home",{data:data})
        })
        .catch(err => console.log(Alert.alert("Error", err)))
    }
  return (
    <View>
            <TextInput style = {styles.inputStyle}
                label = "Title"
                value = {title}
                mode = "outlined"

                onChangeText={text => setTitle(text)}
            />
            <TextInput style = {{margin: 10}}
                label = "Description"
                value = {description}
                mode = "outlined"
                multiline
                numberOfLines={10}
                onChangeText={text => setDescription(text)}
            />
            <Button
                style = {{margin: 10}}
                icon = "update"
                mode = "contained"
                onPress = {() => updatedata()}
            >Update Article</Button>
        </View>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 10,
        margin: 10
    }
})

export default ArticleEdit