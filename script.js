

let myMap = ""

initMap()
// setUpMap()

fetch("https://firzaelbuho.github.io/api/gisdas.json")
    .then(response => response.json())
    .then(data =>

        setUpMap(data)
    )




function initMap() {
    myMap = L.map(
        "map",
        {
            center: [-6.902122397865429, 109.52591907491608],
            crs: L.CRS.EPSG3857,
            zoom: 14,
            zoomControl: true,
            preferCanvas: false,
        }
    );
    var tile_layer_6b5a2bb7cf3c4cd8982ebc20bff6254c = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { "attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false }
    ).addTo(myMap);

}

function setUpMap(data) {
    for (var i = 0; i < data.length; i++) {

        var myData = data[i]



        var marker = L.marker(
            [myData.latitude, myData.longitude],
            {}
        ).addTo(myMap);


        var custom_icon = L.icon({ "iconSize": 32, "iconUrl": "img/biru.png" });
        marker.setIcon(custom_icon);


        var popup = L.popup({ "maxWidth": "100%" });

        var popupHtml = `<div id="html_077d38fa84594d43bafb4e032b5c88df" 
                            style="width: 400px; height: 100.0%;">
                            <small>30-04-2020 18:39 WIB</small>
                            <h4><b>${myData.nama}</b></h4>
                            <img 
                                class="py-3" width = "250px" height = "auto"
                                src="https://lh3.googleusercontent.com/proxy/GUnQWFAjDiJ-J9_E8jd589J3mEljzo0lC59Ld4LcwUoi7zhEvJppvWdCq6gxNpMP3A49hzEr7-nZmIyLGSveGMV-1f5YDnhaA0bF4oVSPdjTFePsiHboznV9EdHfO7fhVgsnGlEx6M03QdMSV61kUg"/>
                            <table cellpadding="20" width="400px" id="popupTable">
                                <tr>
                                   <td>Panjang</td>
                                   <td> : </td>
                                   <td>${myData.panjang} km</td>
                                </tr>
                                <tr>
                                   <td>Luas</td>
                                   <td> : </td>
                                   <td>${myData.luaskm2} km2</td>
                                </tr>
                                <tr>
                                    <td>Debit</td>
                                    <td> : </td>
                                    <td>${myData.debitHilirM3s} m3/s</td>
                                </tr>
                                <tr>
                                    <td>Kemiringan</td>
                                    <td> : </td>
                                    <td>${myData.kemiringan}</td>
                                </tr>
                                <tr>
                                    <td>kota/kab</td>
                                    <td> : </td>
                                    <td>${myData.kota}</td>
                                </tr>
                                <tr>
                                    <td>Kecamatan</td>
                                    <td> : </td>
                                    <td>${myData.kecamatan}</td>
                                </tr>
                            </table>
                        </div>`
        var html = $(popupHtml)[0];
        popup.setContent(html);


        marker.bindPopup(popup);
    }
}