<template>
  <div class="p-4">
    <div class="border-black border bg-white p-4">
      <div
        class="shadow-[0_0_5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_5px_rgba(256,256,256,0.3)] overflow-scroll md:overflow-auto"
      >
        <table class="min-w-full border border-black">
          <thead>
            <tr class="divide-x divide-neutral-200 dark:divide-neutral-700">
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
