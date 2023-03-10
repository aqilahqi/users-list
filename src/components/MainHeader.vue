<template>
  <q-header class="bg-white text-black row items-center q-pa-xs">
    <div class="container">
      <q-toolbar>
        <q-toolbar-title>
          <q-img
            src="~assets/logo.png"
            :width="$q.screen.lt.md ? '120px' : '170px'"
          />
        </q-toolbar-title>

        <div class="row">
          <q-btn
            flat
            :size="$q.screen.lt.md ? '12px' : '14px'"
            round
            color="black"
            icon="notifications_none"
            class="q-ml-xs q-ml-md-sm"
          />
          <q-btn
            flat
            :size="$q.screen.lt.md ? '12px' : '14px'"
            round
            color="black"
            icon="settings"
            class="q-ml-xs q-ml-md-sm"
          />
          <q-btn
            flat
            :size="$q.screen.lt.md ? '12px' : '14px'"
            round
            color="black"
            icon="logout"
            class="q-ml-xs q-ml-md-sm"
          />
        </div>
      </q-toolbar>
    </div>
  </q-header>
  <div class="user-profile bg-primary row items-end q-pa-sm">
    <div class="container">
      <div class="row items-end">
        <q-img
          src="~assets/avatar.png"
          ratio="1"
          :width="$q.screen.lt.md ? '100px' : '158px'"
          fit="contain"
          class="profile-pic"
        />
        <div class="user-name text-white q-ml-sm q-ml-md-md">
          <h3 class="text-weight-medium q-mb-xs">John Doe</h3>
          <p class="text-weight-light q-mb-none">Last online: 2 days ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-header {
  height: 90px;
}
.user-profile {
  height: 154px;
  margin-top: 90px;
  padding-bottom: 21px;
  position: relative;
  @media (max-width: $breakpoint-md-max) {
    height: 110px;
    padding-bottom: 16px;
  }
  .profile-pic {
    margin-bottom: -60px;
    @media (max-width: $breakpoint-md-max) {
      margin-bottom: -40px;
    }
  }
}
</style>
