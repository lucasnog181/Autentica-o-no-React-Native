import React, { createContext, useState, useEffect } from 'react'
import * as auth from '../service/auth'
import api from '../service/api'

import AsyncStorage from '@react-native-community/async-storage';

interface User {
    name: string,
    email: string
}


interface AuthContextData {
    signed: boolean,
    user: User | null,
    loading: boolean,
    signIn(): Promise<void>;
    singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Auth:user');
            const storageToken = await AsyncStorage.getItem('@Auth:token');

            if (storageUser && storageToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`
                setUser(JSON.parse(storageUser))

            } else if (!storageUser && !storageToken) {
                setLoading(false);
            }
        }

        loadStorageData()
    }, [])

    async function signIn() {
        const response = await auth.singIn();

        const { token, user } = response

        setUser(response.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@Auth:token', response.token);
    }

    function singOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }



    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                loading,
                signIn,
                singOut

            }}>

            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;