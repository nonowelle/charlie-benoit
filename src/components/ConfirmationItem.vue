<template>
  <div>
    <div v-for="person in result" :key="person._id" class="confirmation">
      {{ person.firstName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationsItem",

  data() {
    return {
      result: [],
      responseAvailable: false,
      apiKey: process.env.API_KEY,
    };
  },

  created() {
    fetch("http://localhost:8080/api/", {
      mode: "no-cors",
    }).then(async (data) => {
      this.result = data.json();
      console.log(this.result);
    });
  },
};
</script>
