import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Index');  // Navigate to IndexScreen after 1 sec
        }, 2000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/images/yatch2.png')}  // Replace with your splash image
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',  // Adjust background color if needed
    },
    logo: {
        width: 200,
        height: 200,
    },
});
