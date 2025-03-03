import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Base URL — make sure this is correct.
const BASE_URL = "http://10.65.43.87:8000/api/users/";   // Note the trailing slash

// ✅ Login function
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/login/`, {  // Fixed path
            email,
            password,
        });

        const { access, refresh, user } = response.data;

        // ✅ Save tokens and user to AsyncStorage
        await AsyncStorage.setItem('accessToken', access);
        await AsyncStorage.setItem('refreshToken', refresh);
        await AsyncStorage.setItem('user', JSON.stringify(user));

        return { success: true, accessToken: access, user };

    } catch (error) {
        console.error('Login Error:', error?.response?.data);
        return {
            success: false,
            error: error?.response?.data?.detail || "Something went wrong",
        };
    }
};

// ✅ Register function (for customer)
export const register = async (formData) => {
    const url = `${BASE_URL}register/customer/`;  // Fixed path

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, message: 'Registration successful' };
        } else {
            return { success: false, error: data?.message || 'Registration failed' };
        }
    } catch (error) {
        console.error('Registration Error:', error);
        return { success: false, error: 'Something went wrong' };
    }
};

// ✅ Refresh Token
export const refreshAccessToken = async () => {
    const url = `${BASE_URL}auth/token/refresh/`;  // Fixed path
    const refresh = await AsyncStorage.getItem('refreshToken');

    if (!refresh) {
        return { success: false, error: 'No refresh token found' };
    }

    try {
        const response = await axios.post(url, { refresh });

        const { access } = response.data;

        await AsyncStorage.setItem('accessToken', access);
        return { success: true };
    } catch (error) {
        console.error('Refresh Token Error:', error?.response?.data);
        return { success: false, error: 'Failed to refresh token' };
    }
};

// ✅ Auto Login (check token and fetch profile)
export const autoLogin = async () => {
    const token = await AsyncStorage.getItem('accessToken');

    if (!token) {
        return { success: false, error: 'No access token found' };
    }

    try {
        const profileUrl = `${BASE_URL}profile/`;  // Adjust if needed

        const response = await fetch(profileUrl, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
            const user = await response.json();
            await AsyncStorage.setItem('user', JSON.stringify(user));
            return { success: true, user };
        } else if (response.status === 401) {
            // Token expired, try refresh
            const refreshResult = await refreshAccessToken();
            if (refreshResult.success) {
                return autoLogin();  // Retry auto-login with new token
            } else {
                return { success: false, error: 'Session expired, please login again' };
            }
        } else {
            return { success: false, error: 'Failed to fetch profile' };
        }
    } catch (error) {
        console.error('AutoLogin Error:', error);
        return { success: false, error: 'Something went wrong' };
    }
};

// ✅ Logout
export const logout = async () => {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']);
};
