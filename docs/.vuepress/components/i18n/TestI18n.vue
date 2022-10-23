<template>
  <div>{{ $i18n('custom_message') }}</div>
  <div>{{ $i18n('max_custom', [10]) }}</div>
  <div>{{ $i18n('custom_validator', { min: 0 }) }}</div>
</template>
