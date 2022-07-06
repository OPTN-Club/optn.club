<template>
  <header>
    <div class="md:mr-8 p-4">
      <img
        src="/assets/images/OPTN_logo.png"
        alt="OPTN Logo"
        class="w-auto h-28 mx-auto md:mx-0"
      >
    </div>

    <div class="flex flex-col grow justify-between">
      <div class="flex justify-center md:justify-end md:mr-4">
        <ul class="link-bar">
          <li>
            <a href="https://discord.gg/K2Kk5Kj6PP" target="_blank">
              Join the
              <strong>Discord</strong>
            </a>
          </li>
          <li>
            <a
              href="https://reddit.com/r/ForzaOpenTunes"
              target="_blank"
              class="px-2"
            >
              <strong>r/Forza&#8203;Open&#8203;Tunes</strong>
            </a>
          </li>
          <li>
            <a
              href="https://reddit.com/r/GranTurismoOpenTunes"
              target="_blank"
              class="px-2"
            >
              <strong>r/Gran&#8203;Turismo&#8203;Open&#8203;Tunes</strong>
            </a>
          </li>
          <!-- <li>
            <a href="https://github.com/" target="_blank">
              View On
              <strong>GitHub</strong>
            </a>
          </li> -->
        </ul>
      </div>

      <div class="pb-2 text-center md:text-left">
        <router-link class="nav-link" :to="{ name: 'formatter' }">Formatter</router-link>
        <router-link class="nav-link" :to="{ name: 'calculator' }">Calculator</router-link>
        <router-link class="nav-link" :to="{ name: 'tuningchart' }">Tuning Chart</router-link>
      </div>
    </div>
  </header>
</template>
