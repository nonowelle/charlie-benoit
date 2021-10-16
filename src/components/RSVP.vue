<template>
  <div id="rsvp" ref="rsvp" class="RSVP">
    <div class="img-rsvp"></div>

    <form
      @submit.prevent="submitForm"
      class="form-wrapper"
      novalidate
      v-if="!formSubmitted"
    >
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
      <div class="avertissement">
        <p>
          Les places au mariage étant limitées, nous vous demandons
          <b> d'être certain </b> de votre réponse avec de confirmer votre
          présence. Merci de votre compréhension!
        </p>
        <p class="important">
          <b>
            Important : chaque personne dont le nom est inscrit sur l'enveloppe
            d'invitation doit remplir le formulaire.</b
          >
        </p>
      </div>

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
      <p
        class="option"
        :class="{ radioInvalid: !picked.isValid }"
        v-if="!picked.val"
      >
        Veuillez choisir une option.
      </p>
      <div>
        <button class="button large dark">
          Envoyer ma réponse
        </button>
      </div>

      <div class="dialog" v-if="dialogOpen">
        <p>Etes-vous sur de vouloir envoyer votre reponse?</p>
        <button :click="closeDialog()">Oui!</button>
      </div>
    </form>
    <div v-if="formSubmitted" class="submitted">
      <h3 v-if="isGoing">
        Nous avons très hate de vous voir!
      </h3>
      <h3 v-else>
        Merci d'avoir envoyé votre réponse!
      </h3>

      <p>N'hésitez pas à nous contacter si vous avez des questions.</p>
      <div class="contact">
        <p>charlieduret@gmail.com</p>
        <p>514-708-2179</p>
      </div>
      <div class="contact">
        <p>benoit.billette@hotmail.com</p>
        <p>514-804-1872</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RSVP",
  data() {
    return {
      isGoing: false,

      dialogOpen: false,
      formSubmitted: false,
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
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      this.dialogOpen = false;
      this.formIsValid = true;
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (!this.email.val.match(validRegex)) {
        this.email.isValid = false;
        this.formIsValid = false;
      }

      if (!this.phone.val.match(phoneno)) {
        this.phone.isValid = false;
        this.formIsValid = false;
      }
      if (this.picked.val === "") {
        this.picked.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        alert("NOT VALID");
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: this.email.val,
        phone: this.phone.val,
        answer: this.picked.val,
      };
      console.log(this.firstName.val);

      // const formDataSent = JSON.stringify(formData);
      // console.log(formDataSent);
      const params = new URLSearchParams();
      params.append("email", formData.email);
      params.append("firstname", formData.firstName);
      params.append("lastname", formData.lastName);
      params.append("lastname", formData.answer);

      const options = {
        method: "POST",
        headers: {
          //   "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": " Content-Type",
        },
        body: params,
      };
      console.log(params.email);
      fetch("https://api-charlie.herokuapp.com/api/confirmations", options)
        .then(async (response) => {
          // const data = await JSON.parse(response);
          console.log(response);
          // return data;
          return response;
        })
        .then((data) => {
          console.log(data);
          if (data.answer === "Yes") {
            this.isGoing = true;
            console.log("ISGOING");
          }
        })
        .catch((error) => console.log("error", error));

      this.formSubmitted = true;
    },
  },
};
</script>
