<template>
<section class="default-layout">
  <Header />

    <nuxt />


</section>

</template>
<script>

export default {
  name: 'DefaultLayout',
   head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr',
      },
      link: [
        {
          rel: 'canonical',
          href: this.$config.BASE_URL + this.$route.path,
        },
      ],
    }
  },


}
</script>
<style  scoped>

</style>
