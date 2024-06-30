import { SignUpForm } from "@components/feature/auth/signUp/SignUpForm";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/signUp")({
  component: () => <SignInPage />,
});

const SignInPage = () => {
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
