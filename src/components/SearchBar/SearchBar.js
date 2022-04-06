import React from "react";
import { TextInput, View } from 'react-native'
import styles from './SearchBarStyle'
const SearchBar = props => {

    return (
        <View style={styles.container}>
            <TextInput placeholder="Search"
                onChangeText={props.onSearch}
            />
        </View>
    )
}

export default SearchBar;