<template>
  <nuxt-link
    :to="url"
    class="btn"
    :class="{ 'btn--outline': outline, 'btn--transparent': transparent }"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/var.scss';

.btn {
  padding: 7px 12px;
  min-width: 175px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  box-shadow: unset;
  border-radius: 8px;
  border: 2px solid map-get($colors, accent);
  background-color: map-get($colors, accent);

  &--outline {
    color: map-get($colors, lightAccent);
    border-color: map-get($colors, lightAccent);
    background-color: transparent;
  }

  &--transparent {
    border-color: transparent;
    background-color: transparent;
  }

  &:hover {
    color: #fff;
    border-color: map-get($colors, lightAccent);
    background-color: map-get($colors, lightAccent);
  }
}
</style>
