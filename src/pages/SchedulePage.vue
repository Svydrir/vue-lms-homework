<template>
  <div>
    <h1>Расписание занятий</h1>
    <div
      v-for="(lesson) in lessons"
      :key="lesson.id"
      class="lesson"
    >
      <h2>Занятие № {{ lesson.id }}</h2>
      <h3>Тема: <router-link to="/lesson">{{ lesson.title }}</router-link></h3>
      <h4>Лектор: {{ lesson.teacher }}</h4>
      <span>
        Дата занятия: {{ lesson.date }}
        <br>
        Время занятия: {{ lesson.time }}
      </span>
    </div>
  </div>
</template>

<script>
import lessons from '../static/schedule.js';

export default {
  name: 'SchedulePage',
  data() {
    return {
      lessons,
    };
  },
};
</script>

<style scoped>
.lesson{
    border-width: 1;
    border-style: solid;
    border-color: rgba(92, 92, 92, 0.973);
    margin-bottom: 5px;
    padding: 0px 10px 10px;
    }
</style>
