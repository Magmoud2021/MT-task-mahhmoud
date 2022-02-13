<template>
  <div class="container">
    <div class="title mb-3">
      <h1>{{ title }}</h1>
      <hr />
      <p class="mt-2 mb-2">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideSectionHeadline',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/var';

h3 {
  color: #5d5d5d;
  font-size: 30px;
  font-weight: bold;
}

hr {
  width: 34.9px;
  height: 2px;
  background-color: map-get($colors, accent);
}

p {
  font-size: 18px;
  line-height: 1.8;
  color: #737373;
}
</style>
