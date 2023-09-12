import { Heading } from "@chakra-ui/react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Heading>Hello</Heading>
      {children}
    </div>
  );
}
