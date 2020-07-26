<template>
  <div>
    <h1>Урок</h1>
    <input-test/>
    <radio-test/>
    <checkbox-test/>
  </div>
</template>

<script>
import RadioTest from '../components/practice/radioTest';
import InputTest from '../components/practice/inputTest';
import CheckboxTest from '../components/practice/checkboxTest';

export default {
  name: 'LessonPage',
  components: {
    RadioTest,
    InputTest,
    CheckboxTest,
  },
};
</script>

<style>
  li {
    list-style-type: none;
   }
  .right {
    color:green;
  }
  .wrong {
    color:red;
  }
</style>
