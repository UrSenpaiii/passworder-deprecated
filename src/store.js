// import {reactive, watchEffect, createApp} from "vue"
//
// const store = reactive({
//     user: JSON.parse(localStorage.getItem("user")),
// });
//
// watchEffect(() => {
//     localStorage.setItem("user", JSON.stringify(store.user));
//     console.log("watch user", store.user);
// })
//
// export default store;

const DATABASE = {
    "user@gmail.com": {name: "User", email: "user@gmail.com", roles: ["USER"]},
    "admin@gmail.com": {name: "Admin", email: "admin@gmail.com", roles: ["ADMIN"]},
    "froracle@gmail.com": {name: "frOracle", email: "froracle@gmail.com", roles: ["ADMIN", "DEVELOPER"]}
}

import {reactive, readonly} from "vue";

const get = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return null;
    }
}

const state = reactive({
    user: get("user"),
});

export default {
    user: readonly(state.user),

    registration(name, email) {
        DATABASE[email] = {name: name, email: email, roles: ["USER"]}

        console.log(DATABASE)
        console.log(DATABASE[email])
    },
    login(username, password) {
        if (password !== "aA1!asap") return;
        localStorage.setItem("user", JSON.stringify(state.user = DATABASE[username.toLowerCase()]));

        console.log(`${username} ${password}`)
    },
    rename(name) {
        state.user.username = name;
        localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout() {
        // localStorage.setItem("user", );
        state.user = {};
        localStorage.removeItem("user");
        // localStorage.clear();
    }
}