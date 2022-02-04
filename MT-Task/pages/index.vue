<template>
<div>

<TopHeader />
<Header />
<FixedMenu />
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import FixedMenu from '~/components/FixedMenu.vue';
export default {
  components: { FixedMenu },
  name: 'IndexPage'
}
</script>
