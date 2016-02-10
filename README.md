## Cachoeiras e quedas-d'águas do Brasil

Dados obtidos do [OpenStreetMap](www.openstreet.map) no dia 10 de fevereiro de 2016:

<a href="https://github.com/vgeorge/cachoeiras/blob/master/quedas-dagua-2016-02-10.geojson" target="_blank">
![Exibir no mapa](mapa.png)
</a>

* [Baixar os dados](https://github.com/vgeorge/cachoeiras/raw/master/quedas-dagua-2016-02-10.geojson)
* [Guia de mapeamento (em inglês)](http://wiki.openstreetmap.org/wiki/Waterfalls)
* [Artigo sobre quedas-dágua na Wikipédia](https://pt.wikipedia.org/wiki/Queda_de_%C3%A1gua)

Execute esta [consulta do Overpass](http://overpass-turbo.eu/s/ekI) para obter dados atualizados:

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

## Licença

Estes dados estão sob a *Open Database License (ODbL)*, consulte os [termos de uso](http://www.openstreetmap.org/copyright).
