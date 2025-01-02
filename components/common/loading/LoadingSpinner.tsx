const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
