<template>
  <div id="rsvp" ref="rsvp" class="RSVP">
    <div class="img-rsvp"></div>

    <form @submit.prevent="submitForm" class="form-wrapper">
      <svg
        width="48"
        height="30"
        viewBox="0 0 48 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6.50009"
          y="6.5"
          width="35"
          height="23"
          rx="1.5"
          fill="#FAF8EF"
          stroke="#02033B"
        />
        <path
          d="M22.9953 23.4202L7.41351 9.36377C6.39339 8.44351 7.04438 6.75 8.41825 6.75L39.5818 6.75C40.9556 6.75 41.6066 8.44351 40.5865 9.36377L25.0047 23.4202C24.4339 23.9352 23.5661 23.9352 22.9953 23.4202Z"
          fill="#FAF8EF"
          stroke="#02033B"
        />
      </svg>

      <h3>Répondre à l'invitation</h3>
      <div class="name-wrapper">
        <input
          type="text"
          id="firstname"
          required
          name="firstname"
          v-model="firstName"
          placeholder="Prénom"
        />
        <input
          type="text"
          id="lastname"
          required
          name="lastname"
          v-model="lastName"
          placeholder="Nom"
        />
      </div>
      <input
        type="text"
        id="email"
        required
        name="email"
        v-model="email"
        placeholder="Courriel"
      />
      <div class="checkbox-wrapper">
        <label class="checkbox">
          <input type="checkbox" id="yes" v-model="response" />
          <span>J'y serai</span>
        </label>
        <label class="checkbox">
          <input type="checkbox" id="no" v-model="response" />
          <span>Je ne pourrai y être</span>
        </label>
      </div>

      <button class="button large dark">
        Envoyer ma reponse
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: " ",
      lastName: "",
      email: "",
      response: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        email: this.email,
        response: this.response,
      };
      console.log(formData);
    },
  },
  name: "RSVP",
};
</script>
