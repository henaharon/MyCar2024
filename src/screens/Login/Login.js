import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import A7aScreen from './screens/A7a';
import A11Screen from './screens/A11';
import A16bScreen from './screens/A16b';

const Login = () => {
    const [progress, setProgress] = useState(0);

    const setProgressCallback = useCallback(
        (value) => {
            setProgress(value);
        },
        [setProgress]
    );

    return (
        <View>
            {progress === 0 && <A7aScreen setProgress={setProgressCallback} />}
            {progress === 1 && <A11Screen setProgress={setProgressCallback} />}
            {progress === 2 && <A16bScreen setProgress={setProgressCallback}/>}
        </View>
    );
};

export default Login;
