<template>
  <div class="my_button" v-bind:style="{ backgroundColor: color}">
    MyButtonWithClassStuleComponent
  </div>
</template>

<script lang="ts" src="./MyButtonLikeClass.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";

.my_button {
  border-radius:3px;
  border:1px solid grey;
  display: inline-block;

  @include media_small {
    font-size:0.9rem;
  }

  @include media_medium {
    font-size:1rem;
  }

  @include media_large {
    font-size:1.1rem;
  }
}

</style>
