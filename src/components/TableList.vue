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
</template>

<script setup>
import { ref, computed } from "vue";
import { date } from "quasar";
import { useUsersStore } from "src/stores/users";

const store = useUsersStore();
const filter = ref("");
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
  alert(`${row.name} clicked`);
}

function formatDate(d) {
  return date.formatDate(d, "D MMM YYYY");
}

function customFilter(rows, terms) {
  console.log(rows, terms);
}
</script>

<style lang="scss" scoped></style>
