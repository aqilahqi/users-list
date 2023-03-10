import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "boot/axios";

export const useUsersStore = defineStore("users", () => {
  const users = ref([]);

  function getUsers() {
    console.log("im here");
    return new Promise((resolve, reject) => {
      api
        .get("/?results=20.")
        .then((response) => {
          users.value = [];
          let results = response.data.results;

          results.map((result) => {
            let obj = Object.assign(result, {
              fullname: `${result.name.title} ${result.name.first} ${result.name.last}`,
            });
            users.value.push(obj);
          });
          resolve("users list retrieved");
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return { users, getUsers };
});
