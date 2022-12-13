//Old login file: Dont use

// import React, {useState} from 'react'
// import { StyleSheet, Text, View } from 'react-native';
// import {TextInput, Button} from 'react-native-paper'

// function UserCreation(props) {
//     const[name, setName] = useState("")
//     const[username, setUsername] = useState("")
//     const[password, setPassword] = useState("")
//     const[phone_number, setNumber] = useState("")
//     const[producer, setProducer] = useState("")
//     const[email, setEmail] = useState("")

//     const InsertData = () => {
//         fetch('http://10.21.183.52/api/users/', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name:name, username:username, password:password, phone_number: phone_number, producer: producer, email: email})})
//             .then(res => res.json())
//             .then(data => {
//                 setName("")
//                 setUsername("")
//                 setPassword("")
//                 setNumber("")
//                 setProducer("")
//             setEmail("")
//             })
//             .catch(err => console.log("Error", err))
//         }
//     return (
//         <View>
//             <TextInput style = {styles.inputStyle}
//                 label = "Name"
//                 value = {name}
//                 mode = "outlined"

//                 onChangeText={text => setName(text)}
//             />
//             <TextInput style = {styles.inputStyle}
//                 label = "Username"
//                 value = {username}
//                 mode = "outlined"

//                 onChangeText={text => setUsername(text)}
//             />
//             <TextInput style = {styles.inputStyle}
//                 label = "Password"
//                 value = {password}
//                 mode = "outlined"

//                 onChangeText={text => setPassword(text)}
//             />
//             <TextInput style = {styles.inputStyle}
//                 label = "Phone Number"
//                 value = {phone_number}
//                 mode = "outlined"

//                 onChangeText={text => setNumber(text)}
//             />
//             <TextInput style = {styles.inputStyle}
//                 label = "Apply to be a Supplier? 'Y' for Yes, 'N' for No."
//                 value = {producer}
//                 mode = "outlined"

//                 onChangeText={text => setProducer(text)}
//             />
//             <TextInput style = {styles.inputStyle}
//                 label = "Email"
//                 value = {email}
//                 mode = "outlined"

//                 onChangeText={text => setEmail(text)}
//             />
//             <Button
//                 style = {{margin: 10}}
//                 icon = "pencil"
//                 mode = "contained"
//                 onPress = {() => InsertData()}
//             >Sign Up</Button>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     inputStyle: {
//         padding: 10,
//         margin: 10
//     }
// })
// export default UserCreation