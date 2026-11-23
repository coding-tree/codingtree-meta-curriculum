# Meta Curriculum — Coding Tree

Materiały meta-strukturalne dla szkoły programowania Coding Tree,
opublikowane pod adresem **https://meta.codingtree.pl/**.

## Strony

| Katalog | Tytuł | Co to jest |
|---------|-------|------------|
| `meta-struktura/` | Curriculum Map | Interaktywna mapa ścieżek kursów: 10 modułów w 4 poziomach progresji, od Explorer (9-10 lat) do Developer (15-17 lat), z prerekwizytami i efektami kształcenia. |
| `fundamenty/` | Fundamenty myślenia | 80 kluczowych pojęć naukowych, matematycznych i programistycznych dla dzieci 11-14 lat, w 14 sekcjach: analogie z gier, zadania, 3 gry grupowe i mini projekt. |

`index.html` to strona główna z kartą dla każdej z nich.

## Kroki Curriculum Map

Każdy moduł w `meta-struktura/index.html` ma pole `step` z identyfikatorem
kroku z Curriculum Map Coding Tree (np. `belt.orange.games-with-logic`).
Karta modułu na mapie i wiersz na liście pokazują go jako etykietę
„Krok: <pas>”, np. „Krok: Pomarańczowy pas” (nazwy pasów jak w
block-lab). DATA1 należy do ścieżki bocznej `side.tech-world`
(„Ścieżka: Świat technologii dziś”). Etykiety są w `STEP_LABELS`.
Na razie bez linku: strona `/mapa` platformy nie ma jeszcze
publicznego adresu.

| Moduł | Krok |
|-------|------|
| CT1 | `belt.baby-bird.how-a-computer-thinks` |
| S1 | `belt.white.first-programs` |
| S2 | `belt.orange.games-with-logic` |
| PY1 | `belt.blue.first-real-language` |
| PY2 | `belt.yellow-green.scripts-and-history` |
| WEB1, WEB2 | `belt.green.the-web` |
| PY3, WEB3 | `belt.brown.servers-and-apps` |
| DATA1 | `side.tech-world` |

## Użycie

Otwórz https://meta.codingtree.pl/ albo dowolny `index.html` bezpośrednio w
przeglądarce. To czysty HTML, bez zależności i bez kroku budowania.

## Publikacja

Każdy push na `main` publikuje stronę na GitHub Pages przez
`.github/workflows/deploy.yml`.

## Licencja

CC BY-NC 4.0, zobacz `LICENSE`.
