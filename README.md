## Cachoeiras e quedas-d'águas do Brasil

Dados obtidos do [OpenStreetMap](www.openstreet.map) em 10/02/2016:

* [Exibir no mapa](https://github.com/vgeorge/cachoeiras/blob/master/quedas-dagua-2016-02-10.geojson)
* [Baixar os dados](https://github.com/vgeorge/cachoeiras/raw/master/quedas-dagua-2016-02-10.geojson)
* [Guia de mapeamento](http://wiki.openstreetmap.org/wiki/Waterfalls) (em inglês)
* [Wikipédia](https://pt.wikipedia.org/wiki/Queda_de_%C3%A1gua)

Execute esta [consulta do Overpass](http://overpass-turbo.eu/s/ekI) para obter dados mais atualizados:

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

Estes dados estão sob a licença *Open Database License (ODbL)*, consulte os [termos de uso]((http://www.openstreetmap.org/copyright) no site do OpenStreetMap.
