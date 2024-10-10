/** type error 인 key 값을 하나씩 잡음 */
export function typeConfirm(target, compare) {
  const result = [];
  for (let key in target) {
    result.push({
      key,
      type: typeof target[key],
      result: typeof target[key] === typeof compare[key],
    });
  }
  const find = result.find((x) => !x.result);
  if (find) {
    return {
      result: false,
      errKey: find.key,
      errType: find.type,
      message: `type Error: Error key "${find.key}" Error Type "${find.type}"`,
    };
  } else
    return {
      result: true,
    };
}
