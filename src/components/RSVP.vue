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

      <div class="input-wrapper">
        <input
          :class="{ invalid: !email.isValid }"
          @blur="clearValidity('email')"
          type="text"
          id="email"
          required
          name="email"
          v-model="email.val"
          placeholder="Courriel"
        />
      </div>

      <div class="input-wrapper">
        <input
          :class="{ invalid: !phone.isValid }"
          @blur="clearValidity('phone')"
          type="text"
          id="phone"
          required
          name="phone"
          v-model="phone.val"
          placeholder="Téléphone"
        />
      </div>

      <div class="radio-wrapper">
        <label class="radio-label" for="yes">
          <input type="radio" id="yes" value="Yes" v-model="picked.val" />
          <span>J'y serai</span>
        </label>
        <label class="radio-label" for="no">
          <input type="radio" id="no" value="No" v-model="picked.val" />
          <span>Je ne pourrai y être</span>
        </label>
      </div>

      <div class="invalid-response" v-if="picked.val === ''">
        <p>Vous devez sélectionner une option</p>
      </div>

      <button class="button large dark">
        Envoyer ma réponse
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
      phone: {
        val: "",
        isValid: true,
      },
      picked: {
        val: "",
        isValid: true,
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
      if (this.phone.val === "") {
        this.phone.isValid = false;
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
      };
      console.log(formData);
    },
  },
};
</script>
