<template>
    <v-list class="mt-6">
      <v-list-item
        v-for="(tache, index) in taches"
        :key="index"
        :class="tache.fait ? 'bg-green-lighten-5' : ''"
      >
        <v-list-item-content>
          <v-list-item-title
            :style="{ textDecoration: tache.fait ? 'line-through' : 'none' }"
          >
            {{ tache.texte }}
          </v-list-item-title>
        </v-list-item-content>
  
        <v-list-item-action>
          <v-btn icon @click="$emit('changer', index)">
            <v-icon>{{ tache.fait ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline' }}</v-icon>
          </v-btn>
          <v-btn icon @click="$emit('supprimer', index)">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </template>
  
  <script lang="ts" setup>
  import type { Tache } from '../../types/tache'
  import { defineProps } from 'vue'
  
  defineProps<{ taches: Tache[] }>()
  </script>
  