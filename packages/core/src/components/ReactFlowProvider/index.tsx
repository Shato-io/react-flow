import { FC, PropsWithChildren, useRef } from 'react';
import { StoreApi } from 'zustand';

import { Provider } from '../../contexts/RFStoreContext';
import { createRFStore } from '../../store';
import { ReactFlowState } from '../../types';

const ReactFlowProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<StoreApi<ReactFlowState> | null>(null);

  if (!storeRef.current) {
    storeRef.current = createRFStore();
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
};

ReactFlowProvider.displayName = 'ReactFlowProvider';

export default ReactFlowProvider;
