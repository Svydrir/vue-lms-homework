<template>
  <div>
    <form @submit.prevent="showResult">
      <h3>{{ test.title }}</h3>
      <ul>
        <li
          v-for="(variant, i) in test.answerVariants"
          :key="test.answerVariants[i]"
        >
          <input
            :id="i"
            v-model="studentAnswer"
            type="radio"
            :value="test.answerVariants[i]"
            @click="resetResult"
          >
          <label :for="i">{{ test.answerVariants[i] }}</label>
        </li>
      </ul>
      <button type="submit">Ответить</button>
      <div v-if="resultIsVisible">
        <h4
          v-if="studentAnswer === 'Оператор присваивания'"
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
  name: 'RadioTest',
  data() {
    return {
      studentAnswer: '',
      resultIsVisible: false,
      test: {
        title: 'Как называется "=" (знак равно) в JS?',
        rightAnswer: 'Оператор присваивания',
        answerVariants: ['Оператор присваивания', 'Равно чему-либо', 'Эквивалентно чему-либо'],
      },
    };
  },
  methods: {
    showResult() {
      if (this.studentAnswer !== '') {
        this.resultIsVisible = true;
        return this.resultIsVisible;
      }
    },
    resetResult() {
      this.resultIsVisible = false;
    },
  },
};
</script>
