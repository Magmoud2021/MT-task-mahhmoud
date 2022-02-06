<template>
  <div class="socialMedia">
    <ul class="socialMedia__list d-flex align-items-center">
      <li class="socialMedia__item">
        <a :href="socialMedia.facebook" class="socialMedia__link">
          <i class="socialMedia__icon fab fa-facebook-f"></i>
        </a>
      </li>

      <li class="socialMedia__item">
        <a :href="socialMedia.instagram" class="socialMedia__link">
          <i class="socialMedia__icon fab fa-instagram"></i>
        </a>
      </li>

      <li class="socialMedia__item">
        <a :href="socialMedia.twitter" class="socialMedia__link">
          <i class="socialMedia__icon fab fa-twitter"></i>
        </a>
      </li>

      <li class="socialMedia__item">
        <a :href="socialMedia.youtube" class="socialMedia__link">
          <i class="socialMedia__icon fab fa-youtube"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchStore } from "~/mixin/fetchStore";

export default {
  name: "SocialMedia",
  mixins: [
    fetchStore([
      {
        stateName: "socialMedia",
        single: true,
      },
    ]),
  ],
};
</script>

<style lang="scss" scoped>
@import "~assets/css/var.scss";

.socialMedia {
  &__item {
    margin: 0 5px;
    font-size: 25px;

    &:last-of-type {
      margin-right: 0;
    }

    &:lang(ar) {
      &:last-of-type {
        margin-left: 0;
        margin-right: 5px;
      }
    }
  }

  &__icon {
    color: map-get($colors, accent);
  }
}
</style>
