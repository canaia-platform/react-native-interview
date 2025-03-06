import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function IndexBackup() {
    const [counter, setCounter] = useState('0');

    useEffect(() => {
        setCounter(0);
    });

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={styles.text}>Welcome to Canaia Interview</Text>

            <Button
                title="Increment"
                onPress={() => setCounter(counter + 1)}
            />

            <Text>Count: {counter}</Text>

            <TouchableOpacity onPress={() => {
                const obj = { count: counter };
                obj.count -= 1;
                setCounter(obj.count);
            }}>
                <Text>Decrement</Text>
            </TouchableOpacity>

            {counter > 5 &&
                <Text>High count!</Text>
                <Text>Keep going!</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginTop: '20px',
        '&:hover': {
            color: 'red'
        },
    }
});
