## Cachoeiras e outras quedas-d'águas do Brasil no OpenStreetMap

Dados obtidos em 10/02/2016:

* [Ver no mapa]()
* [Baixar os dados]()
* [Guia de mapeamento](http://wiki.openstreetmap.org/wiki/Waterfalls) (em inglês)
* [Wikipédia](https://pt.wikipedia.org/wiki/Queda_de_%C3%A1gua)

Consulta no Overpass:

```
[out:json];
{{geocodeArea:brazil}}->.searchArea;
(
  way["natural"="cliff"](area.searchArea);
  node["waterway"="waterfall"](area.searchArea);
);
out body;
>;
out skel qt;
```
