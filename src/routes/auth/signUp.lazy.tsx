import { SignUpForm } from "@components/feature/auth/signUp/SignUpForm";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useUserContext } from "@/hooks/users/UserManager";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/auth/signUp")({
  component: () => <SignUpPage />,
});

const SignUpPage = () => {
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
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <p className="text-xl mb-4">Create your account.</p>
          <SignUpForm />
        </>
      </PageWrapper>
    </>
  );
};
