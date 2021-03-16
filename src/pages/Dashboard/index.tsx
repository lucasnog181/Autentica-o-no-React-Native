import React, { useContext } from 'react'

import { View, Button, StyleSheet, Text } from 'react-native'

import AuthContext from '../../providers/auth'

const Dashboard: React.FC = () => {
    const { singOut, user } = useContext(AuthContext)


    function handlerSingOut() {
        singOut();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user?.name}</Text>
            <Text style={styles.titleEmail}>{user.email}</Text>
            <Button title="Sing Out" onPress={handlerSingOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },

    title: { marginBottom: 10 },

    titleEmail: { marginBottom: 30 }
});


export default Dashboard;

