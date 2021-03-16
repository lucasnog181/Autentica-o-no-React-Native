import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import authContext from '../providers/auth'

import AppRoutes from '../routes/app.routes'
import AuthRoutes from '../routes/auth.routes'

const routes: React.FC = () => {

    const { signed, loading } = useContext(authContext)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default routes;