<template>
  <q-list>
    <q-item  clickable v-ripple @click="goToView('CompLikeVue2Style')">
      <q-item-section avatar>
        <q-icon color="primary" name="system_update_alt" />
      </q-item-section>
      <q-item-section>CompLikeVue2Style</q-item-section>
    </q-item>

    <q-item  clickable v-ripple @click="goToView('CompWithCompositionApi')">
      <q-item-section avatar>
        <q-icon color="primary" name="layers" />
      </q-item-section>
      <q-item-section>CompWithCompositionApi</q-item-section>
    </q-item>

    <q-item  clickable v-ripple @click="goToView('CompLikeClass')">
      <q-item-section avatar>
        <q-icon color="primary" name="layers" />
      </q-item-section>
      <q-item-section>CompLikeClass</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" src="./MenuApp.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";

</style>
