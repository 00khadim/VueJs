<template>
  <v-card class="pa-4 d-flex align-center gap-4 elevation-2">
    <v-text-field
      v-model="nouvelleTache"
      label="Nouvelle tâche"
      placeholder="Que voulez-vous ajouter ?"
      hide-details
      variant="filled"
      rounded
      class="flex-grow-1"
      color="primary"
      @keyup.enter="soumettre"
    />
    <v-btn
      type="button"
      color="secondary"
      class="add-btn"
      elevation="2"
      depressed
      @click="soumettre"
    >
      <v-icon left>mdi-plus</v-icon>
      Ajouter
    </v-btn>
  </v-card>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

const nouvelleTache = ref('')
const emit = defineEmits<{
  (e: 'ajouter', valeur: string): void
}>()

function soumettre() {
  const tache = nouvelleTache.value.trim()
  if (!tache) return
  emit('ajouter', tache)
  nouvelleTache.value = ''
}
</script>

<style scoped>
.add-btn {
  border-radius: 24px;
  text-transform: none;
}
</style>
