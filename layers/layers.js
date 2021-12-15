var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_2016_1 = new ol.format.GeoJSON();
var features_2016_1 = format_2016_1.readFeatures(json_2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_1.addFeatures(features_2016_1);
var lyr_2016_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_1, 
                style: style_2016_1,
                interactive: true,
                title: '<img src="styles/legend/2016_1.png" /> 2016金門自然村'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_2016_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2016_1];
lyr_2016_1.set('fieldAliases', {'自然村村名': '自然村村名', });
lyr_2016_1.set('fieldImages', {'自然村村名': '', });
lyr_2016_1.set('fieldLabels', {'自然村村名': 'header label', });
lyr_2016_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});