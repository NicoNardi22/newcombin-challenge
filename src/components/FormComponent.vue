<script>
import { submitMember } from "../../services/services";
export default {
  data() {
    return {
      inputClass:
        "w-full h-12 rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40",
      resetBtnClass:
        "border border-neutral-500 rounded-full h-16 w-16 bg-gray-700 hover:bg-gray-600 text-white",
      saveBtnClass:
        "border border-neutral-500 rounded-full h-16 w-16 bg-green-700 hover:bg-green-600 text-white",
      firstName: "",
      lastName: "",
      address: "",
      ssn: "",
      errors: [],
    };
  },
  props: {
    members: Array,
  },
  methods: {
    resetInputs() {
      this.firstName = "";
      this.lastName = "";
      this.address = "";
      this.ssn = "";
    },
    checkForm() {
      this.errors = [];

      if (!this.firstName) {
        this.errors.push("First name required.");
      }
      if (!this.lastName) {
        this.errors.push("Last name required.");
      }
      if (!this.address) {
        this.errors.push("Address is required.");
      }
      if (!this.ssn) {
        this.errors.push("SSN is required.");
      } else if (!this.validateSSN(this.ssn)) {
        this.errors.push("SSN must have the format ###-##-####");
      } else if (this.checkDuplicateSSN(this.ssn)) {
        this.errors.push("SSN is duplicate");
      }

      if (!this.errors.length) {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          ssn: this.ssn,
        };

        submitMember(data, this.$store.state.token);
        this.$store.dispatch("addMember", data);
      }
    },
    validateSSN(ssn) {
      let re = /^(?:[0-9]{3,}-[0-9]{2,}-[0-9]{4,})/;
      return re.test(ssn);
    },
    checkDuplicateSSN(ssn) {
      let result = false;
      this.members.map((item) => {
        result = item.ssn === ssn;
      });
      return result;
    },
  },
};
</script>

<template>
  <div class="p-4">
    <div class="border-black border bg-white p-4">
      <form id="submit-member" @submit.prevent="checkForm">
        <input
          type="text"
          id="first-name"
          :class="[inputClass]"
          placeholder="First name"
          v-model="firstName"
          required
        />
        <input
          type="text"
          id="last-name"
          :class="[inputClass, `mt-4`]"
          placeholder="Last name"
          v-model="lastName"
          required
        />
        <input
          type="text"
          id="adress"
          :class="[inputClass, `mt-4`]"
          placeholder="Adress"
          v-model="address"
          required
        />
        <input
          type="text"
          id="ssn"
          :class="[inputClass, `mt-4`]"
          placeholder="SSN"
          v-model="ssn"
          required
        />
        <div class="pt-4 grid grid-cols-2">
          <div class="flex items-center justify-center">
            <button :class="[resetBtnClass]" @click="resetInputs">Reset</button>
          </div>
          <div class="flex items-center justify-center">
            <button :class="[saveBtnClass]" type="submit">Save</button>
          </div>
        </div>
      </form>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
      </p>

      <ul v-if="errors.length">
        <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>
