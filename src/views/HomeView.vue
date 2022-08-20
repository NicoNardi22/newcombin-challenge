<script>
import FormComponent from "@/components/FormComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: { FormComponent, TableComponent },
  computed: {
    token() {
      console.log(this.$store.state.token);
      return this.$store.state.token;
    },
  },
  async mounted() {
    this.$store.dispatch("getTokenAPI");
  },
};
</script>

<template>
  <div class="py-4">
    <h1 class="text-2xl">Welcome! This is the HomeView</h1>
    <div class="grid grid-cols-2 bg-cyan-800 place-items-stretch">
      <FormComponent />
      <TableComponent />
    </div>
  </div>
</template>
