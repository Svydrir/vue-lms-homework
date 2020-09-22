<template>
  <div>
    <form @submit.prevent="checkAnswer">
      <h3>Выбери допустимые названия для переменных в JS</h3>
      <ul>
        <li
          v-for="(variant, i) in test.answerVariants"
          :key="test.answerVariants[i]"
        >
          <input
            :id="i"
            v-model="studentAnswer"
            type="checkbox"
            :value="test.answerVariants[i]"
            @click="resetResult"
          >
          <label :for="i">{{ test.answerVariants[i] }}</label>
        </li>
      </ul>
      <button
        type="submit"
        @click="showResult"
      >
        Ответить
      </button>
      <div v-if="resultIsVisible">
        <h4
          v-if="isRightAnswer"
          class="right"
        >
          Твой ответ "{{ studentAnswer.join(', ') }}" - верный
        </h4>
        <h4
          v-else
          class="wrong"
        >
          Твой ответ "{{ studentAnswer.join(', ') }}" - неверный
        </h4>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CheckboxTest',
  data() {
    return {
      studentAnswer: [],
      resultIsVisible: false,
      isRightAnswer: false,
      test: {
        title: 'Выбери допустимые названия для переменных в JS',
        rightAnswer: ['_module', 'firstNumber'],
        answerVariants: ['total%sum', '1tv', '_module', 'firstNumber'],
      },
    };
  },
  methods: {
    showResult() {
      if (this.studentAnswer.length === 0) {
        this.resultIsVisible = false;
        return this.resultIsVisible;
      }
      this.resultIsVisible = true;
    },
    resetResult() {
      this.resultIsVisible = false;
    },
    checkAnswer() {
      if (JSON.stringify(this.studentAnswer.sort()) === JSON.stringify(this.test.rightAnswer)) {
        this.isRightAnswer = true;
        return this.isRightAnswer;
      }
    },
  },
};
</script>
