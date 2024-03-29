import { useUser } from "@clerk/nextjs";

const useCurrentUserEmail = () => {
  const { user } = useUser();

  if (!user || !user.emailAddresses || !user.emailAddresses.length) {
    return null;
  }

  return user.emailAddresses[0].emailAddress;
};

export default useCurrentUserEmail;