<script>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { RouterView, NavBar, FooterComponent },
  data() {
    return {
      isInactive: false,
      userActivityThrottlerTimeout: null,
      userActivityTimeout: null,
    };
  },
  methods: {
    activateActivityTracker() {
      window.addEventListener("mousemove", this.userActivityThrottler);
      window.addEventListener("scroll", this.resetUserActivityTimeout);
      window.addEventListener("keydown", this.resetUserActivityTimeout);
    },
    resetUserActivityTimeout() {
      clearTimeout(this.userActivityTimeout);
      this.userActivityTimeout = setTimeout(() => {
        this.inactiveUserAction();
      }, 120000);
    },
    userActivityThrottler() {
      if (!this.userActivityThrottlerTimeout) {
        this.userActivityThrottlerTimeout = setTimeout(() => {
          this.resetUserActivityTimeout();

          clearTimeout(this.userActivityThrottlerTimeout);
          this.userActivityThrottlerTimeout = null;
        }, 120000);
      }
    },
    inactiveUserAction() {
      this.$store.dispatch("getMembersData");
    },
  },
  beforeMount() {
    this.activateActivityTracker();
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.userActivityThrottler);
    window.removeEventListener("scroll", this.userActivityThrottler);
    window.removeEventListener("keydown", this.userActivityThrottler);
    window.removeEventListener("resize", this.userActivityThrottler);

    clearTimeout(this.userActivityTimeout);
    clearTimeout(this.userActivityThrottlerTimeout);
  },
};
</script>

<template>
  <NavBar />
  <div class="container">
    <RouterView />
  </div>
  <FooterComponent />
</template>
