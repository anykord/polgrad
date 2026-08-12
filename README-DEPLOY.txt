DLACZEGO NARODY SĄ RÓŻNE — GOTOWA STRONA DLA GITHUB + VERCEL

1. Wgraj CAŁĄ zawartość tego archiwum do katalogu głównego repozytorium GitHub.
2. Zrób commit i push.
3. Podłącz repozytorium do Vercel albo uruchom redeploy istniejącego projektu.
4. Vercel nie wymaga komendy build — strona jest statyczna; api/sitemap.js i api/robots.js tworzą sitemapę i robots.txt z aktualnego hosta.

Po wdrożeniu sprawdź:
/
/sitemap.xml
/robots.txt
/artykuly/szlachta-ruska/
/artykuly/rosja-narod-czy-imperium/

SEO:
- index,follow + max-image-preview:large
- canonical bez twardego domenowego hosta (działa po wdrożeniu na dowolnym hostcie)
- Open Graph / Twitter cards
- BlogPosting + BreadcrumbList JSON-LD
- duże obrazy 1672×941 + zoptymalizowane WebP
- semantyczne linkowanie wewnętrzne
- dynamiczny sitemap.xml i robots.txt
- osadzone filmy YouTube w trybie youtube-nocookie.com

UWAGA: VideoObject nie został dodany, bo poprawna rozbudowana wersja dla Google wymaga prawdziwej daty pierwszej publikacji filmu (uploadDate). Nie zgadujemy dat. Po podaniu 6 dat można go dodać.
