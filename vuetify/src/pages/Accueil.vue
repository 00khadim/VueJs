<template>
    <FormulaireTache @ajouter="ajouter" />
    <ListeTaches :taches="taches" @supprimer="supprimer" @changer="changer" />
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  import type { Tache } from '../types/tache'
  import FormulaireTache from '../components/taches/FormulaireTache.vue'
  import ListeTaches from '../components/taches/ListeTaches.vue'
  
  const taches = ref<Tache[]>([])
  
  if (localStorage.getItem('taches')) {
    try {
      taches.value = JSON.parse(localStorage.getItem('taches') || '[]')
    } catch {
      taches.value = []
    }
  }
  
  watch(taches, (nouvelles) => {
    localStorage.setItem('taches', JSON.stringify(nouvelles))
  }, { deep: true })
  
  function ajouter(texte: string) {
    taches.value.push({ texte, fait: false })
  }
  
  function supprimer(index: number) {
    taches.value.splice(index, 1)
  }
  
  function changer(index: number) {
    taches.value[index].fait = !taches.value[index].fait
  }
  </script>
  