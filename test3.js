// 2725. Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// var cancellable = function (fn, args, t) {
//     const timeoutId = setTimeout(() => {
//         fn(...args)
//     },t)

//     const cancelFn = () => {
//         clearTimeout(timeoutId)
//     }

//     return cancelFn;
// };
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function} cancelFn
 */
var cancellable = function (fn, args, t) {
    // Cờ cho biết đã bị huỷ hay chưa
    let cancelled = false;
    // Biến để giữ id của timeout hiện tại (dùng để clearTimeout nếu cần)
    let timerId = null;

    // Gọi ngay lập tức lần đầu tiên
    fn(...args);

    const scheduleNext = () => {
        if (cancelled) return;
        timerId = setTimeout(() => {
            if (cancelled) return;
            fn(...args);
            scheduleNext();
        }, t);
    };

    scheduleNext();

    return function cancelFn() {
        cancelled = true;
        if (timerId !== null) clearTimeout(timerId);
    };

};
