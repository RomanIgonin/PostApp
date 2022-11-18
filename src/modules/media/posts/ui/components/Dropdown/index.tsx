import {Button, FlatList, Pressable, Text, View} from "react-native";
import React, {useState} from "react";
import {DropdownStyle} from "../styles/DropdownStyle";
import {AddPostStyle} from "../styles/AddPostStyle";


export default function Dropdown({data, getUserId}) {

    const [openFlatList, setOpenFlatList] = useState(false)
    const [userName, setUserName] = useState('—')
    const [viewDropdown, setViewDropdown] = useState(true)

    const selectName = (item) => {
        getUserId(item.userId)
        setUserName(String(item.name))
        viewList()
    }

    const keyExtractor = (item) => item.userId
    const renderItem = ({item}) => {
        if (openFlatList) {
            return (
                <Pressable onPress={() => selectName(item)}>
                    <Text style={DropdownStyle.flatList}>∙ {item.name}</Text>
                </Pressable>
            );
        }
    }

    const ViewDrop = () => {
        if (viewDropdown) {
            return(
                <View>
                    <Pressable onPress={viewList}>
                        <View style={DropdownStyle.dropField}>
                            <Text style={DropdownStyle.nameField}>{userName}</Text>
                            <Text style={{color: 'grey'}}>↓</Text>
                        </View>
                    </Pressable>
                </View>
            );
        }
    }

    const closeUsersList = () => {
        viewList();
        setUserName('—');
    }

    const ViewCloseButton = () => {
        if(openFlatList) {
            return(
                <Pressable onPress={closeUsersList}>
                    <Text style={DropdownStyle.closeButton}>✖ Close</Text>
                </Pressable>
            );
        }
    }

    const viewList = () => {
        setOpenFlatList(!openFlatList)
        setViewDropdown(!viewDropdown)
    }

    return (
        <View>
            <Text style={DropdownStyle.whoPosts}>Who posts?</Text>
            <View style={DropdownStyle.main}>
                <ViewDrop />
                <View>
                    <ViewCloseButton />
                    <View style={{marginTop: 3,}}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
