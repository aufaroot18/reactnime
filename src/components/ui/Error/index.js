import Heading from "../Heading";

export default function Error({ children = "Something Error" }) {
  return (
    <Heading variant="primary" align="center" mb="3" mt="3">
      {children}
    </Heading>
  );
}
