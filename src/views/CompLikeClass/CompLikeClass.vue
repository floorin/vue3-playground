<template>
<div>
  <MyButtonLikeClass :color="'red'" />
</div>
</template>

<script lang="ts" src="./CompLikeClass.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";

.ecran-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @include media_small {
    padding-left: 5vw;
    padding-right: 5vw;
    background-color: white;
  }

  @include media_medium {
    padding-top: 5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    background-color: white;
  }

  @include media_large {
    padding-top: 5vh;
    max-width: 65vw;
    background-color: white;
  }
}



</style>
