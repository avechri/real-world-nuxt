<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const { data } = await $axios.get(
        'http://localhost:3000/events/' + params.id
      )
      return {
        event: data, // merges with component data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id,
      })
    }
  },
  // how vue-meta works
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about Event#' + this.event.title,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
