export const If = ({ condition, children }) => {
  If.displayName = "If";
  return condition ? <>{children}</> : null;
};

export const Else = ({ children }) => {
  return <>{children}</>;
};

export function Conditional({ children }) {
  console.log(
    children[0]?.type?.displayNameme || children[0]?.type?.name || "unknown"
  );
  return <>{children}</>;
}
