var map_97df312068c040e79d4274d90dd98ae2 = L.map(
    "map_97df312068c040e79d4274d90dd98ae2",
    {
        center: [-6.96, 110.41],
        crs: L.CRS.EPSG3857,
        zoom: 14,
        zoomControl: true,
        preferCanvas: false,
    }
);





var tile_layer_6b5a2bb7cf3c4cd8982ebc20bff6254c = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { "attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false }
).addTo(map_97df312068c040e79d4274d90dd98ae2);


var marker_be9cd6b61c1a4176b2ccb299ecd9cb55 = L.marker(
    [-6.96, 110.41],
    {}
).addTo(map_97df312068c040e79d4274d90dd98ae2);


var custom_icon_abc9906a181142c2904d155288ea3f04 = L.icon({ "iconSize": 35, "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coat_of_arms_of_Aceh.svg/1200px-Coat_of_arms_of_Aceh.svg.png" });
marker_be9cd6b61c1a4176b2ccb299ecd9cb55.setIcon(custom_icon_abc9906a181142c2904d155288ea3f04);


var popup_a9e6c09619224b76adb8ed52fcb97f10 = L.popup({ "maxWidth": "100%" });


var html_077d38fa84594d43bafb4e032b5c88df = $(`<div id="html_077d38fa84594d43bafb4e032b5c88df" style="width: 100.0%; height: 100.0%;"><small>30-04-2020 18:39 WIB</small><h4><b>Aceh</b></h4><table><tr><th style='color:red'>Confirmed&nbsp;&nbsp;</th><th style='color:green'>Recovered&nbsp;&nbsp;</th><th style='color:black'>Deaths&nbsp;&nbsp;</th></tr><tr><td><center><b style='color:red'>10</b></center></td><td><center><b style='color:green'>4</b></center></td><td><center><b>1</b></center></td></tr></table></div>`)[0];
popup_a9e6c09619224b76adb8ed52fcb97f10.setContent(html_077d38fa84594d43bafb4e032b5c88df);


marker_be9cd6b61c1a4176b2ccb299ecd9cb55.bindPopup(popup_a9e6c09619224b76adb8ed52fcb97f10);