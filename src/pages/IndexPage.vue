<template>
  <q-page>
    <div>
      <ProfileHeader />
      <div class="q-pa-md"><TableList /></div>
    </div>
  </q-page>
</template>

<script setup>
import ProfileHeader from "src/components/ProfileHeader.vue";
import TableList from "src/components/TableList.vue";
</script>

<style lang="scss" scoped></style>
