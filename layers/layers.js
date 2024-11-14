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
var format_V_1 = new ol.format.GeoJSON();
var features_V_1 = format_V_1.readFeatures(json_V_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V_1.addFeatures(features_V_1);
var lyr_V_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V_1, 
                style: style_V_1,
                popuplayertitle: "V%",
                interactive: false,
    title: 'V%<br />\
    <img src="styles/legend/V_1_0.png" /> 55.1 - 59.7<br />\
    <img src="styles/legend/V_1_1.png" /> 59.7 - 61.1<br />\
    <img src="styles/legend/V_1_2.png" /> 61.1 - 62.5<br />\
    <img src="styles/legend/V_1_3.png" /> 62.5 - 64.7<br />\
    <img src="styles/legend/V_1_4.png" /> 64.7 - 72<br />'
        });
var format_P_2 = new ol.format.GeoJSON();
var features_P_2 = format_P_2.readFeatures(json_P_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_2.addFeatures(features_P_2);
var lyr_P_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_2, 
                style: style_P_2,
                popuplayertitle: "P",
                interactive: false,
    title: 'P<br />\
    <img src="styles/legend/P_2_0.png" /> 27.9 - 37.9<br />\
    <img src="styles/legend/P_2_1.png" /> 37.9 - 42.4<br />\
    <img src="styles/legend/P_2_2.png" /> 42.4 - 46.2<br />\
    <img src="styles/legend/P_2_3.png" /> 46.2 - 49.6<br />\
    <img src="styles/legend/P_2_4.png" /> 49.6 - 63.1<br />'
        });
var format_MO_3 = new ol.format.GeoJSON();
var features_MO_3 = format_MO_3.readFeatures(json_MO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MO_3.addFeatures(features_MO_3);
var lyr_MO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MO_3, 
                style: style_MO_3,
                popuplayertitle: "MO",
                interactive: false,
    title: 'MO<br />\
    <img src="styles/legend/MO_3_0.png" /> 10.02 - 11.2<br />\
    <img src="styles/legend/MO_3_1.png" /> 11.2 - 12.01<br />\
    <img src="styles/legend/MO_3_2.png" /> 12.01 - 12.62<br />\
    <img src="styles/legend/MO_3_3.png" /> 12.62 - 13.21<br />\
    <img src="styles/legend/MO_3_4.png" /> 13.21 - 16<br />'
        });
var format_CTC_4 = new ol.format.GeoJSON();
var features_CTC_4 = format_CTC_4.readFeatures(json_CTC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CTC_4.addFeatures(features_CTC_4);
var lyr_CTC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CTC_4, 
                style: style_CTC_4,
                popuplayertitle: "CTC",
                interactive: false,
    title: 'CTC<br />\
    <img src="styles/legend/CTC_4_0.png" /> 4.35 - 4.72<br />\
    <img src="styles/legend/CTC_4_1.png" /> 4.72 - 4.85<br />\
    <img src="styles/legend/CTC_4_2.png" /> 4.85 - 5.02<br />\
    <img src="styles/legend/CTC_4_3.png" /> 5.02 - 5.32<br />\
    <img src="styles/legend/CTC_4_4.png" /> 5.32 - 6.14<br />'
        });
var format_K_5 = new ol.format.GeoJSON();
var features_K_5 = format_K_5.readFeatures(json_K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_5.addFeatures(features_K_5);
var lyr_K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_5, 
                style: style_K_5,
                popuplayertitle: "K",
                interactive: false,
    title: 'K<br />\
    <img src="styles/legend/K_5_0.png" /> 0.129 - 0.15<br />\
    <img src="styles/legend/K_5_1.png" /> 0.15 - 0.163<br />\
    <img src="styles/legend/K_5_2.png" /> 0.163 - 0.175<br />\
    <img src="styles/legend/K_5_3.png" /> 0.175 - 0.191<br />\
    <img src="styles/legend/K_5_4.png" /> 0.191 - 0.239<br />'
        });
var format_Mg_6 = new ol.format.GeoJSON();
var features_Mg_6 = format_Mg_6.readFeatures(json_Mg_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mg_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mg_6.addFeatures(features_Mg_6);
var lyr_Mg_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mg_6, 
                style: style_Mg_6,
                popuplayertitle: "Mg",
                interactive: false,
    title: 'Mg<br />\
    <img src="styles/legend/Mg_6_0.png" /> 0.599 - 0.741<br />\
    <img src="styles/legend/Mg_6_1.png" /> 0.741 - 0.793<br />\
    <img src="styles/legend/Mg_6_2.png" /> 0.793 - 0.83<br />\
    <img src="styles/legend/Mg_6_3.png" /> 0.83 - 0.897<br />\
    <img src="styles/legend/Mg_6_4.png" /> 0.897 - 1.088<br />'
        });
var format_Ca_7 = new ol.format.GeoJSON();
var features_Ca_7 = format_Ca_7.readFeatures(json_Ca_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ca_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ca_7.addFeatures(features_Ca_7);
var lyr_Ca_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ca_7, 
                style: style_Ca_7,
                popuplayertitle: "Ca",
                interactive: false,
    title: 'Ca<br />\
    <img src="styles/legend/Ca_7_0.png" /> 1.69 - 1.9<br />\
    <img src="styles/legend/Ca_7_1.png" /> 1.9 - 2.01<br />\
    <img src="styles/legend/Ca_7_2.png" /> 2.01 - 2.14<br />\
    <img src="styles/legend/Ca_7_3.png" /> 2.14 - 2.33<br />\
    <img src="styles/legend/Ca_7_4.png" /> 2.33 - 3.2<br />'
        });
var format_ptos_FA5_2021_nutri_8 = new ol.format.GeoJSON();
var features_ptos_FA5_2021_nutri_8 = format_ptos_FA5_2021_nutri_8.readFeatures(json_ptos_FA5_2021_nutri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptos_FA5_2021_nutri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptos_FA5_2021_nutri_8.addFeatures(features_ptos_FA5_2021_nutri_8);
var lyr_ptos_FA5_2021_nutri_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptos_FA5_2021_nutri_8, 
                style: style_ptos_FA5_2021_nutri_8,
                popuplayertitle: "ptos_FA5_2021_nutri",
                interactive: false,
                title: '<img src="styles/legend/ptos_FA5_2021_nutri_8.png" /> ptos_FA5_2021_nutri'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_V_1.setVisible(false);lyr_P_2.setVisible(false);lyr_MO_3.setVisible(false);lyr_CTC_4.setVisible(false);lyr_K_5.setVisible(false);lyr_Mg_6.setVisible(false);lyr_Ca_7.setVisible(false);lyr_ptos_FA5_2021_nutri_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_V_1,lyr_P_2,lyr_MO_3,lyr_CTC_4,lyr_K_5,lyr_Mg_6,lyr_Ca_7,lyr_ptos_FA5_2021_nutri_8];
lyr_V_1.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'V___': 'V___', });
lyr_P_2.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'P1_Solo_mg': 'P1_Solo_mg', });
lyr_MO_3.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'Solo_MO_mg': 'Solo_MO_mg', });
lyr_CTC_4.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'CEC_Solo_m': 'CEC_Solo_m', });
lyr_K_5.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'K_Solo_mg_': 'K_Solo_mg_', });
lyr_Mg_6.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'Solo_MG_mg': 'Solo_MG_mg', });
lyr_Ca_7.set('fieldAliases', {'Obj__Id': 'Obj__Id', 'CA_Solo_mg': 'CA_Solo_mg', });
lyr_ptos_FA5_2021_nutri_8.set('fieldAliases', {'Campo': 'Campo', 'Conjunto_d': 'Conjunto_d', 'Produto': 'Produto', 'Obj__Id': 'Obj__Id', 'ID_Amostra': 'ID_Amostra', 'Nome': 'Nome', 'Solo_ENR_t': 'Solo_ENR_t', 'P1_Solo_mg': 'P1_Solo_mg', 'K_Solo_mg_': 'K_Solo_mg_', 'Solo_MG_mg': 'Solo_MG_mg', 'CA_Solo_mg': 'CA_Solo_mg', 'pH_Solo__1': 'pH_Solo__1', 'CEC_Solo_m': 'CEC_Solo_m', 'Solo__K___': 'Solo__K___', 'Solo__MG__': 'Solo__MG__', 'Solo__H___': 'Solo__H___', 'Solo__NA__': 'Solo__NA__', 'S_Solo_mg_': 'S_Solo_mg_', 'Solo_CL_AL': 'Solo_CL_AL', 'Solo_MO_mg': 'Solo_MO_mg', 'Rec_cal_to': 'Rec_cal_to', 'Gispita_re': 'Gispita_re', 'Enxofre_re': 'Enxofre_re', 'Rec_N_tonn': 'Rec_N_tonn', 'Rec_P2O5_t': 'Rec_P2O5_t', 'Rec_K2O_to': 'Rec_K2O_to', 'Rec_MG_ton': 'Rec_MG_ton', 'Rec_S_tonn': 'Rec_S_tonn', 'Rec_Zn_ton': 'Rec_Zn_ton', 'Rec_Mn_ton': 'Rec_Mn_ton', 'Rec_FE_ton': 'Rec_FE_ton', 'Rec_CU_ton': 'Rec_CU_ton', 'Rec_B_tonn': 'Rec_B_tonn', 'V___': 'V___', });
lyr_V_1.set('fieldImages', {'Obj__Id': 'TextEdit', 'V___': 'TextEdit', });
lyr_P_2.set('fieldImages', {'Obj__Id': 'TextEdit', 'P1_Solo_mg': 'TextEdit', });
lyr_MO_3.set('fieldImages', {'Obj__Id': 'TextEdit', 'Solo_MO_mg': 'TextEdit', });
lyr_CTC_4.set('fieldImages', {'Obj__Id': 'TextEdit', 'CEC_Solo_m': 'TextEdit', });
lyr_K_5.set('fieldImages', {'Obj__Id': 'TextEdit', 'K_Solo_mg_': 'TextEdit', });
lyr_Mg_6.set('fieldImages', {'Obj__Id': 'TextEdit', 'Solo_MG_mg': 'TextEdit', });
lyr_Ca_7.set('fieldImages', {'Obj__Id': 'TextEdit', 'CA_Solo_mg': 'TextEdit', });
lyr_ptos_FA5_2021_nutri_8.set('fieldImages', {'Campo': 'TextEdit', 'Conjunto_d': 'TextEdit', 'Produto': 'TextEdit', 'Obj__Id': 'TextEdit', 'ID_Amostra': 'TextEdit', 'Nome': 'TextEdit', 'Solo_ENR_t': 'TextEdit', 'P1_Solo_mg': 'TextEdit', 'K_Solo_mg_': 'TextEdit', 'Solo_MG_mg': 'TextEdit', 'CA_Solo_mg': 'TextEdit', 'pH_Solo__1': 'TextEdit', 'CEC_Solo_m': 'TextEdit', 'Solo__K___': 'TextEdit', 'Solo__MG__': 'TextEdit', 'Solo__H___': 'TextEdit', 'Solo__NA__': 'TextEdit', 'S_Solo_mg_': 'TextEdit', 'Solo_CL_AL': 'TextEdit', 'Solo_MO_mg': 'TextEdit', 'Rec_cal_to': 'TextEdit', 'Gispita_re': 'TextEdit', 'Enxofre_re': 'TextEdit', 'Rec_N_tonn': 'TextEdit', 'Rec_P2O5_t': 'TextEdit', 'Rec_K2O_to': 'TextEdit', 'Rec_MG_ton': 'TextEdit', 'Rec_S_tonn': 'TextEdit', 'Rec_Zn_ton': 'TextEdit', 'Rec_Mn_ton': 'TextEdit', 'Rec_FE_ton': 'TextEdit', 'Rec_CU_ton': 'TextEdit', 'Rec_B_tonn': 'TextEdit', 'V___': 'TextEdit', });
lyr_V_1.set('fieldLabels', {'Obj__Id': 'no label', 'V___': 'no label', });
lyr_P_2.set('fieldLabels', {'Obj__Id': 'no label', 'P1_Solo_mg': 'no label', });
lyr_MO_3.set('fieldLabels', {'Obj__Id': 'no label', 'Solo_MO_mg': 'no label', });
lyr_CTC_4.set('fieldLabels', {'Obj__Id': 'no label', 'CEC_Solo_m': 'no label', });
lyr_K_5.set('fieldLabels', {'Obj__Id': 'no label', 'K_Solo_mg_': 'no label', });
lyr_Mg_6.set('fieldLabels', {'Obj__Id': 'no label', 'Solo_MG_mg': 'no label', });
lyr_Ca_7.set('fieldLabels', {'Obj__Id': 'no label', 'CA_Solo_mg': 'no label', });
lyr_ptos_FA5_2021_nutri_8.set('fieldLabels', {'Campo': 'no label', 'Conjunto_d': 'no label', 'Produto': 'no label', 'Obj__Id': 'no label', 'ID_Amostra': 'no label', 'Nome': 'no label', 'Solo_ENR_t': 'no label', 'P1_Solo_mg': 'no label', 'K_Solo_mg_': 'no label', 'Solo_MG_mg': 'no label', 'CA_Solo_mg': 'no label', 'pH_Solo__1': 'no label', 'CEC_Solo_m': 'no label', 'Solo__K___': 'no label', 'Solo__MG__': 'no label', 'Solo__H___': 'no label', 'Solo__NA__': 'no label', 'S_Solo_mg_': 'no label', 'Solo_CL_AL': 'no label', 'Solo_MO_mg': 'no label', 'Rec_cal_to': 'no label', 'Gispita_re': 'no label', 'Enxofre_re': 'no label', 'Rec_N_tonn': 'no label', 'Rec_P2O5_t': 'no label', 'Rec_K2O_to': 'no label', 'Rec_MG_ton': 'no label', 'Rec_S_tonn': 'no label', 'Rec_Zn_ton': 'no label', 'Rec_Mn_ton': 'no label', 'Rec_FE_ton': 'no label', 'Rec_CU_ton': 'no label', 'Rec_B_tonn': 'no label', 'V___': 'no label', });
lyr_ptos_FA5_2021_nutri_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});