<template>
  <q-table
    flat
    :filter="filter"
    :rows="rows"
    :columns="columns"
    row-key="id.name"
    table-class="custom-table"
    table-header-class="text-grey-6"
  >
    <template v-slot:top-right>
      <q-input
        debounce="300"
        color="primary"
        v-model="filter"
        placeholder="Search..."
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props" @click="onRowClick(props.row)">
        <q-td key="date" :props="props">
          <span class="text-grey-6">{{
            formatDate(props.row.registered.date)
          }}</span>
        </q-td>
        <q-td key="name" :props="props" class="highlight">
          <span class="text-weight-medium">{{ props.row.fullname }} </span>
        </q-td>
        <q-td key="gender" :props="props">
          <span class="text-capitalize text-grey-6">{{
            props.row.gender
          }}</span>
        </q-td>
        <q-td key="location" :props="props">
          <span class="text-capitalize">{{ props.row.location.country }}</span>
        </q-td>
        <q-td key="email" :props="props">
          <span class="text-grey-6">{{ props.row.email }}</span>
        </q-td>
      </q-tr>
    </template>
  </q-table>

  <q-dialog v-model="openDialog">
    <q-card class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h4 text-weight-bold">{{ single.fullname }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup color="grey-6" />
      </q-card-section>

      <q-card-section>
        <table>
          <tbody>
            <tr>
              <td><span class="text-grey-6">Date:</span></td>
              <td>
                <span class="q-ml-lg">{{
                  formatDate(single.registered.date)
                }}</span>
              </td>
            </tr>
            <tr>
              <td><span class="text-grey-6">Gender:</span></td>
              <td>
                <span class="q-ml-lg text-capitalize">{{ single.gender }}</span>
              </td>
            </tr>
            <tr>
              <td><span class="text-grey-6">Country:</span></td>
              <td>
                <span class="q-ml-lg text-capitalize">{{
                  single.location.country
                }}</span>
              </td>
            </tr>
            <tr>
              <td><span class="text-grey-6">Email:</span></td>
              <td>
                <span class="q-ml-lg">{{ single.email }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar, date, Dialog } from "quasar";
import { useUsersStore } from "src/stores/users";

const store = useUsersStore();
const filter = ref("");
const single = ref(null);
const openDialog = ref(false);
const rows = computed(() => {
  return store.users;
});

const columns = ref([
  {
    name: "date",
    required: true,
    label: "Date",
    align: "left",
    sortable: true,
    field: (row) => row.registered.date,
    format: (val) => `${val}`,
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    sortable: true,
    field: (row) => row.fullname,
    format: (val) => `${val}`,
  },
  {
    name: "gender",
    required: true,
    label: "Gender",
    align: "left",
    sortable: true,
    field: (row) => row.gender,
    format: (val) => `${val}`,
  },
  {
    name: "location",
    required: true,
    label: "Country",
    align: "left",
    sortable: true,
    field: (row) => row.location.country,
    format: (val) => `${val}`,
  },
  {
    name: "email",
    required: true,
    label: "Email",
    align: "right",
    sortable: true,
    field: (row) => row.email,
    format: (val) => `${val}`,
  },
]);

function onRowClick(row) {
  single.value = row;
  openDialog.value = true;
}

function formatDate(d) {
  return date.formatDate(d, "D MMM YYYY");
}
</script>

<style lang="scss" scoped></style>
