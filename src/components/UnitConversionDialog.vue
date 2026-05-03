<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
  (e: 'dismiss'): void;
}>();
</script>

<template>
  <TransitionRoot
    :show="props.open"
    as="template"
  >
    <Dialog
      class="relative z-50"
      @close="emit('dismiss')"
    >
      <TransitionChild
        as="template"
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/60"
          aria-hidden="true"
        />
      </TransitionChild>

      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPanel class="unit-dialog">
            <DialogTitle class="unit-dialog-title">
              Convert Values?
            </DialogTitle>
            <p class="unit-dialog-body">
              You changed the measurement. Do you want to convert your existing values to the new unit?
            </p>
            <div class="unit-dialog-actions">
              <button
                type="button"
                @click="emit('confirm')"
              >
                Yes, convert
              </button>
              <button
                type="button"
                @click="emit('cancel')"
              >
                No, keep values
              </button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
