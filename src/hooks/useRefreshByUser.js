import { useState } from 'react';


//  This hook is used for handling manual data refresh triggered by a user interaction.
export function useRefreshByUser(refetch) {
  const [isRefetchingByUser, setIsRefetchingByUser] = useState(false);

  async function refetchByUser() {
    setIsRefetchingByUser(true);

    try {
      await refetch();
    } finally {
      setIsRefetchingByUser(false);
    }
  }

  return {
    isRefetchingByUser,
    refetchByUser,
  };
}
