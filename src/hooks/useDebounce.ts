const useDebounce = (callback: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  export default useDebounce;