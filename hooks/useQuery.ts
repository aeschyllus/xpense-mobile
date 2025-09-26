import { useEffect, useState } from "react";

interface QueryState<T> {
  rows: T | null;
  loading: boolean;
  error: Error | null;
}

export const useQuery = <T>(
  query: () => Promise<T>,
  deps: any[] = [],
): QueryState<T> => {
  const [rows, setRows] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      setLoading(true);

      try {
        const result = await query();

        if (mounted) {
          setRows(result);
          setError(null);
        }
      } catch (error) {
        if (mounted) setError(error as Error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();

    return () => {
      mounted = false;
    };
  }, deps);

  return { rows, loading, error };
};
