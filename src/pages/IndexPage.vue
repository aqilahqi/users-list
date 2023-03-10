<template>
  <q-page>
    <div>
      <ProfileHeader />
      <div class="q-pa-md"><TableList /></div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useUsersStore } from "src/stores/users";
import ProfileHeader from "src/components/ProfileHeader.vue";
import TableList from "src/components/TableList.vue";

const store = useUsersStore();

onMounted(() => {
  store.getUsers();
});
</script>

<style lang="scss" scoped></style>
