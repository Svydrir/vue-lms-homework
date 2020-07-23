<template>
  <div>
    <h3>Разделы</h3>
    <ul>
      <li>
        <router-link
          to="/"
          exact
        >
          Главная
        </router-link>
      </li>
      <li><router-link to="/schedule">Расписание</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
};
</script>

<style scoped>
a.router-link-active, li.router-link-active>a {
  font-weight: bold;
}
</style>
