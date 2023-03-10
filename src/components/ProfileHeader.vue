<template>
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
        <div class="user-name text-white q-ml-sm q-ml-md-md row-md items-end">
          <div>
            <h3 class="text-weight-medium q-mb-xs">John Doe</h3>
            <p class="text-weight-light q-mb-none">Last online: 2 days ago</p>
          </div>
          <div class="row q-mt-sm q-mt-md-none">
            <q-btn
              size="md"
              unelevated
              color="white"
              text-color="primary"
              class="text-capitalize q-ml-md-md"
              ><q-icon
                name="fa-solid fa-paper-plane"
                :size="$q.screen.lt.md ? '12px' : '16px'"
              /><span class="gt-sm q-ml-sm">Add friend</span></q-btn
            >
            <q-btn
              size="mg"
              outline
              color="white"
              class="text-capitalize q-ml-sm"
              ><q-icon
                name="add"
                :size="$q.screen.lt.md ? '12px' : '16px'"
              /><span class="gt-sm q-ml-sm">Add friend</span></q-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.user-profile {
  padding-bottom: 16px;
  padding-top: 16px;
  position: relative;
  @media (min-width: $breakpoint-md-min) {
    padding-bottom: 21px;
    min-height: 154px;
  }
  .profile-pic {
    @media (min-width: $breakpoint-md-min) {
      margin-bottom: -60px;
      // margin-bottom: -40px;
    }
  }
}
</style>
