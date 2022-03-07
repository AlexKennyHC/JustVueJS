<template>
  <HeaderComponent />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    HeaderComponent
  },
}
</script>