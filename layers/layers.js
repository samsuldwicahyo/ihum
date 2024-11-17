ol.proj.proj4.register(proj4);
// ol.proj.get("EPSG:4326").setExtent([109.368108, -7.671409, 109.417978, -7.639804]);
var wms_layers = [];

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'opacity': 1.000000,
    'visible': false, // Membuat layer tidak terlihat (unchecked) secara default
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_2 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_2 = format_PEMUKIMAN_AR_25K_2.readFeatures(json_PEMUKIMAN_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_2.addFeatures(features_PEMUKIMAN_AR_25K_2);
var lyr_PEMUKIMAN_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_2, 
                style: style_PEMUKIMAN_AR_25K_2,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_2.png" /> PEMUKIMAN_AR_25K'
            });
var format_SUNGAI_AR_25K_3 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_3 = format_SUNGAI_AR_25K_3.readFeatures(json_SUNGAI_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_3.addFeatures(features_SUNGAI_AR_25K_3);
var lyr_SUNGAI_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_3, 
                style: style_SUNGAI_AR_25K_3,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_3.png" /> SUNGAI_AR_25K'
            });
var format_AGRISAWAH_AR_25K_4 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_4 = format_AGRISAWAH_AR_25K_4.readFeatures(json_AGRISAWAH_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AGRISAWAH_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_4.addFeatures(features_AGRISAWAH_AR_25K_4);
var lyr_AGRISAWAH_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_4, 
                style: style_AGRISAWAH_AR_25K_4,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_4.png" /> AGRISAWAH_AR_25K'
            });
var format_AGRIKEBUN_AR_25K_5 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_25K_5 = format_AGRIKEBUN_AR_25K_5.readFeatures(json_AGRIKEBUN_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AGRIKEBUN_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_25K_5.addFeatures(features_AGRIKEBUN_AR_25K_5);
var lyr_AGRIKEBUN_AR_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_25K_5, 
                style: style_AGRIKEBUN_AR_25K_5,
                popuplayertitle: "AGRIKEBUN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_25K_5.png" /> AGRIKEBUN_AR_25K'
            });
var format_NONAGRIALANG_AR_25K_6 = new ol.format.GeoJSON();
var features_NONAGRIALANG_AR_25K_6 = format_NONAGRIALANG_AR_25K_6.readFeatures(json_NONAGRIALANG_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NONAGRIALANG_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIALANG_AR_25K_6.addFeatures(features_NONAGRIALANG_AR_25K_6);
var lyr_NONAGRIALANG_AR_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIALANG_AR_25K_6, 
                style: style_NONAGRIALANG_AR_25K_6,
                popuplayertitle: "NONAGRIALANG_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIALANG_AR_25K_6.png" /> NONAGRIALANG_AR_25K'
            });
var format_ihum_poly_7 = new ol.format.GeoJSON();
var features_ihum_poly_7 = format_ihum_poly_7.readFeatures(json_ihum_poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ihum_poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ihum_poly_7.addFeatures(features_ihum_poly_7);
var lyr_ihum_poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ihum_poly_7, 
                style: style_ihum_poly_7,
                popuplayertitle: "ihum_poly",
                interactive: true,
                title: '<img src="styles/legend/ihum_poly_7.png" /> ihum_poly'
            });
var format_ihum_line_8 = new ol.format.GeoJSON();
var features_ihum_line_8 = format_ihum_line_8.readFeatures(json_ihum_line_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ihum_line_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ihum_line_8.addFeatures(features_ihum_line_8);
var lyr_ihum_line_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ihum_line_8, 
                style: style_ihum_line_8,
                popuplayertitle: "ihum_line",
                interactive: true,
                title: '<img src="styles/legend/ihum_line_8.png" /> ihum_line'
            });
var format_TOPONIMI_PT_25K_9 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_25K_9 = format_TOPONIMI_PT_25K_9.readFeatures(json_TOPONIMI_PT_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TOPONIMI_PT_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_25K_9.addFeatures(features_TOPONIMI_PT_25K_9);
var lyr_TOPONIMI_PT_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_25K_9, 
                style: style_TOPONIMI_PT_25K_9,
                popuplayertitle: "TOPONIMI_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_25K_9.png" /> TOPONIMI_PT_25K'
            });
var format_SUNGAI_LN_25K_10 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_10 = format_SUNGAI_LN_25K_10.readFeatures(json_SUNGAI_LN_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_10.addFeatures(features_SUNGAI_LN_25K_10);
var lyr_SUNGAI_LN_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_10, 
                style: style_SUNGAI_LN_25K_10,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_10.png" /> SUNGAI_LN_25K'
            });
var format_IRIGASI_LN_25K_11 = new ol.format.GeoJSON();
var features_IRIGASI_LN_25K_11 = format_IRIGASI_LN_25K_11.readFeatures(json_IRIGASI_LN_25K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IRIGASI_LN_25K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRIGASI_LN_25K_11.addFeatures(features_IRIGASI_LN_25K_11);
var lyr_IRIGASI_LN_25K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRIGASI_LN_25K_11, 
                style: style_IRIGASI_LN_25K_11,
                popuplayertitle: "IRIGASI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/IRIGASI_LN_25K_11.png" /> IRIGASI_LN_25K'
            });
var format_TAMBANGAN_PT_25K_12 = new ol.format.GeoJSON();
var features_TAMBANGAN_PT_25K_12 = format_TAMBANGAN_PT_25K_12.readFeatures(json_TAMBANGAN_PT_25K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TAMBANGAN_PT_25K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBANGAN_PT_25K_12.addFeatures(features_TAMBANGAN_PT_25K_12);
var lyr_TAMBANGAN_PT_25K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBANGAN_PT_25K_12, 
                style: style_TAMBANGAN_PT_25K_12,
                popuplayertitle: "TAMBANGAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TAMBANGAN_PT_25K_12.png" /> TAMBANGAN_PT_25K'
            });
var format_TONGGAKKM_PT_25K_13 = new ol.format.GeoJSON();
var features_TONGGAKKM_PT_25K_13 = format_TONGGAKKM_PT_25K_13.readFeatures(json_TONGGAKKM_PT_25K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TONGGAKKM_PT_25K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TONGGAKKM_PT_25K_13.addFeatures(features_TONGGAKKM_PT_25K_13);
var lyr_TONGGAKKM_PT_25K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TONGGAKKM_PT_25K_13, 
                style: style_TONGGAKKM_PT_25K_13,
                popuplayertitle: "TONGGAKKM_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TONGGAKKM_PT_25K_13.png" /> TONGGAKKM_PT_25K'
            });
var format_PEMERINTAHAN_PT_25K_14 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_14 = format_PEMERINTAHAN_PT_25K_14.readFeatures(json_PEMERINTAHAN_PT_25K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_25K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_14.addFeatures(features_PEMERINTAHAN_PT_25K_14);
var lyr_PEMERINTAHAN_PT_25K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_14, 
                style: style_PEMERINTAHAN_PT_25K_14,
                popuplayertitle: "PEMERINTAHAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_14.png" /> PEMERINTAHAN_PT_25K'
            });
var format_NIAGA_PT_25K_15 = new ol.format.GeoJSON();
var features_NIAGA_PT_25K_15 = format_NIAGA_PT_25K_15.readFeatures(json_NIAGA_PT_25K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NIAGA_PT_25K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAGA_PT_25K_15.addFeatures(features_NIAGA_PT_25K_15);
var lyr_NIAGA_PT_25K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIAGA_PT_25K_15, 
                style: style_NIAGA_PT_25K_15,
                popuplayertitle: "NIAGA_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/NIAGA_PT_25K_15.png" /> NIAGA_PT_25K'
            });
var format_SARANAIBADAH_PT_25K_16 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_16 = format_SARANAIBADAH_PT_25K_16.readFeatures(json_SARANAIBADAH_PT_25K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SARANAIBADAH_PT_25K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_16.addFeatures(features_SARANAIBADAH_PT_25K_16);
var lyr_SARANAIBADAH_PT_25K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_16, 
                style: style_SARANAIBADAH_PT_25K_16,
                popuplayertitle: "SARANAIBADAH_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_16.png" /> SARANAIBADAH_PT_25K'
            });
var format_BANGUNAN_PT_25K_17 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_25K_17 = format_BANGUNAN_PT_25K_17.readFeatures(json_BANGUNAN_PT_25K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANGUNAN_PT_25K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_25K_17.addFeatures(features_BANGUNAN_PT_25K_17);
var lyr_BANGUNAN_PT_25K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_25K_17, 
                style: style_BANGUNAN_PT_25K_17,
                popuplayertitle: "BANGUNAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_25K_17.png" /> BANGUNAN_PT_25K'
            });
var format_KESEHATAN_PT_25K_18 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_25K_18 = format_KESEHATAN_PT_25K_18.readFeatures(json_KESEHATAN_PT_25K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KESEHATAN_PT_25K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_PT_25K_18.addFeatures(features_KESEHATAN_PT_25K_18);
var lyr_KESEHATAN_PT_25K_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESEHATAN_PT_25K_18, 
                style: style_KESEHATAN_PT_25K_18,
                popuplayertitle: "KESEHATAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_PT_25K_18.png" /> KESEHATAN_PT_25K'
            });
var format_JEMBATAN_PT_25K_19 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_25K_19 = format_JEMBATAN_PT_25K_19.readFeatures(json_JEMBATAN_PT_25K_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JEMBATAN_PT_25K_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_25K_19.addFeatures(features_JEMBATAN_PT_25K_19);
var lyr_JEMBATAN_PT_25K_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_25K_19, 
                style: style_JEMBATAN_PT_25K_19,
                popuplayertitle: "JEMBATAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_25K_19.png" /> JEMBATAN_PT_25K'
            });
var format_PENDIDIKAN_PT_25K_20 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_20 = format_PENDIDIKAN_PT_25K_20.readFeatures(json_PENDIDIKAN_PT_25K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PENDIDIKAN_PT_25K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_20.addFeatures(features_PENDIDIKAN_PT_25K_20);
var lyr_PENDIDIKAN_PT_25K_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_20, 
                style: style_PENDIDIKAN_PT_25K_20,
                popuplayertitle: "PENDIDIKAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_20.png" /> PENDIDIKAN_PT_25K'
            });
var format_ADMINISTRASIDESA_AR_25Kcopy_21 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25Kcopy_21 = format_ADMINISTRASIDESA_AR_25Kcopy_21.readFeatures(json_ADMINISTRASIDESA_AR_25Kcopy_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25Kcopy_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25Kcopy_21.addFeatures(features_ADMINISTRASIDESA_AR_25Kcopy_21);
var lyr_ADMINISTRASIDESA_AR_25Kcopy_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25Kcopy_21, 
                style: style_ADMINISTRASIDESA_AR_25Kcopy_21,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K copy",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25Kcopy_21.png" /> ADMINISTRASIDESA_AR_25K copy'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_PEMUKIMAN_AR_25K_2.setVisible(true);lyr_SUNGAI_AR_25K_3.setVisible(true);lyr_AGRISAWAH_AR_25K_4.setVisible(true);lyr_AGRIKEBUN_AR_25K_5.setVisible(true);lyr_NONAGRIALANG_AR_25K_6.setVisible(true);lyr_ihum_poly_7.setVisible(true);lyr_ihum_line_8.setVisible(true);lyr_TOPONIMI_PT_25K_9.setVisible(true);lyr_SUNGAI_LN_25K_10.setVisible(true);lyr_IRIGASI_LN_25K_11.setVisible(true);lyr_TAMBANGAN_PT_25K_12.setVisible(true);lyr_TONGGAKKM_PT_25K_13.setVisible(true);lyr_PEMERINTAHAN_PT_25K_14.setVisible(true);lyr_NIAGA_PT_25K_15.setVisible(true);lyr_SARANAIBADAH_PT_25K_16.setVisible(true);lyr_BANGUNAN_PT_25K_17.setVisible(true);lyr_KESEHATAN_PT_25K_18.setVisible(true);lyr_JEMBATAN_PT_25K_19.setVisible(true);lyr_PENDIDIKAN_PT_25K_20.setVisible(true);lyr_ADMINISTRASIDESA_AR_25Kcopy_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_PEMUKIMAN_AR_25K_2,lyr_SUNGAI_AR_25K_3,lyr_AGRISAWAH_AR_25K_4,lyr_AGRIKEBUN_AR_25K_5,lyr_NONAGRIALANG_AR_25K_6,lyr_ihum_poly_7,lyr_ihum_line_8,lyr_TOPONIMI_PT_25K_9,lyr_SUNGAI_LN_25K_10,lyr_IRIGASI_LN_25K_11,lyr_TAMBANGAN_PT_25K_12,lyr_TONGGAKKM_PT_25K_13,lyr_PEMERINTAHAN_PT_25K_14,lyr_NIAGA_PT_25K_15,lyr_SARANAIBADAH_PT_25K_16,lyr_BANGUNAN_PT_25K_17,lyr_KESEHATAN_PT_25K_18,lyr_JEMBATAN_PT_25K_19,lyr_PENDIDIKAN_PT_25K_20,lyr_ADMINISTRASIDESA_AR_25Kcopy_21];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIALANG_AR_25K_6.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ihum_poly_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'power': 'power', 'addr_house': 'addr_house', 'width': 'width', 'military': 'military', 'covered': 'covered', 'building': 'building', 'isced_leve': 'isced_leve', 'operator': 'operator', 'healthcare': 'healthcare', 'natural': 'natural', 'access_roo': 'access_roo', 'health_f_1': 'health_f_1', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'backup_gen': 'backup_gen', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'government': 'government', 'operator_t': 'operator_t', 'rooms': 'rooms', 'status': 'status', 'pump': 'pump', 'historic': 'historic', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', 'fuel': 'fuel', });
lyr_ihum_line_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'width': 'width', 'covered': 'covered', 'building': 'building', 'operator': 'operator', 'natural': 'natural', 'waterway': 'waterway', 'oneway': 'oneway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'pump': 'pump', 'landuse': 'landuse', 'amenity': 'amenity', 'barrier': 'barrier', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', });
lyr_TOPONIMI_PT_25K_9.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_SUNGAI_LN_25K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_IRIGASI_LN_25K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TAMBANGAN_PT_25K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TONGGAKKM_PT_25K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMERINTAHAN_PT_25K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_NIAGA_PT_25K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_SARANAIBADAH_PT_25K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNAN_PT_25K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KESEHATAN_PT_25K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_JEMBATAN_PT_25K_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_25K_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_21.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_AR_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRIKEBUN_AR_25K_5.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRIALANG_AR_25K_6.set('fieldImages', {'AQDATE': 'DateTime', 'FCODE': 'TextEdit', 'KLSRMP': 'TextEdit', 'KODATC': 'TextEdit', 'NAMOBJ': 'TextEdit', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'JNSPDG': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ihum_poly_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'office': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'power': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'military': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'healthcare': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'health_f_1': 'TextEdit', 'religion': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'backup_gen': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'government': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'status': 'TextEdit', 'pump': 'TextEdit', 'historic': 'TextEdit', 'addr_stree': 'TextEdit', 'denominati': 'TextEdit', 'landuse': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', 'fuel': 'TextEdit', });
lyr_ihum_line_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'width': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'natural': 'TextEdit', 'waterway': 'TextEdit', 'oneway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'pump': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_TOPONIMI_PT_25K_9.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ALIAS': 'TextEdit', 'LOKTPN': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FTYPE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'KOORDY': 'TextEdit', 'KOORDX': 'TextEdit', 'KOORDINAT1': 'TextEdit', 'KORDINTAT2': 'TextEdit', 'LUAS': 'TextEdit', 'Elevasi': 'TextEdit', 'NAMLOK': 'TextEdit', 'NAMSPE': 'TextEdit', 'NAMMAP': 'TextEdit', 'NAMGAZ': 'TextEdit', 'SJHNAM': 'TextEdit', 'ARTINAM': 'TextEdit', 'ASLBHS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_SUNGAI_LN_25K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_IRIGASI_LN_25K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TAMBANGAN_PT_25K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_TONGGAKKM_PT_25K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_NIAGA_PT_25K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FGSKOD': 'TextEdit', 'JNSPSR': 'TextEdit', 'JNSTKO': 'TextEdit', 'JNSKTR': 'TextEdit', 'PRSTRP': 'TextEdit', });
lyr_SARANAIBADAH_PT_25K_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_BANGUNAN_PT_25K_17.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KESEHATAN_PT_25K_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_JEMBATAN_PT_25K_19.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'TextEdit', 'TGGJMB': 'TextEdit', 'LBRJMB': 'TextEdit', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'TextEdit', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'JBTJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_20.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_21.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIALANG_AR_25K_6.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ihum_poly_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'power': 'no label', 'addr_house': 'no label', 'width': 'no label', 'military': 'no label', 'covered': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'health_f_1': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'backup_gen': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'government': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'status': 'no label', 'pump': 'no label', 'historic': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', 'fuel': 'no label', });
lyr_ihum_line_8.set('fieldLabels', {'osm_id': 'inline label - always visible', 'osm_type': 'no label', 'layer': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'width': 'no label', 'covered': 'no label', 'building': 'no label', 'operator': 'no label', 'natural': 'no label', 'waterway': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'pump': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', });
lyr_TOPONIMI_PT_25K_9.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_SUNGAI_LN_25K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_IRIGASI_LN_25K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TAMBANGAN_PT_25K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TONGGAKKM_PT_25K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_25K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_NIAGA_PT_25K_15.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_SARANAIBADAH_PT_25K_16.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BANGUNAN_PT_25K_17.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KESEHATAN_PT_25K_18.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_JEMBATAN_PT_25K_19.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_25K_20.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_21.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});