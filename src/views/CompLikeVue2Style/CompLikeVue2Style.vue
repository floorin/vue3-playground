<template>
  <div class="ecran-container">
    FullName:{{getFullName}}
    <div class="form__input">
      Nume: {{person.lastName}}
    </div>

    <div class="form__input">
      Prenume: {{person.firstName}}
    </div>

    <q-btn color="primary" label="modify using methods" @click="modifyPerson"/>

    <div class="ecran-container--2">
      <q-btn color="primary" label="getPersonsFromDB" @click="getPersonsFromDB"/>
    <q-select class="col-10" outlined v-model="selectedPerson" :options="optionsPersons"
              option-value="marca"
              option-label="firstName"
              emit-value
              map-options
              lazy-rules
              dense
    />

    {{selectedPerson}}
    </div>
  </div>
</template>

<script lang="ts" src="./CompLikeVue2Style.ts" />

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

.ecran-container--2 {
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
