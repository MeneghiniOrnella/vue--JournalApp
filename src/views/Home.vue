<template>
  <div class="home">
    <img alt="JournalApp logo" src="../assets/logo.jpg">
    <h1>JournalApp</h1>
    <button @click="goToDaybook" class="btn btn-primary">first</button>
    <button @click="goToDaybook" class="btn btn-secondary">second</button>
    <button @click="goToDaybook" class="btn btn-success">third</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>