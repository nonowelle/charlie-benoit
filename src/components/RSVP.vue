<template>
  <div id="rsvp" ref="rsvp" class="RSVP">
    <div class="img-rsvp"></div>

    <form @submit.prevent="submitForm" class="form-wrapper" novalidate>
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
          :class="{ invalid: !firstName.isValid }"
          type="text"
          id="firstname"
          required
          name="firstname"
          v-model="firstName.val"
          placeholder="Prénom"
          @blur="clearValidity('firstName')"
        />

        <input
          @blur="clearValidity('lastName')"
          :class="{ invalid: !lastName.isValid }"
          type="text"
          id="lastname"
          required
          name="lastname"
          v-model="lastName.val"
          placeholder="Nom"
        />
      </div>
      <input
        :class="{ invalid: !lastName.isValid }"
        @blur="clearValidity('email')"
        type="text"
        id="email"
        required
        name="email"
        v-model="email.val"
        placeholder="Courriel"
      />
      <div class="checkbox-wrapper">
        <label class="checkbox" for="yes">
          <input
            @blur="clearValidity('response')"
            type="checkbox"
            id="yes"
            v-model="response.val"
            :class="{ invalid: !response.isValid }"
          />
          <span>J'y serai</span>
        </label>
        <label class="checkbox" for="no">
          <input
            type="checkbox"
            id="no"
            v-model="responseNo.val"
            :class="{ invalid: !responseNo.isValid }"
          />
          <span>Je ne pourrai y être</span>
        </label>
        <p v-if="!firstName.isValid">
          Vous devez selectionner une option
        </p>
      </div>

      <button class="button large dark">
        Envoyer ma reponse
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RSVP",
  data() {
    return {
      formIsValid: true,
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      response: {
        val: "",
      },
      responseNo: {
        val: "",
      },
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (!this.response.val === "") {
        this.response.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        first: this.firstName,
        last: this.lastName,
        email: this.email,
        response: this.response,
        responseNo: this.responseNo,
      };
      console.log(formData);
    },
  },
};
</script>
