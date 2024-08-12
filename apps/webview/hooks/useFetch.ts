import Cookies from 'js-cookie';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

const isDataOfType = <T>(data: any): data is NonNullable<T> => data !== undefined;

const getData = async <T>(
  url: string,
  baseUrl: string,
  signal: AbortSignal,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string>>,
  setData: Dispatch<React.SetStateAction<T | undefined>>,
  setIsDataValid: Dispatch<SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  setIsError(false);
  try {
    const authToken = Cookies.get('token'); /** @todo Credential Request */

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${baseUrl}${url}`, {
      signal,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const { data }: { data: T } = await res.json();
    setIsDataValid(isDataOfType<T>(data));
    setData(data);
  } catch (e) {
    setIsError(true);
    if (typeof e === 'string') setError(e);
    else if (e instanceof Error) setError(e.message);
    else setError('Error');
  } finally {
    setIsLoading(false);
  }
};

const useFetch = <T>(url: string, baseUrl = process.env.NEXT_PUBLIC_API_BASE_PATH) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isDataValid, setIsDataValid] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    getData<T>(
      url,
      baseUrl,
      controller.signal,
      setIsLoading,
      setIsError,
      setError,
      setData,
      setIsDataValid,
    );
    return () => controller.abort();
  }, [url]);

  return { data: isDataValid ? data : undefined, isLoading, isError, error };
};

export default useFetch;
