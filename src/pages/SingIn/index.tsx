import React, { useContext } from 'react'

import { View, Button, StyleSheet } from 'react-native'

import AuthContext from '../../providers/auth'

const SingIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext)

    function handlerSingIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="SingIn" onPress={handlerSingIn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});


export default SingIn;

