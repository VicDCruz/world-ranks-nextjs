// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  res.setHeader('Content-Type', 'application/json');
  if (username === 'a@a.com' && password === 'pwd') {
    res.statusCode = 200;
    return res.json({ status: 'OK' });
  }
  return res.status(403).json({ status: 'Bad user' });
};
