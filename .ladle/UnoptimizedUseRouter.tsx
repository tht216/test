const useRouter = () => {
  const push = (link: string) => {
    console.log("link: ", link);
  };

  const replace = (link: string) => {
    console.log("link: ", link);
  };
  return { push, replace };
};

export { useRouter };
