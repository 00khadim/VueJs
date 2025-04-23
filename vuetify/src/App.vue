<template>
  <div id="app">
    <h1>Ma liste de tâches</h1>

    <!-- Formulaire d'ajout de tâche : entrez un titre et appuyez sur Entrée ou cliquez sur Ajouter -->
    <div class="add-form">
      <input
        v-model="newTaskTitle"
        ref="taskInput"
        placeholder="Nouvelle tâche..."
        class="input-new"
        @keyup.enter="addTask"
        style="color: black;"
      />
      <button type="button" @click="addTask">
        Ajouter
      </button>
    </div>

    <!-- Champ de recherche : filtre les tâches par mot-clé saisi -->
    <input
      v-model="searchQuery"
      placeholder="Rechercher une tâche..."
      class="search-input"
    />

    <!-- Liste des tâches filtrées : affiche uniquement celles qui correspondent à la recherche -->
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [],         // Stocke toutes les tâches ajoutées
      newTaskTitle: '',  // Valeur en cours de saisie dans l'input
      searchQuery: '',   // Texte utilisé pour filtrer les tâches
      nextId: 1,         // Générateur d'identifiants uniques pour chaque tâche
    };
  },
  computed: {
    // Renvoie la liste des tâches dont le titre inclut le texte de recherche
    filteredTasks() {
      const query = this.searchQuery.trim().toLowerCase();
      return query
        ? this.tasks.filter(task => task.title.toLowerCase().includes(query))
        : this.tasks;
    },
  },
  methods: {
    // Ajoute une nouvelle tâche si le champ n'est pas vide, puis remet le focus
    addTask() {
      const title = this.newTaskTitle.trim();
      if (!title) return;
      this.tasks.push({ id: this.nextId++, title });
      this.newTaskTitle = '';
      this.$nextTick(() => this.$refs.taskInput.focus());
    },
  },
};
</script>

<style>
#app {
  max-width: 400px;
  margin: 2em auto;
  padding: 1em;
  background: #fafafa;
  border-radius: 8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333333;
}

/* Disposition du formulaire d'ajout */
.add-form {
  display: flex;
  margin-bottom: 1em;
}

/* Style de l'input de création */
.input-new {
  flex: 1;
  padding: 0.5em;
  font-size: 1em;
  box-sizing: border-box;
  color: #000000; /* Texte saisi en noir */
}

/* Bouton d'ajout */
.add-form button {
  padding: 0.5em 1em;
  font-size: 1em;
  margin-left: 0.5em;
  cursor: pointer;
  background: #007bff;
  border: none;
  border-radius: 4px;
  color: #ffffff;
}

/* Style du champ de recherche */
.search-input {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  box-sizing: border-box;
  font-size: 1em;
}

/* Placeholder plus foncé pour meilleure lisibilité */
.input-new::placeholder,
.search-input::placeholder {
  color: #666666;
}

/* Liste sans puces ni marges */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Style de chaque élément de tâche */
li {
  background: #ffffff;
  color: #333333;
  margin-bottom: 0.5em;
  padding: 0.75em;
  border: 1px solid #dddddd;
  border-radius: 4px;
  text-align: left;
}
</style>
