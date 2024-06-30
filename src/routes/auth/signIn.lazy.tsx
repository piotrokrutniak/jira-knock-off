import { SignInForm } from "@components/feature/auth/signIn/SignInForm";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/signIn")({
  component: () => <SignInPage />,
});

const SignInPage = () => {
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
