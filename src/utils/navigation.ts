import type { MouseEvent } from 'react';

export function goHome(event: MouseEvent<HTMLAnchorElement>) {
  // Leave modified clicks to the browser so opening a new tab still works.
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return;
  event.preventDefault();
  const root = import.meta.env.BASE_URL;
  if (
    window.location.hash ||
    window.location.search ||
    window.location.pathname !== root
  ) {
    window.history.pushState(null, '', root);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}
