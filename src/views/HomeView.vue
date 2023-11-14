<script setup></script>

<template>
  <Header />
  <div class="p-12 main flex items-center">
    <div class="w-full">
      <h1 class="text-4xl">Leyes y más</h1>
      <p class="text-sm">Buscar por palabra clave, país, ley, entre otros.</p>
      <!--search input-->
      <div class="">
        <form>
          <div class="relative mt-5">
            <input
              type="search"
              class="w-full p-4 rounded-2xl text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute rounded-2xl end-2.5 bottom-2.5 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
