import { useUserContext } from "@/hooks/users/UserManager";
import { SignInForm } from "@components/feature/auth/signIn/SignInForm";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/auth/signIn")({
  component: () => <SignInPage />,
});

const SignInPage = () => {
  const { isSignedIn } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate({ to: "/" });
    }
  });

  return (
    <>
      <PageWrapper className="flex sm:justify-center items-center h-full">
        <>
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <p className="text-xl mb-4">Log in to your account.</p>
          <SignInForm />
        </>
      </PageWrapper>
    </>
  );
};
