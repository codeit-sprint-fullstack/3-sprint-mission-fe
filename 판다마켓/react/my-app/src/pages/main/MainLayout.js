export function MainLayout({ children, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...props,
      }}
    >
      {children}
    </div>
  );
}
