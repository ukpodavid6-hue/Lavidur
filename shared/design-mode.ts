export interface ResolvedDesignElement {
  element: Element;
  renderId: string | null;
}

export interface StyleInfo {
  className: string;
  styles: Record<string, string> | null;
}

export type GetStyleInfo = (resolved: ResolvedDesignElement) => StyleInfo;

const RENDER_ID_ATTRIBUTE = 'data-render-id';

function findByRenderId(renderId: string | null): ResolvedDesignElement | null {
  if (!renderId || typeof document === 'undefined') return null;

  const element = document.querySelector(`[${RENDER_ID_ATTRIBUTE}="${CSS.escape(renderId)}"]`);
  if (!element) return null;

  return { element, renderId };
}

export function initDesignMode(getStyleInfo: GetStyleInfo): () => void {
  if (typeof window === 'undefined') return () => {};

  let selectedRenderId: string | null = null;

  const postSelection = (resolved: ResolvedDesignElement) => {
    window.parent?.postMessage(
      {
        type: 'sandbox:web:design-mode:selection',
        renderId: resolved.renderId,
        ...getStyleInfo(resolved),
      },
      '*'
    );
  };

  const handlePointerDown = (event: PointerEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const selected = target.closest(`[${RENDER_ID_ATTRIBUTE}]`);
    const renderId = selected?.getAttribute(RENDER_ID_ATTRIBUTE) ?? null;
    if (!selected || !renderId) return;

    selectedRenderId = renderId;
    postSelection({ element: selected, renderId });
  };

  document.addEventListener('pointerdown', handlePointerDown, true);

  return () => {
    const resolved = findByRenderId(selectedRenderId);
    if (resolved) postSelection(resolved);
  };
}
