<template>
<span class="span__input">{{numberToDisplay}}</span>
</template>


<script lang="ts" src="./DisplayNumber.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";
.span__input{
  @include media_small {
   font-size:1rem;
  }

  @include media_medium {
    font-size:1.2rem;
  }

  @include media_large {
    font-size:1.4rem;
  }
}
</style>
