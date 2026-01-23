<script setup lang="ts">
import type { PromptInputMessage } from '@/components/ai-elements/prompt-input/'
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputProvider,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input'

import { GlobeIcon } from 'lucide-vue-next'
import { ref } from 'vue'


const SUBMITTING_TIMEOUT = 200
const STREAMING_TIMEOUT = 2000

const status = ref<'submitted' | 'streaming' | 'ready' | 'error'>('ready')

function handleSubmit(message: PromptInputMessage) {
  const hasText = !!message.text
  const hasAttachments = message.files?.length > 0

  if (!hasText && !hasAttachments) {
    return
  }

  status.value = 'submitted'

  // eslint-disable-next-line no-console
  console.log('Submitting message:', message)

  setTimeout(() => {
    status.value = 'streaming'
  }, SUBMITTING_TIMEOUT)

  setTimeout(() => {
    status.value = 'ready'
  }, STREAMING_TIMEOUT)
}
</script>

<template>
  <div class="w-full">
    <PromptInputProvider
      @submit="handleSubmit"
    >
      <PromptInput
        multiple
        global-drop class=""
      >
        <PromptInputAttachments>
          <template #default="{ file }">
            <PromptInputAttachment :file="file" />
          </template>
        </PromptInputAttachments>

        <PromptInputBody>
          <PromptInputTextarea />
        </PromptInputBody>

        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputActionMenu>
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>

            <PromptInputSpeechButton />

            <PromptInputButton>
              <GlobeIcon :size="16" />
              <span>Search</span>
            </PromptInputButton>
          </PromptInputTools>

          <PromptInputSubmit :status="status" />
        </PromptInputFooter>
      </PromptInput>
    </PromptInputProvider>
  </div>
</template>