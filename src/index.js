/**
 * Created by danielhollcraft on 7/25/16.
 */

export function start (callback) {
  callback('Hello node starter')
}

start((msg) => {
  console.log(msg);
});

export default { start }



