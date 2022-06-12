// From tutorial
const handler = (req, res) => {
  if (req.method === 'GET') {
    res.send({
      message: 'GET - Hello from handler',
    });
  }
  else if (req.method === 'POST') {
    res.send({
      message: 'POST - HELLO'
    })
  }
  else {
    res.send({
      message: 'Unknow method',
      method: req.method,
    })
  }
}

export default handler;