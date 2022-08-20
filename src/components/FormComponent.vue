<script>
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
    };
  },
  methods: {
    resetInputs() {
      this.firstName = "";
      this.lastName = "";
      this.address = "";
      this.ssn = "";
    },
  },
};
</script>

<template>
  <div class="p-4">
    <div class="border-black border bg-white p-4">
      <input
        type="text"
        id="first-name"
        :class="[inputClass]"
        placeholder="First name"
        v-model="firstName"
      />
      <input
        type="text"
        id="last-name"
        :class="[inputClass, `mt-4`]"
        placeholder="Last name"
        v-model="lastName"
      />
      <input
        type="text"
        id="adress"
        :class="[inputClass, `mt-4`]"
        placeholder="Adress"
        v-model="address"
      />
      <input
        type="text"
        id="ssn"
        :class="[inputClass, `mt-4`]"
        placeholder="SSN"
        v-model="ssn"
      />
      <div class="pt-4 grid grid-cols-2">
        <div class="flex items-center justify-center">
          <button :class="[resetBtnClass]" @click="resetInputs">Reset</button>
        </div>
        <div class="flex items-center justify-center">
          <button :class="[saveBtnClass]">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
