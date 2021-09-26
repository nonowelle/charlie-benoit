<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      invites: [
        {
          id: 1,
          firstName: "Julien",
          lastName: "Poitout",
          email: "julien@gmail.com",
        },
        {
          id: 2,
          firstName: "Marie-Eve",
          lastName: "Noel",
          email: "men@gmail.com",
        },
      ],
    };
  },
};
</script>
