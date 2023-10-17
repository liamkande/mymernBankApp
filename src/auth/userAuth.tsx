import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authService from './authService';

// Check if a valid user is stored in local storage
const user = localStorage.getItem('user');
const parsedUser = user ? JSON.parse(user) : null;

// Define the initial state
const initialState = {
    user: parsedUser,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Define an async thunk for user registration with a specific payload type
export const register = createAsyncThunk<User, User, { rejectValue: string }>(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            const response = await authService.register(user);
            return response.data; // Adjust this based on your actual response structure
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Define your Redux slice
const userAuth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        },
    },
});

export default userAuth.reducer;

// Define the 'User' type
type User = {
    name: string;
    email: string;
    password: string;
};
