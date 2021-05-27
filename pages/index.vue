<template>
  <div>
    <h1>Events</h1>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios
      .get('http://localhost:3000/events')
      .then((response) => {
        return {
          events: response.data, // merges with component data
        }
      })
  },
  // how vue-meta works
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>

<style></style>
