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
</template>

<script setup></script>

<style lang="scss" scoped>
.q-header {
  height: 90px;
}
</style>
