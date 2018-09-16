export default function ({ req, $axios }) {
  // $axios.onRequest((config) => {
  //   console.log(`Making request to ${config.url}`);
  // });

  if (process.server && req.headers.cookie) {
    $axios.defaults.headers.common.cookie = req.headers.cookie;
  }
}
