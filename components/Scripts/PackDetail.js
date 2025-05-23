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
const resImg = {
    ghost: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/04C7E366-4563-BE98-E870-66889E4F5DC4.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2D230B9A-4FA1-4FD7-6685-0EAA122D37F5.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B274C07D-45E7-F259-FC0A-EB9CAF72B66A.png"
    },
    bulldog: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/09787460-4968-BFE4-8AEA-1FB276A2F628.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/D771E642-4A9D-865F-3234-ADBE20F7C63B.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A340C055-4156-C90D-36AD-F982F78C7DC3.png"
    },
    phantom: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/4F04A759-4406-9AB7-18B4-0A9044ECDD60.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A9AA0B3B-4F6B-52EB-CE5C-4FAE5EB240AB.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/91E9BFBE-4DE0-03D1-D1EA-1D8FCEA4A7AB.png"
    },
    operator: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/F84ADD77-4DB2-4617-7575-5FBABD619B1A.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/FB880B98-4A7C-EDB7-E4F3-B18BAD59AC44.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/E80A6075-4999-8A05-E7FB-F0A4A3D14F6B.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/9EDFEC92-43C6-FD03-4456-64B816DB778C.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/7B3948F7-44CD-EF60-747C-D09C2BBB502F.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/868E42C3-4269-B75C-B249-AFA0DC8DEA15.png"
    }
};
const evoriImg = {
    ghost: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3785DD7B-4C1E-7C69-9837-BCA7C9756376.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/7D370CCE-4839-3CA5-8D95-4C9B350505E9.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/66ECFD17-4A13-FB91-AD12-2DA8908D8991.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/145ACE82-4E91-DF06-87F4-88A6D195B490.png"
    },
    spectre: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/AF0FDFEB-464E-C286-ED47-73AF602674FB.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/C56F5F5A-4E67-D2C0-87F0-E4A677A04025.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3C827524-4679-F9D3-CEF2-E6812A919886.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/0CCAB1FF-4092-4311-2538-5AA22B328FA4.png"
    },
    vandal: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/1BF0D77F-4E94-9DC0-7A7A-FB8430B569D3.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/70A24C3D-421A-A7B8-56F5-D7AF607EA006.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2984C2A8-40E1-69EB-36B2-BEA3C6F9B82D.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/5527958B-4F09-A20B-CBDA-8888EE29DD5C.png"
    },
    odin: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/6E1EF3FB-4197-87F8-ECFD-98809B0575EC.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/11F0B0ED-4152-3A57-78CB-71A5765ADB6F.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/F6581E76-4BE5-C878-04A9-688068B76DBB.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/85BF962D-43F7-BCEE-E2DC-1AA388186B4D.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BDA3227C-4B50-20EA-9552-72BDA27338EE.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/97AF8A67-4F62-F5C1-2FF8-CEB6D6F732A9.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BE008F47-45D0-2EEC-ABAF-7FA5CE4A8AE6.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/4B5FF95B-4A22-FB3D-7AFF-A881485DEB33.png"
    }
};
const protocolImg = {
    sheriff: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/DD1D4AD8-4672-2D69-6530-03BF7B308D58.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/107A7283-41B4-B06C-8514-0A99C6F11D50.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/2751A592-4E56-E9DC-020F-19A377851968.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/16A29E72-4DD3-E463-7E37-0E8A584E5721.png"
    },
    spectre: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/52C1070E-4635-44FC-D1D0-6DA60C93BEA1.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/5864760C-44BE-6AA4-C5A5-2FB742F45474.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/BCBDC71F-4FCB-5B64-16FB-82AA9618C3D9.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3927B569-44CE-FA5C-74B9-4CB8B2DA2572.png"
    },
    bulldog: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/77B09A8E-45C4-47E2-449F-44BD6F3A2F7A.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/44239053-4877-F129-9A52-2388E0F88989.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/9FC743EB-46C8-E382-39E4-23B5AC835EFC.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/57D458A2-4457-DAA3-C6AF-79BA6C9F6E5A.png"
    },
    phantom: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/89F9432F-4C8E-CEFE-73BD-26966C875647.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/15008EBB-478D-5D5C-A5B7-3181583161F4.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/4A8846E9-4051-2813-DB9F-7A8E274542A1.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/5822D67C-47A4-015B-AE91-EAB163D5E4F5.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/555D0161-4ED0-45A8-C829-FEA356BC8F96.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/B466B9EF-41D1-6597-B1B4-15B23A9A45C8.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/0D09DC9B-4B96-E357-E05B-F6B2AE3D857B.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/C1F3F20B-411F-8651-09D5-069069D92844.png"
    }
};
const enderFlameImg = {
    frenzy: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/EEE0C458-474A-B80F-871C-C188F3929A79.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/F40759FA-4A3A-3BB1-484E-4FABF878A774.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A0E8D567-4673-2F0C-7BB0-DEBB86D3F4EF.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/3F8B9999-4A92-DE0A-8A0A-4EBF04258950.png"
    },
    judge: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/72B9E3F7-427F-3D24-F618-11B0F28FEB89.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/87E27487-4705-8060-5D07-C6A6DC927F09.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/EDE643C7-4B83-0FD4-13D1-1C9DDB4D34CD.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/EC9CAA7A-43FF-8F04-52A7-27A46DE24F6E.png"
    },
    vandal: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/835AD8E3-4B0E-071B-CE38-00A05032AC43.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A9873BD5-41F9-170D-27F0-ABB68FEA0CE9.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/6FB459FA-4368-7D20-106A-629DB9825A2B.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/403F7D3E-4E96-6566-42F3-01B7A803D660.png"
    },
    operator: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/61583C81-4332-FF81-2EDE-2A8248863C80.png",
        variant1: "https://c-valorant-api.op.gg/Assets/WeaponSkins/A8B125E5-4E33-953D-D02C-37AD9E284B6A.png",
        variant2: "https://c-valorant-api.op.gg/Assets/WeaponSkins/37CCA29B-4468-A01E-E31B-8F8978A81EEF.png",
        variant3: "https://c-valorant-api.op.gg/Assets/WeaponSkins/296DCDDB-4FBF-8834-BC01-44ACAC66DC60.png"
    },
    knife: {
        base: "https://c-valorant-api.op.gg/Assets/WeaponSkins/D74171BF-4F3A-7DD7-76B9-04AFEAEB72C0.png"
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

const resVideo = {
    ghost: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/dfa1ca2d-40af-46b5-d543-d09ed77a8312_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/dfa1ca2d-40af-46b5-d543-d09ed77a8312_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/dfa1ca2d-40af-46b5-d543-d09ed77a8312_default_universal.mp4"
    },
    bulldog: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/88d6deff-44f9-a259-227a-78a5a2253103_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/88d6deff-44f9-a259-227a-78a5a2253103_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/88d6deff-44f9-a259-227a-78a5a2253103_default_universal.mp4"
    },
    phantom: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/424ab4c1-4745-5ccf-0848-2caf41e2c1c4_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/424ab4c1-4745-5ccf-0848-2caf41e2c1c4_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/424ab4c1-4745-5ccf-0848-2caf41e2c1c4_default_universal.mp4"
    },
    operator: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/4dd1db22-47cf-0c93-ecb5-7e8c2e331dbc_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/4dd1db22-47cf-0c93-ecb5-7e8c2e331dbc_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/4dd1db22-47cf-0c93-ecb5-7e8c2e331dbc_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/18b02317-42e8-ca20-3cdc-5fb7b837cf6c_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/18b02317-42e8-ca20-3cdc-5fb7b837cf6c_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/18b02317-42e8-ca20-3cdc-5fb7b837cf6c_default_universal.mp4"
    }
};
const evoriVideo= {
    ghost: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/155b1d2d-4a5f-94a9-7c2f-cd8aa72eb400_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/155b1d2d-4a5f-94a9-7c2f-cd8aa72eb400_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/155b1d2d-4a5f-94a9-7c2f-cd8aa72eb400_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/155b1d2d-4a5f-94a9-7c2f-cd8aa72eb400_default_universal.mp4"
    },
    spectre: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a4403c44-4690-8531-d2bf-a6862e83dc5b_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a4403c44-4690-8531-d2bf-a6862e83dc5b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a4403c44-4690-8531-d2bf-a6862e83dc5b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/a4403c44-4690-8531-d2bf-a6862e83dc5b_default_universal.mp4"
    },
    vandal: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/fc17448c-4352-a0aa-619a-ed86ee569d4b_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/fc17448c-4352-a0aa-619a-ed86ee569d4b_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/fc17448c-4352-a0aa-619a-ed86ee569d4b_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/fc17448c-4352-a0aa-619a-ed86ee569d4b_default_universal.mp4"
    },
    odin: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/faca3515-4365-003c-1355-679be0606088_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/faca3515-4365-003c-1355-679be0606088_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/faca3515-4365-003c-1355-679be0606088_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/faca3515-4365-003c-1355-679be0606088_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bbd2113e-4c6a-4620-b62f-0f937aeb059a_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bbd2113e-4c6a-4620-b62f-0f937aeb059a_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bbd2113e-4c6a-4620-b62f-0f937aeb059a_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bbd2113e-4c6a-4620-b62f-0f937aeb059a_default_universal.mp4"
    }
};

const protocolVideo = {
    sheriff: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/3a4f7fb8-47f5-3a75-220b-ed9281251a21_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/3a4f7fb8-47f5-3a75-220b-ed9281251a21_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/3a4f7fb8-47f5-3a75-220b-ed9281251a21_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/3a4f7fb8-47f5-3a75-220b-ed9281251a21_default_universal.mp4"
    },
    spectre: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/626c69ea-4d80-aa02-9573-06885eb07f4c_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/626c69ea-4d80-aa02-9573-06885eb07f4c_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/626c69ea-4d80-aa02-9573-06885eb07f4c_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/626c69ea-4d80-aa02-9573-06885eb07f4c_default_universal.mp4"
    },
    bulldog: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/e2b30f2f-4512-275a-b25c-6f92e40c2dc3_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/e2b30f2f-4512-275a-b25c-6f92e40c2dc3_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/e2b30f2f-4512-275a-b25c-6f92e40c2dc3_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/e2b30f2f-4512-275a-b25c-6f92e40c2dc3_default_universal.mp4"
    },
    phantom: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/607336dc-48ba-cc56-a012-f3b41b393db0_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/607336dc-48ba-cc56-a012-f3b41b393db0_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/607336dc-48ba-cc56-a012-f3b41b393db0_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/607336dc-48ba-cc56-a012-f3b41b393db0_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/332ef0f9-4197-708f-0415-fd8a0922cc7a_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/332ef0f9-4197-708f-0415-fd8a0922cc7a_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/332ef0f9-4197-708f-0415-fd8a0922cc7a_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/332ef0f9-4197-708f-0415-fd8a0922cc7a_default_universal.mp4"
    }
};
const enderFlameVideo = {
    frenzy: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bc78c474-4ce3-4cb6-a887-8d3da7694780_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bc78c474-4ce3-4cb6-a887-8d3da7694780_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bc78c474-4ce3-4cb6-a887-8d3da7694780_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/bc78c474-4ce3-4cb6-a887-8d3da7694780_default_universal.mp4"
    },
    judge: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/51da2dd8-00cb-43d2-b13b-b55ab4646d29_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/51da2dd8-00cb-43d2-b13b-b55ab4646d29_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/51da2dd8-00cb-43d2-b13b-b55ab4646d29_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/51da2dd8-00cb-43d2-b13b-b55ab4646d29_default_universal.mp4"
    },
    vandal: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/71127731-9ce5-4f7a-b9ae-dc55dfe7d9b4_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/71127731-9ce5-4f7a-b9ae-dc55dfe7d9b4_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/71127731-9ce5-4f7a-b9ae-dc55dfe7d9b4_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/71127731-9ce5-4f7a-b9ae-dc55dfe7d9b4_default_universal.mp4"
    },
    operator: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/9662e509-fba3-409d-b4c4-87b0c7279792_default_universal.mp4",
        variant1: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/9662e509-fba3-409d-b4c4-87b0c7279792_default_universal.mp4",
        variant2: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/9662e509-fba3-409d-b4c4-87b0c7279792_default_universal.mp4",
        variant3: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/9662e509-fba3-409d-b4c4-87b0c7279792_default_universal.mp4"
    },
    knife: {
        base: "https://valorant.dyn.riotcdn.net/x/videos/release-10.09/97510dc2-457c-4b55-8737-14646b3e05e9_default_universal.mp4",
    }
};
// Dades automàtiques de cada pack (afegeix més aquí si vols)
const packsData = {
    Arcane: generatePackData("Arcane", Object.keys(arcaneImg), 0, arcaneVideos, arcaneImg),
    Divergence: generatePackData("Divergence", Object.keys(divergenceImg), 3, divergenceVideos, divergenceImg),
    Kuronami: generatePackData("Kuronami", Object.keys(kuronamiImg), 3, kuronamiVideos, kuronamiImg),
    Glitchpop: generatePackData("Glitchpop", Object.keys(glitchpopImg), 3, glitchpopVideos, glitchpopImg),
    RES: generatePackData("RES", Object.keys(resImg), 2, resVideo, resImg),
    Evori: generatePackData("Evori", Object.keys(evoriImg), 3, evoriVideo, evoriImg),
    Protocol: generatePackData("Protocol", Object.keys(protocolImg), 3, protocolVideo, protocolImg),
    EnderFlame: generatePackData("EnderFlame", Object.keys(enderFlameImg), 3, enderFlameVideo, enderFlameImg),
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
        img.src = `../SkinsContent/${packName}.png`;
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
