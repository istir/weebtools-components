import { memo } from 'react';

import Slider from '@/components/Base/Slider';
import { getTheme, setTheme } from '@/utils/layout';

function ThemeSwitcher() {
  const initialState = getTheme();
  return (
    <Slider
      defaultState={initialState === 'dark'}
      onChecked={() => {
        setTheme('dark');
      }}
      onUnchecked={() => {
        setTheme('light');
      }}
    />
  );
}

export default memo(ThemeSwitcher);
