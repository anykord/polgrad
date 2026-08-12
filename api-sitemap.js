const PATHS = ["/", "/artykuly/szlachta-ruska/", "/artykuly/rosja-narod-czy-imperium/", "/artykuly/polska-i-niemcy/", "/artykuly/wolyn-rana-sojusz-polski-i-ukrainy/", "/artykuly/polacy-i-ukraincy/", "/artykuly/rosjanie-ukraincy-bialorusini/"];
module.exports = (req,res) => {
  const host = req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const base = `${proto}://${host}`;
  const urls = PATHS.map(p => `<url><loc>${base}${p}</loc><lastmod>2026-08-12</lastmod></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  res.setHeader('Content-Type','application/xml; charset=utf-8');
  res.setHeader('Cache-Control','public, max-age=0, s-maxage=3600');
  res.status(200).send(xml);
};
