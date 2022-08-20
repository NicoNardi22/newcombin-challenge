<template>
  <header class="bg-green-200">
    <div class="container">
      <nav class="h-10 w-full grid grid-cols-2 divide-x divide-gray-400">
        <RouterLink
          to="/"
          class="flex justify-center items-center p-1 hover:opacity-40"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="flex justify-center items-center p-1 hover:opacity-40"
        >
          About
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
