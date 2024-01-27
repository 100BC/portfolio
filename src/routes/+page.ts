export function load({ url }) {
  return {
    exp: url.searchParams.get('exp'),
  };
}
