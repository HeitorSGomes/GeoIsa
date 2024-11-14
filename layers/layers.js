var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LOTES_1 = new ol.format.GeoJSON();
var features_LOTES_1 = format_LOTES_1.readFeatures(json_LOTES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTES_1.addFeatures(features_LOTES_1);
var lyr_LOTES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTES_1,
maxResolution:28004.466152261964,
 
                style: style_LOTES_1,
                popuplayertitle: "LOTES",
                interactive: true,
                title: '<img src="styles/legend/LOTES_1.png" /> LOTES'
            });
var group_GLEBAF2B = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "GLEBA F-2/B"});

lyr_GoogleSatellite_0.setVisible(true);lyr_LOTES_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LOTES_1];
lyr_LOTES_1.set('fieldAliases', {'Lote': 'Lote', 'Area': 'Area', 'Area_': 'Area_', });
lyr_LOTES_1.set('fieldImages', {'Lote': 'TextEdit', 'Area': 'TextEdit', 'Area_': 'TextEdit', });
lyr_LOTES_1.set('fieldLabels', {'Lote': 'no label', 'Area': 'no label', 'Area_': 'inline label - visible with data', });
lyr_LOTES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});