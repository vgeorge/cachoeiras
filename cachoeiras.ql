[out:json]
;
area(3600059470)->.searchArea;
(
  way
    ["natural"="cliff"]
    (area.searchArea);
  node
    ["waterway"="waterfall"]
    (area.searchArea);
);
out;
>;
out skel qt;
