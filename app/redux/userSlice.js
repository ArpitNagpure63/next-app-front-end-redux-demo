const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userList: [],
    posts: [],
    isLoading: false,
    isError: false,
};

export const fetchPosts = createAsyncThunk('posts', async () => {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            };
            state.userList = [...state.userList, data];
        },
        removeUser: (state, action) => {
            const newUserList = state.userList.filter((item) => item.id !== action.payload);
            state.userList = [...newUserList];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = [...action.payload];
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;