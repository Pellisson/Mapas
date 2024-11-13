var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GrupoDenardin_1 = new ol.format.GeoJSON();
var features_GrupoDenardin_1 = format_GrupoDenardin_1.readFeatures(json_GrupoDenardin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrupoDenardin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrupoDenardin_1.addFeatures(features_GrupoDenardin_1);
var lyr_GrupoDenardin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrupoDenardin_1, 
                style: style_GrupoDenardin_1,
                popuplayertitle: "GrupoDenardin",
                interactive: true,
    title: 'GrupoDenardin<br />\
    <img src="styles/legend/GrupoDenardin_1_0.png" /> Amizade<br />\
    <img src="styles/legend/GrupoDenardin_1_1.png" /> Capao Redondo<br />\
    <img src="styles/legend/GrupoDenardin_1_2.png" /> Céu Azul<br />\
    <img src="styles/legend/GrupoDenardin_1_3.png" /> Colorado<br />\
    <img src="styles/legend/GrupoDenardin_1_4.png" /> FN<br />\
    <img src="styles/legend/GrupoDenardin_1_5.png" /> R Meio<br />\
    <img src="styles/legend/GrupoDenardin_1_6.png" /> Santa Angelica<br />\
    <img src="styles/legend/GrupoDenardin_1_7.png" /> Santa Maria<br />\
    <img src="styles/legend/GrupoDenardin_1_8.png" /> Sao Joao<br />\
    <img src="styles/legend/GrupoDenardin_1_9.png" /> Sao Miguel<br />\
    <img src="styles/legend/GrupoDenardin_1_10.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GrupoDenardin_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GrupoDenardin_1];
lyr_GrupoDenardin_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Fazenda': 'Fazenda', 'Talhao': 'Talhao', 'ha': 'ha', 'Produtor': 'Produtor', 'Cultura': 'Cultura', 'Safra2324': 'Safra2324', 'Hectares': 'Hectares', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GrupoDenardin_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Fazenda': 'TextEdit', 'Talhao': 'TextEdit', 'ha': 'TextEdit', 'Produtor': 'TextEdit', 'Cultura': 'TextEdit', 'Safra2324': 'TextEdit', 'Hectares': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GrupoDenardin_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Name': 'no label', 'Fazenda': 'inline label - always visible', 'Talhao': 'inline label - always visible', 'ha': 'no label', 'Produtor': 'no label', 'Cultura': 'no label', 'Safra2324': 'no label', 'Hectares': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_GrupoDenardin_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});