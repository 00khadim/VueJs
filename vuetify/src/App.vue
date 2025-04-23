<template>
  <div id="app">
    <h1>Ma liste de tâches</h1>

    <!-- 1. Zone d'ajout : frappez votre tâche et validez -->
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

    <!-- 2. Champ de recherche -->
    <input
      v-model="searchQuery"
      placeholder="Rechercher une tâche..."
      class="search-input"
    />

    <!-- 3. Affichage des tâches filtrées -->
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
      tasks: [],
      newTaskTitle: '',
      searchQuery: '',
      nextId: 1,
    };
  },
  computed: {
    filteredTasks() {
      const q = this.searchQuery.trim().toLowerCase();
      return q
        ? this.tasks.filter(t => t.title.toLowerCase().includes(q))
        : this.tasks;
    },
  },
  methods: {
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

.add-form {
  display: flex;
  margin-bottom: 1em;
}

.input-new {
  flex: 1;
  padding: 0.5em;
  font-size: 1em;
  box-sizing: border-box;
}

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

.search-input {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  box-sizing: border-box;
  font-size: 1em;
}

.input-new::placeholder,
.search-input::placeholder {
  color: #666666;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

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
