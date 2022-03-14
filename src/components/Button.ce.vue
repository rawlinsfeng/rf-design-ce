<template>
  <button class="rf-ce-button" :class="classes">
    <span v-if="loading" class="rf-ce-loading-indicator"></span>
    <div v-if="iconPlacement === 'left' && slots.icon" class="slot-icon-left">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
    <div v-if="iconPlacement === 'right' && slots.icon" class="slot-icon-right">
      <slot name="icon"></slot>
    </div>
  </button>
</template>
<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  iconPlacement: {
    type: String,
    default: "left",
  },
});

const { theme, dashed, size, round, disabled, circle } = props;
const slots = useSlots();
const classes = computed(() => {
  return {
    [`rf-ce-theme-${theme}`]: theme,
    [`is-dashed`]: dashed,
    [`rf-ce-button-${size}`]: size,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled,
  }
})

</script>
<style lang="scss">
$h-default: 40px;
$radius: 3px;
$default-color: #333;
$default-border-color: #d9d9d9;
$green: #18a058;
$primary-color: #36ad6a;
$white: #fff;

.rf-ce-button {
  box-sizing: border-box;
  height: $h-default;
  font-size: 14px;
  background-color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  color: $default-color;
  border: 1px solid $default-border-color;
  user-select: none;

  &.rf-ce-theme-default {
    &:hover {
      color: $green;
      border-color: $green;
      > .jw-loading-indicator {
        border-style: dashed;
        border-color: $green $green $green transparent;
      }
    }
    &:active {
      color: darken($green, 20%);
      border-color: darken($green, 20%);
      > .rf-ce-loading-indicator {
        border-style: dashed;
        border-color: darken($green, 20%) darken($green, 20%)
          darken($green, 20%) transparent;
      }
    }
    &.is-dashed {
      border-style: dashed;
    }
    > .rf-ce-loading-indicator {
      border-style: dashed;
      border-color: $default-color $default-color $default-color transparent;
    }
  }

   &.rf-ce-theme-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
    &:hover {
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
    }
    &:active {
      background-color: darken($primary-color, 20%);
      border-color: darken($primary-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
      &:hover {
        background: lighten($primary-color, 20%);
        border-color: lighten($primary-color, 20%);
      }
    }
    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $primary-color;
      > .rf-ce-loading-indicator {
        border-style: dashed;
        border-color: $primary-color $primary-color $primary-color transparent;
      }
    }
  }
}
</style>