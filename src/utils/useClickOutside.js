import { onMounted, onUnmounted } from "vue";

// by convention, composable function names start with "use"
export function useClickOutside($el, callback) {
  function $handleClickOutside(ev) {
    if (!$el.value.contains(ev.target)) {
      callback && callback();
    }
  }

  onMounted(() => window.addEventListener("click", $handleClickOutside, true));
  onUnmounted(() =>
    window.removeEventListener("click", $handleClickOutside, true)
  );
}
