import React from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native'
import styles from './SongCardStyles';
const SongCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.song.title}</Text>

                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.artistName}>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>
                    {props.song.isSoldOut && (
                        <View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>Tükendi</Text>
                        </View>
                    )}

                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default SongCard;