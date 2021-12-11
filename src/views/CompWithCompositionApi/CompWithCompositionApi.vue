<template>
  <div class="ecran-container">
    <div class="form__input">
      Nume: {{person.lastName}}
    </div>

    <div class="form__input">
      Prenume: {{person.firstName}}
    </div>

    <q-btn color="primary" label="modify using compositionApi" @click="modifyPerson"/>

    <div style="display:flex">
      <q-btn outline color="primary" label="Display Number 456" @click="modifyNumberToDisplay(456)"/>
      <q-btn outline color="primary" label="Display Number 323" @click="modifyNumberToDisplay(323)"/>
      <q-btn outline color="primary" label="Display Number 123" @click="modifyNumberToDisplay(123)"/>
    </div>

    <DisplayNumber :numberToDisplay="numberToDisplay"/>
  </div>
</template>

<script lang="ts" src="./CompWithCompositionApi.ts" />

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

.form__input{
  @include media_small {
    min-width:80vw;
  }

  @include media_medium {
    min-width:30rem;
  }

  @include media_large {
    min-width:37rem;
  }
}
</style>
