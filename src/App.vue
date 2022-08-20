<script>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { RouterView, NavBar, FooterComponent },
};
</script>

<template>
  <NavBar />
  <div class="container">
    <RouterView />
  </div>
  <FooterComponent />
</template>
