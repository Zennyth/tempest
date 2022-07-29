<template>
  <div
    class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width: 80%">
      <div class="col-12 my-3 lg:my-5 xl:mt-0">
        <PageLogo />
      </div>
      <PageWrapper>
        <div class="grid flex flex-column align-items-center">
          <div
            class="flex justify-content-center align-items-center bg-orange-500 border-circle"
            style="width: 3.2rem; height: 3.2rem"
          >
            <i class="pi pi-fw pi-lock text-2xl text-50"></i>
          </div>
          <h1 class="text-900 font-bold text-4xl lg:text-5xl mb-2">
            {{ t("message.accesRefuse") }}
          </h1>
          <span class="text-600 text-center">{{
            t("message.permissionsManquantes")
          }}</span>
          <img
            src="images/ESA/asset-access.svg"
            alt="Access denied"
            class="mt-5"
            style="width: 80%"
          />
          <div class="col-12 mt-5 text-center">
            <i
              class="pi pi-fw pi-arrow-left text-primary-color mr-2"
              style="vertical-align: center"
            ></i>
            <router-link to="/" class="text-primary-color">{{
              t("message.retourAccueil")
            }}</router-link>
          </div>
        </div>
      </PageWrapper>
    </div>
  </div>
</template>
<script setup>
import { i18nKey } from "@/serviceKeys";
import { inject } from "@vue/runtime-core";
import PageLogo from "@/components/PageLogo";
import PageWrapper from "@/components/PageWrapper";

const { t } = inject(i18nKey);
</script>
