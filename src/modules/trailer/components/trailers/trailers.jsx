export function Trailers({ trailers, onTrailerRender }) {
  return <div>{trailers.map(onTrailerRender)}</div>;
}
