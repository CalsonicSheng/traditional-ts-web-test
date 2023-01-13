function bookRouteMiddleware1(req, res, next) {
    console.log('bookRouteMiddleware1 run');
    req.q1 = 'q1-value';
    req.q2 = 'q2-value';
    next();
}
export default bookRouteMiddleware1;
