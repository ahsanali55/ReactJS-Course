import { configureStore, createSlice } from "@reduxjs/toolkit";


const postListSlice = createSlice ({
    name: "postLists",
    initialState: { postlist: [{
    id: "1",
    title: "Going to Murree",
    body: "hi, Friends I am going to Murree for vacations. Hope to enjoy alot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "Murree", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass Semister",
    body: "Alhumdulilah, i have completed 5 Semisters, and now 6th Semister is on going. Inshallah i will get my degree.",
    reactions: 20,
    userId: "user-12",
    tags: ["graduations", "Believable", "Enjoying"],
  },
]
},
    reducers: {
        addPostList: (state, action) => {
            state.postlist = [action.payload ,...state.postlist]
        },
        deletePost: (state, action) => {
            state.postlist = state.postlist.filter(post => {
                return post.id !== action.payload
            })
        }
    }
})

const postListStore = configureStore({
    reducer: {
        postLists: postListSlice.reducer,
         
    }
})
export default postListStore;
export const postlistAction = postListSlice.actions;