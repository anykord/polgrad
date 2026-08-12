module.exports = (req,res) => {
  const host = req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  res.setHeader('Content-Type','text/plain; charset=utf-8');
  res.status(200).send(`User-agent: *\nAllow: /\n\nSitemap: ${proto}://${host}/sitemap.xml\n`);
};
