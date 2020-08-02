import { useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import Logo from "../src/logo";
const SignOutMutation = gql`
  mutation {
    unauthenticateUser {
      success
    }
  }
`;
function SignOut() {
  const client = useApolloClient();
  const router = useRouter();
  const [signOut] = useMutation(SignOutMutation);

  useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        router.push("/signin");
      });
    });
  }, [signOut, router, client]);

  return <Logo />;
}

export default SignOut;
