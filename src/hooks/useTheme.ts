import { onBeforeMount, ref } from "vue";
import { getItem, setItem } from "@/utils/storage";

export const useTheme = () => {

  const isDark = ref(false);

  const switchDark = () => {
    const body = document.documentElement as HTMLElement;
    isDark.value = !isDark.value;
    setItem('isDark', isDark.value);

    if (getItem('isDark') === 'true') body.setAttribute("class", "dark");
    else body.setAttribute("class", "");
  }

  onBeforeMount(() => {
    switchDark()
  })
  return {
    switchDark
  }
}