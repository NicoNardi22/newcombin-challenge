<script>
export default {
  props: {
    members: Array,
  },
};
</script>

<template>
  <div class="p-4">
    <div class="border-black border bg-white p-4">
      <div
        class="shadow-[0_0_5px_rgba(0,0,0,0.3)] overflow-scroll md:overflow-auto"
      >
        <table class="min-w-full border border-black">
          <thead>
            <tr class="divide-x divide-black">
              <th
                scope="col"
                class="px-6 py-3 text-left font-medium tracking-wider bg-slate-100"
              >
                First name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left font-medium tracking-wider bg-slate-100"
              >
                Last name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left font-medium tracking-wider bg-slate-100"
              >
                Address
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left font-medium tracking-wider bg-slate-100"
              >
                SSN
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="divide-x divide-black"
              v-for="member in members"
              v-bind:key="member.firstName"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <p>{{ member.firstName }}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <p>{{ member.lastName }}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <p>{{ member.address }}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <p>{{ member.ssn }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
