<template>
  <div>
    <form @submit.prevent="showResult">
      <h3>{{ test.title }}</h3>
      <ul>
        <li>
          <input
            v-model="studentAnswer"
            type="text"
            @input="resetResult"
          >
        </li>
      </ul>
      <button type="submit">Ответить</button>
      <div v-if="isResultVisible">
        <h4
          v-if="studentAnswer == test.rightAnswer"
          class="right"
        >
          Твой ответ "{{ studentAnswer }}" - верный
        </h4>
        <h4
          v-else
          class="wrong"
        >
          Твой ответ "{{ studentAnswer }}" - неверный
        </h4>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputTest',
  data() {
    return {
      studentAnswer: '',
      isResultVisible: false,
      test: {
        title: 'Укажи результат выражения 38%5',
        rightAnswer: 3,
      },
    };
  },
  methods: {
    showResult() {
      if (this.studentAnswer !== '') {
        this.isResultVisible = true;
        return this.isResultVisible;
      }
    },
    resetResult() {
      this.isResultVisible = false;
    },
  },
};
</script>
