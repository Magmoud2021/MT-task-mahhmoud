<template>
<div>




</div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
import FixedMenu from '~/components/FixedMenu.vue';
import Menu from '~/components/Menu.vue';
export default {
  components: { FixedMenu, Menu },
  name: 'IndexPage',
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

