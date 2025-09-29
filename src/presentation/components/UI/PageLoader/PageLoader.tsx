import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PageLoader: React.FC = () => (
  <div className="page-loader">
    <LoadingSpinner size="large" />
    <p>Cargando...</p>
  </div>
);

export default PageLoader;
