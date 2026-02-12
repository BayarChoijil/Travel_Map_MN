var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Borderstation_3 = new ol.format.GeoJSON();
var features_Borderstation_3 = format_Borderstation_3.readFeatures(json_Borderstation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Borderstation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borderstation_3.addFeatures(features_Borderstation_3);
var lyr_Borderstation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Borderstation_3, 
                style: style_Borderstation_3,
                popuplayertitle: 'Border station',
                interactive: true,
                title: '<img src="styles/legend/Borderstation_3.png" /> Border station'
            });
var format_Trainstation_4 = new ol.format.GeoJSON();
var features_Trainstation_4 = format_Trainstation_4.readFeatures(json_Trainstation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trainstation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trainstation_4.addFeatures(features_Trainstation_4);
var lyr_Trainstation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trainstation_4, 
                style: style_Trainstation_4,
                popuplayertitle: 'Train station',
                interactive: true,
                title: '<img src="styles/legend/Trainstation_4.png" /> Train station'
            });
var format_Airport_5 = new ol.format.GeoJSON();
var features_Airport_5 = format_Airport_5.readFeatures(json_Airport_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_5.addFeatures(features_Airport_5);
var lyr_Airport_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_5, 
                style: style_Airport_5,
                popuplayertitle: 'Airport',
                interactive: true,
                title: '<img src="styles/legend/Airport_5.png" /> Airport'
            });
var format_Roadsidecanteen_6 = new ol.format.GeoJSON();
var features_Roadsidecanteen_6 = format_Roadsidecanteen_6.readFeatures(json_Roadsidecanteen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadsidecanteen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadsidecanteen_6.addFeatures(features_Roadsidecanteen_6);
var lyr_Roadsidecanteen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadsidecanteen_6, 
                style: style_Roadsidecanteen_6,
                popuplayertitle: 'Roadside canteen',
                interactive: true,
                title: '<img src="styles/legend/Roadsidecanteen_6.png" /> Roadside canteen'
            });
var format_Childrencamp_7 = new ol.format.GeoJSON();
var features_Childrencamp_7 = format_Childrencamp_7.readFeatures(json_Childrencamp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Childrencamp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Childrencamp_7.addFeatures(features_Childrencamp_7);
var lyr_Childrencamp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Childrencamp_7, 
                style: style_Childrencamp_7,
                popuplayertitle: 'Children\'camp',
                interactive: true,
                title: '<img src="styles/legend/Childrencamp_7.png" /> Children\'camp'
            });
var format_Milktreatment_8 = new ol.format.GeoJSON();
var features_Milktreatment_8 = format_Milktreatment_8.readFeatures(json_Milktreatment_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Milktreatment_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Milktreatment_8.addFeatures(features_Milktreatment_8);
var lyr_Milktreatment_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Milktreatment_8, 
                style: style_Milktreatment_8,
                popuplayertitle: 'Milk treatment',
                interactive: true,
                title: '<img src="styles/legend/Milktreatment_8.png" /> Milk treatment'
            });
var format_Spa_9 = new ol.format.GeoJSON();
var features_Spa_9 = format_Spa_9.readFeatures(json_Spa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spa_9.addFeatures(features_Spa_9);
var lyr_Spa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spa_9, 
                style: style_Spa_9,
                popuplayertitle: 'Spa',
                interactive: true,
                title: '<img src="styles/legend/Spa_9.png" /> Spa'
            });
var format_Touristcamp_10 = new ol.format.GeoJSON();
var features_Touristcamp_10 = format_Touristcamp_10.readFeatures(json_Touristcamp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Touristcamp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Touristcamp_10.addFeatures(features_Touristcamp_10);
cluster_Touristcamp_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Touristcamp_10
});
var lyr_Touristcamp_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Touristcamp_10, 
                style: style_Touristcamp_10,
                popuplayertitle: 'Tourist camp',
                interactive: true,
                title: '<img src="styles/legend/Touristcamp_10.png" /> Tourist camp'
            });
var format_Resort_11 = new ol.format.GeoJSON();
var features_Resort_11 = format_Resort_11.readFeatures(json_Resort_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resort_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resort_11.addFeatures(features_Resort_11);
var lyr_Resort_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resort_11, 
                style: style_Resort_11,
                popuplayertitle: 'Resort',
                interactive: true,
                title: '<img src="styles/legend/Resort_11.png" /> Resort'
            });
var format_All_12 = new ol.format.GeoJSON();
var features_All_12 = format_All_12.readFeatures(json_All_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_12.addFeatures(features_All_12);
var lyr_All_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_12, 
                style: style_All_12,
                popuplayertitle: 'All',
                interactive: false,
                title: '<img src="styles/legend/All_12.png" /> All'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Borderstation_3.setVisible(true);lyr_Trainstation_4.setVisible(true);lyr_Airport_5.setVisible(true);lyr_Roadsidecanteen_6.setVisible(true);lyr_Childrencamp_7.setVisible(true);lyr_Milktreatment_8.setVisible(true);lyr_Spa_9.setVisible(true);lyr_Touristcamp_10.setVisible(true);lyr_Resort_11.setVisible(true);lyr_All_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleTerrainHybrid_1,lyr_GoogleSatelliteHybrid_2,lyr_Borderstation_3,lyr_Trainstation_4,lyr_Airport_5,lyr_Roadsidecanteen_6,lyr_Childrencamp_7,lyr_Milktreatment_8,lyr_Spa_9,lyr_Touristcamp_10,lyr_Resort_11,lyr_All_12];
lyr_Borderstation_3.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Trainstation_4.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Airport_5.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Roadsidecanteen_6.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Childrencamp_7.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Milktreatment_8.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Spa_9.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Touristcamp_10.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_Resort_11.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Цэгийн төрөл', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймаг', 'Sum_name': 'Сум', 'Lat': 'Өргөрөг', 'Long': 'Long', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб гэрэл зураг', });
lyr_All_12.set('fieldAliases', {'fid': 'fid', '№': '№', 'Point_type': 'Point_type', 'Category': 'Төрөл', 'Name': 'Нэр', 'Aimag_name': 'Аймгийн нэр', 'Sum_name': 'Сумын нэр', 'Lat': 'Өргөрөг', 'Long': 'Уртраг', 'Phone': 'Утас', 'Photo_URL': 'Гэрэл зургийн холбоос', 'Web_Photo': 'Вэб_Гэрэл зураг', 'layer': 'layer', 'path': 'path', });
lyr_Borderstation_3.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Trainstation_4.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Airport_5.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Roadsidecanteen_6.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Childrencamp_7.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Milktreatment_8.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Spa_9.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Touristcamp_10.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_Resort_11.set('fieldImages', {'fid': 'TextEdit', '№': 'Range', 'Point_type': 'Range', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', });
lyr_All_12.set('fieldImages', {'fid': 'TextEdit', '№': 'TextEdit', 'Point_type': 'TextEdit', 'Category': 'TextEdit', 'Name': 'TextEdit', 'Aimag_name': 'TextEdit', 'Sum_name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Phone': 'TextEdit', 'Photo_URL': 'TextEdit', 'Web_Photo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Borderstation_3.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Trainstation_4.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Airport_5.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Roadsidecanteen_6.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Childrencamp_7.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Milktreatment_8.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Spa_9.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Touristcamp_10.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_Resort_11.set('fieldLabels', {'fid': 'hidden field', '№': 'hidden field', 'Point_type': 'hidden field', 'Category': 'hidden field', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Phone': 'no label', 'Photo_URL': 'hidden field', 'Web_Photo': 'no label', });
lyr_All_12.set('fieldLabels', {'fid': 'no label', '№': 'no label', 'Point_type': 'no label', 'Category': 'no label', 'Name': 'no label', 'Aimag_name': 'no label', 'Sum_name': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Phone': 'no label', 'Photo_URL': 'no label', 'Web_Photo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_All_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});