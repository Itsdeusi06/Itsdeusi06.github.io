// Funció per generar automàticament les dades de cada pack
function generatePackData(packName, weapons, numVariants, videoData = {}, imageData = {}) {
    return {
        weapons: weapons.map(weapon => {
            const variants = [];

            for (let i = 1; i <= numVariants; i++) {
                const videoUrl = videoData[weapon]?.[`variant${i}`] || "";
                const imageUrl = imageData[weapon]?.[`variant${i}`] || "";
                variants.push({
                    thumb: imageUrl,
                    video: videoUrl
                });
            }

            return {
                name: `${packName} ${capitalize(weapon)}`,
                img: imageData[weapon]?.base || "", // imagen principal
                variants: variants,
                video: videoData[weapon]?.base || "" // video base
            };
        })
    };
}




// Capitalitza el nom de l'arma per mostrar-ho bonic
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

//IMG
const arcaneImg = {
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/CABEE19E-42BC-E04B-7AE5-0EB88802AAF3.png"
    },
    vandal: {
        base :"https://c-valorant-api.op.gg/Assets/WeaponSkins/E9B5E915-4113-92F6-2EC2-FEBDF2763F5A.png"
    }
};

const kuronamiImg = {
    vandal: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3637A0BE-4785-8841-9893-1198325185F2.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/9DD03547-4CD7-3B80-3D10-BEAEBD36D6E7.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B0113D7E-4417-0264-B5F5-949A8379BB21.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B899AFBC-47FC-78BF-D30B-20863C1C89F0.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/31A9B6A5-4C0B-F7BC-F2A6-A8B5EEFFB898.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B1CF6BD9-4622-61D0-7F14-009B1C56C558.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/C27DD9A0-4598-F48F-700E-8DB0B1658CA9.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/5571158E-4C2F-FABC-AB83-FB9AE34896B6.png"
    },
    spectre: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/D5C3EB89-4674-7758-EA58-F99CDCEE4CDF.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/40F77C7F-425E-7176-22DE-DB88BAB9E85B.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/624EE141-4154-F406-2604-F5ABBBED2887.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2BA8EF3D-42FC-BA42-8359-13810C96E4F9.png"
    },
    sheriff: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/8EE58B76-435A-8DCC-216A-059F1B7F828C.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/979EA876-471D-CF75-779C-9DA04F902793.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2BAD99E6-4984-BFC9-5B12-76A01735223E.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/38A4455F-443E-E463-814D-B4BD2A5B954F.png"
    },
    marshal: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/ACE6BA33-47B6-8D06-DF03-2CA380D78F70.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/51FB7C61-4D29-577A-2334-319DEF7EDB97.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3DC9486B-4785-5393-C9B7-5FB3F9A7312C.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/6F70C0FC-4554-935C-B2BD-85A1E094D9B7.png"
    }
};

const divergenceImg = {
    judge: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/DA7801C2-4655-9261-B6CA-1FBC3AF570D3.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/244303DA-4B46-7C17-F8DD-2DB15945540E.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/FE27915D-4E66-1961-932A-31B307ED6001.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3336B57F-44E3-EBDB-15A9-E6BFFA763516.png"
    },
    classic: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/C3FECD19-4484-6C32-7255-9C89FDCDE00D.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/8525416D-4031-A121-A97F-8BA4E0E2582A.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A13EE09E-4793-F494-98DE-20988973E228.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/DD810AB1-4118-328A-32FA-D0A77BE7EC24.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/5183570C-4C8D-7B5D-00C3-A0AE04518DA6.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/E02B17FB-4404-68AB-E467-21A5B72B6797.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A58A2C61-4F05-B202-F911-1AB206723436.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/6CB508FC-4E49-3C74-E294-3FB27AF6557F.png"
    },
    vandal: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/EEACE112-4611-DB5C-D784-D9BD0797FF3C.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B8A2C73C-4C28-958F-9E01-51B6637AB566.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/57954D38-4399-5520-2365-26A6E6FA8F12.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/F989BD12-44BA-9F42-439B-949C68060569.png"
    },
    operator: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2332CD93-4833-B942-381C-8085E0D8C0A3.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/9E40596F-4C83-E36A-510A-33A3EDCE3D08.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/440CA6F3-4378-242F-E699-D28592C5F5C7.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/E2A9699F-41B2-2078-8646-BA952445D157.png"
    }
};

const glitchpopImg = {
    frenzy: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/DE8EA7BB-4006-906D-D1C7-25AE5CCB8B48.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3B04C752-4564-E7C4-CDF6-7F9C741E3587.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/AB6E58B2-49A3-E0E8-1240-DF94230393D5.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B923BCC8-4CB8-2A19-070E-588686AAE090.png"
    },
    bulldog: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/F7DD47C7-467B-36F1-0D13-BEB53372B666.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/E4AFD93D-43F4-948C-7E6A-F88B1549409B.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/0D00F717-409F-ABB7-B5E1-9CBD3DCD2752.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/293D9DDB-41EF-387F-3D71-908384B6AD87.png"
    },
    judge: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/5966C88B-4662-BE62-5AE6-50BC036700B5.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2ABE2D6A-4D38-434A-FF64-608B936C2661.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/1E959CBE-4649-A049-F789-B2B9C9D7EC26.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BB88381F-423F-CD76-9AC1-7E9FE541CF25.png"
    },
    odin: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/9667983E-4C8C-E5B2-68D7-BE84F9B3D46C.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/0B30B3E8-4696-7B7C-FED2-50B34234965A.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/54CAEB7F-4FC4-6ADB-45A6-CFB6202D9C24.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BBA7F46F-41EE-9E6C-C37A-DCA8EE4BF50E.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/DED15275-482E-E9DA-0002-1B9D495D2E98.png"
    },
    classic: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BB1E1703-4EA1-9BE5-C145-4480A6B9F0D7.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/93B03058-467E-6D13-5554-4A88880430C7.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BE6C975E-42D4-17CB-5591-DC8E11B4DE05.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/4D83874B-4385-A927-222C-3097CB330824.png"
    },
    phantom: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/7DD3F7D8-455B-BC3A-94B8-AF9FBA0BEBED.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/FF938463-444C-9BDC-38FA-3C98E865AB31.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/710FF5E9-48FD-5890-B061-9689F54FE848.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BA802A0B-4038-4208-89C7-58828408EBED.png"
    },
    vandal: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B58F249B-4E8F-5532-6F35-A9B3B39DC15C.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/05DC58F4-4170-C088-BA23-FD9A2DDCFA9D.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/16E8A438-4761-1887-3792-7BAB966A7483.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/D9C26F8E-496A-16C1-36E1-CFB81FB22D5F.png"
    },
    operator: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/1D4E551A-41B8-D763-3036-D3991892F35F.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/671F5E30-42AC-20DD-62E2-7BA22F1D20EC.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/076B77C1-493D-EF86-2902-C4AC2A64DAC2.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/68B30D4E-4743-F1BD-B90F-FBAA6005A215.png"
    }
};

  
//videos
const arcaneVideos = {
    vandal: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/558feebc-4881-6bb5-dbe6-baa7aa80ac8d_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/b1c0b1da-4b55-1b3c-a9cb-16b2d10e7ca9_default_universal.mp4"
    }
};

const kuronamiVideos = {
    vandal: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f31888a6-470e-5d91-eff2-5ba6cd4ea087_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f478ae7c-427d-bf16-9b2f-268b209abefe_default_universal.mp4"
    },
    spectre: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/af7aacea-4d96-51bb-ebb2-f2b1f359401b_default_universal.mp4"
    },
    sheriff: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/628d02f0-4763-f56c-3683-538918b9e239_default_universal.mp4"
    },
    marshal: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f98b9f90-4ed1-3bd3-0cda-bdb507df57e4_default_universal.mp4"
    }
};
const divergenceVideos = {
    classic: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed9ffd8-4db4-4fc7-a69d-31b6e92b814f_default_universal.mp4"
    },
    judge: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/13883b1b-496a-7533-0cba-4cbc5ab5c30b_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/d472b5ee-4dcb-3d5a-1be7-d2ae00429e0b_default_universal.mp4"
    },
    operator: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a26714ea-4aac-fce4-7e5e-6bae38364510_default_universal.mp4"
    },
    vandal: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a646230c-4fbc-3014-0e35-e49d40b2f660_default_universal.mp4"
    }
};
const glitchpopVideos = {
    frenzy: {
        base:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7682f614-106b-4ec7-a91f-809b7d7d4b9e_default_universal.mp4",
        variant1:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7682f614-106b-4ec7-a91f-809b7d7d4b9e_default_universal.mp4",
        variant2:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7682f614-106b-4ec7-a91f-809b7d7d4b9e_default_universal.mp4",
        variant3:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7682f614-106b-4ec7-a91f-809b7d7d4b9e_default_universal.mp4"
    },
    bulldog: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/0f7a9f4a-4782-4783-8d7e-7da7c56384d4_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/0f7a9f4a-4782-4783-8d7e-7da7c56384d4_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/0f7a9f4a-4782-4783-8d7e-7da7c56384d4_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/0f7a9f4a-4782-4783-8d7e-7da7c56384d4_default_universal.mp4"
    },
    judge: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f25b9887-7c7b-448b-9257-4479ca964656_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f25b9887-7c7b-448b-9257-4479ca964656_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f25b9887-7c7b-448b-9257-4479ca964656_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/f25b9887-7c7b-448b-9257-4479ca964656_default_universal.mp4"
    },
    odin: {
        base:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/1f8a6fe7-06a4-4cf4-8d1a-e4db58a0f700_default_universal.mp4",
        variant1:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/1f8a6fe7-06a4-4cf4-8d1a-e4db58a0f700_default_universal.mp4",
        variant2:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/1f8a6fe7-06a4-4cf4-8d1a-e4db58a0f700_default_universal.mp4",
        variant3:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/1f8a6fe7-06a4-4cf4-8d1a-e4db58a0f700_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/c1091b0b-48e6-c851-8b5b-728f535082d5_default_universal.mp4"
    },
    classic: {
        base:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/ceee9967-48aa-727b-ec9b-2ab9a6bd3404_default_universal.mp4",
        variant1:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/ceee9967-48aa-727b-ec9b-2ab9a6bd3404_default_universal.mp4",
        variant2:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/ceee9967-48aa-727b-ec9b-2ab9a6bd3404_default_universal.mp4",
        variant3:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/ceee9967-48aa-727b-ec9b-2ab9a6bd3404_default_universal.mp4"
    },
    phantom: {
        base:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7773171d-4c54-99bf-70e5-b5b8921d3f9a_default_universal.mp4",
        variant1:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7773171d-4c54-99bf-70e5-b5b8921d3f9a_default_universal.mp4",
        variant2:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7773171d-4c54-99bf-70e5-b5b8921d3f9a_default_universal.mp4",
        variant3:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/7773171d-4c54-99bf-70e5-b5b8921d3f9a_default_universal.mp4"
    },
    vandal: {
        base:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/50d495f7-4b39-e737-cd70-448a7316fbfc_default_universal.mp4",
        variant1:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/50d495f7-4b39-e737-cd70-448a7316fbfc_default_universal.mp4",
        variant2:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/50d495f7-4b39-e737-cd70-448a7316fbfc_default_universal.mp4",
        variant3:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/50d495f7-4b39-e737-cd70-448a7316fbfc_default_universal.mp4"
    },
    operator: {
        base:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed7b85c-4783-5891-2967-1e96f3b83a60_default_universal.mp4",
        variant1:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed7b85c-4783-5891-2967-1e96f3b83a60_default_universal.mp4",
        variant2:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed7b85c-4783-5891-2967-1e96f3b83a60_default_universal.mp4",
        variant3:"https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bed7b85c-4783-5891-2967-1e96f3b83a60_default_universal.mp4"
    }
};
// Dades automàtiques de cada pack (afegeix més aquí si vols)
const packsData = {
    Arcane: generatePackData("Arcane", Object.keys(arcaneImg), 0, arcaneVideos, arcaneImg),
    Divergence: generatePackData("Divergence", Object.keys(divergenceImg), 3, divergenceVideos, divergenceImg),
    Kuronami: generatePackData("Kuronami", Object.keys(kuronamiImg), 3, kuronamiVideos, kuronamiImg),
    Glitchpop: generatePackData("Glitchpop", Object.keys(glitchpopImg), 3, glitchpopVideos, glitchpopImg),
    // Afegeix més packs aquí si cal
};


// Mostra els detalls d’un pack seleccionat
function showPackDetail(packName) {
    const pack = packsData[packName];
    if (!pack) return;

    document.getElementById('packTitle').textContent = packName;
    const weaponsGallery = document.querySelector('.weapons-gallery');
    const variantGallery = document.querySelector('.variant-gallery');
    weaponsGallery.innerHTML = '';
    variantGallery.innerHTML = '';

    pack.weapons.forEach(weapon => {
        const img = document.createElement('img');
        img.src = weapon.img;
        img.alt = weapon.name;
        img.style.width = '150px';
        img.style.margin = '10px';
        img.style.cursor = 'pointer';
        img.onclick = () => {
            showVariants(weapon.variants);
            showWeaponInfo(weapon.name, packName);
        
            // ✅ Mostrar video base
            if (weapon.video) {
                showWeaponPreview(weapon.video);
            }
        };        
        weaponsGallery.appendChild(img);
    });

    document.getElementById('packDetail').style.display = 'block';
}

// Mostra les variants quan es clica una arma
function showVariants(variants) {
    const variantGallery = document.querySelector('.variant-gallery');
    variantGallery.innerHTML = '';

    variants.forEach(variant => {
        const img = document.createElement('img');
        img.src = variant.thumb;
        img.alt = 'Variante';
        img.style.cursor = 'pointer';
        img.onclick = () => showWeaponPreview(variant.video);
        variantGallery.appendChild(img);
    });
}


function showWeaponPreview(videoUrl) {
    const preview = document.getElementById('weaponPreview');
    preview.innerHTML = `
        <video autoplay loop muted playsinline style="width: 100%; height: 100%; border-radius: 10px; object-fit: contain;">
            <source src="${videoUrl}" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
    `;
}


function showWeaponInfo(weaponName, packName) {
    document.getElementById('weaponInfoTitle').textContent = weaponName;
    document.getElementById('weaponInfoDetails').innerHTML = `
        <p>Pack: ${packName}</p>
        <p>Precio: ${getWeaponPrice(weaponName)} VP</p>
        <p>Rareza: Exclusiva</p>
    `;
}

// Simula precios por ejemplo
function getWeaponPrice(name) {
    if (name.toLowerCase().includes('knife')) return 4350;
    return 2175;
}


// Clica en el thumbnail d’un pack per carregar-lo
document.addEventListener('DOMContentLoaded', () => {
    const row = document.getElementById('thumbnailRow');
    Object.keys(packsData).forEach((packName, index) => {
        const container = document.createElement('div');
        container.className = 'thumbnail-container';

        const img = document.createElement('img');
        img.className = 'demo w3-opacity w3-hover-opacity-off';
        img.src = `../SkinsContent/${packName}/${packName}.png`;
        img.onclick = () => currentDiv(index + 1); // només si uses la funció de slides
        container.appendChild(img);

        const caption = document.createElement('p');
        caption.className = 'caption';
        caption.textContent = packName;
        container.appendChild(caption);

        container.addEventListener('click', () => {
            showPackDetail(packName);
        });

        row.appendChild(container);
    });
});
