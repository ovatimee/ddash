import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserDataWithUsername } from '../common/data/userDummyData';
const AuthContext = createContext({});
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('facit_authUsername') || '');
    const [userData, setUserData] = useState({});
    useEffect(() => {
        localStorage.setItem('facit_authUsername', user);
    }, [user]);
    useEffect(() => {
        if (user !== '') {
            setUserData(getUserDataWithUsername(user));
        }
        else {
            setUserData({});
        }
    }, [user]);
    const value = useMemo(() => ({
        user,
        setUser,
        userData,
    }), [user, userData]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AuthContext;
