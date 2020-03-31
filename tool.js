module.exports = function (req, res, next) {
  // get now time
  const reqTime = new Date();
  // when res finish, to calculate response time
  res.on('finish', function () {
    console.log(`${reqTime.toString()} | ${req.method} from ${req.path} | total time: ${Date.now() - reqTime}ms`);
  });

  next();

};
