export function FlexRow({ children, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        ...props,
      }}
    >
      {children}
    </div>
  );
}

export function FlexColumn({ children, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "colu",
        ...props,
      }}
    >
      {children}
    </div>
  );
}
