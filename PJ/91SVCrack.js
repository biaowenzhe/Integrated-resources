/*
 *
 *
脚本功能：91短视频解锁会员&金币视频
软件版本：4.6.0
下载地址：https://shrtm.nu/91sv
脚本作者：Hausd0rff
更新时间：2021.11.14
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# 91短视频解锁会员&金币视频
^https?:\/\/.+\.(my10api|(.*91.*))\.\w{3,4}(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/biaowenzhe/Integrated-resources/main/PJ/91SVCrack.js

[mitm] 

hostname = interface.my91apiqc.com:8080
*
*
*/


var svip = "0EB44C7F3C20A63808D6C2237D6F1A5FC64F297AC0CC9B21C47DDD50141F29CFE507527D4A9D5C9EF1B42B827E6BC071A2C0520FF9E02AD53444906C8EB9AACC4B4E33097698AFEF99869DC436F431C065052E73132F8E18914911104B268FA21A697F8C5203E58C1D9FB8319A3893AAEE6B6318EDD9185DF8A34F22425F1CE4B86C33C7C989336446A73B5313482A8E47FB47100B62F7DAEAC28E5E0D7A77782979C88DF0020C147560BE7D9C65DF89F0C7AE6D65259C56E2F66D2D0F9147D667E2E65634008C298945329002520B58810FE42135EDDC77794A0DF98774FD9845BB880157BF03DFC8F89B8F9F9349EFFACF1B9651CF3D02BE4192224B4D2BD77B8AC1673A35CA2B74A5A0B260E7936F9028BD048C5E1175517C1BD07010E5ECE3CE306EC16F8C715CF47CEA9378AA915958911F835C3BDD3FC2F3F0884629F38614CF860FF0B4CA67D328220A8256A9F23B81728D2DEC1249E9AB3E747D2D56E49C7AE5778ED5EB6F92413969FE2122A89DECBF12053462488C0F3FCBFB1E5AE8BCA0C242B202DE36C4D37709B173AAB85413AC4A97FFCB0D168562B8E30D80CC61E211CA97FDD09E3173B8B3A881F74135EFE81353C4292D523BA1ADEA719DD8ED081CF90612E8BB9822053F3D4016D5D5FD2D427D3841240694BA397B714E186BD1BD924339F6FF4FFBEADEAA6ACBA87FEBFD436D50F8892E89D1226ECFBB6928DCB12B094004B26819039434E9FDAA98C178559A3BAD9AA1602D4F06A7FF7ABA0F2B0D505F13829047032583B484147C85EF074E144293AA1FDDCEAB59278E8B36975B9EE8397EDD3FA982DD4B4BE7FFC867950BB4AF9F3885EC74011B55287FF16AB5C4B72CEEC3A0C0F0B9D3C341705E8C9BD0EB65E2EAB04A358DF9122E1F2BCF66886D508DAEDC5FE4F1378B25ABFEE9CFE3A54883DCA09B5B2219A6B03B4F1895F4AD4DB496387DBC1C2251478EF46804E926B9CABDE76AFAF8AEBB8104F79B773000E3EDF6AC248BAAE2985C9F8D081FF5AF90FFF382B9097F2F8B2007C1DBEBFCDB116FD72F97EA41E27DE2695978857E89A9F719E5F8239273FFAA6274CCC54C328D520083822375BD1AFE27753A19118B4EAC2F31D09D9898C57761987B761EC38EFDE2C1D11C3C7AFEE615DB779268D6D88D0DFB77A082A6EBC22ACEF77163014C9AEBC787D0E9B4DA103911E06ED7A66422CAB78BA85EE23883786C1811EF2661424F41FA31C77F8F15661A56D198CBE910D76727B9DD013F2D840199A17B82997D9E0B7241085F8E6D0687A68A5B57457E0A0F425C2B222EEDA4ABDFD840A5EA62F98ECF71DACB1186C62A689D980D59D3336DDABC6C31127948A9D00A2967A85ED1F36C6A20562FB22DC6C93D5654C0425940DAD839F4CC465A908401B62785C51F22D91B8727915F66E8C440F337AF1CE01968B61CBA317690E21D3E879486F0A0BF71FA2F215BA3FC7A174B1ECA4B81CC86C79A201DA66931E35A67AB0D352B291E8CD63712705291E06345BC6986C3900991B788AECCAFCA020D6DA471666A335E56114FEB60C04E5ECD8C93BC42B410E89B2F7680D92317D8EBF941E4FEBC9A15670B8A86C3D3EA01DAD06C587D249E945915A9AAD3913D71EFDB52D0BB69C8B4BF1ED334391D335A3CEAD5A4ACD877337805C85A601DA14D801A5ECAABEF6C4E822B0546430BAA59D99761CCF52F67B83BF2C3284F7A3AE85CAB3D7B549108C08897BC038E11FD01D58221E5F750CC06C9FDD3D384DE717929DE46289A1AB4C048CC0EB1FEC88B9D5E87A162C17D4799D5B8F639C9F8BC5713F87BCCD5D08C8F23CBD3339EAE283490AB0D6DCBE1CDBB391A09EF2074E661C58D6C9045E54B53A37322C74B4D96649975A0D1C571282EFB57F0C2BBAFF9C08B6B4E1A0FA092151CB227B45781139286EBB1AED4F2A79D58FEAF888BC05DC629DE0A24531A4A2A401679913459619106AC63C957A9CA5405CAAD3A93EC3D291F4D6857D4D0EA51945A5FBB3FEBF289354A3038E259DA06D86EF1164F286B97BAFA5C53DCAC7EF067EBFD9A18AE5C21FA5FFD94D2810FD647A8630E98DCE699D2A5ECB6E0660C09D759059248063B8279257BD8B469BBE397497041EA56547E16E988A8055DEEB00122539E3FB938F9F2858E9FE4F47CAA261CF5FBDFE9EBEA89A1ADAC1239B02C983FDEAAA17F4B23FB4DF15B15708252DEABD08B4342324314DAB885750C13F4F6BF5A64550FFCA4CDF1ECD30736C878D742BC2ACCFF0E966706";
var gvip = "0EB44C7F3C20A63808D6C2237D6F1A5FC64F297AC0CC9B21C47DC74B11136E866D04F5037F64EF85423C7C300AB72B968784225FAC2B08AD73A071A18C94150180208C4CC780FDFF0E78B554D34B1296314F6035E84D6B985CF67BF7219C0B967DBC7F9D2B5BC1FDD12256E92598AD51099B7427E7E7FF01C4019D491632BD42818C83CCE578B6EDB58B5B1C2C6FF08464666AD7792D9FB8DBC1AA13A7EE0DEC13335318269ACD5F6E9A64E0FABC6B46FABD8DA6B5CC7CBAF471F0D042EF5F4C03086D0FDE2D941C3ACCA804B5938B14304A651821A96C1371F7224AE19B73865D7C85C2171D04B8BC4B3790424AC4FD4F91696EB22AC8413DC3B19EE2EC209EC618FC6F62FD7A035A526D397E52C8843D8DFC830CBC4EEEE2C357E55385B5FD94A06851CD5F3BD2BF95B3C1C908B29A2A898663E0A3505787598E78AF0AE41362520D5296224C86FB84D882B250EA880C43D48311797E396EC5D0A789B8BF46FFCFA22DCAF77A5504C0595B94E22BFD551C69092518C08E81C93C6C9E2C2DFCA2258F9A96A7EBA42B64325AB3816922C498140F4E10DB64678D7435D349814882A5F5E008AF861AE64DEB76F357DDAB34D01CE0692109E36F52DA2ACE8A38E3E2524D41865B7F4FC553577AFA705748FA900AC4E3402B9F2FCD1842FA2896AF8CCDFE8476B8141600ADB9A71F8A";
var objc = JSON.parse($response.body);

const sivp = /^[A-z0-9]{2406,3608}$/;
const givp = /^[A-z0-9]{806,1208}$/;

if (objc.data.match(sivp)) {
    objc.data = svip;
    $done({body : JSON.stringify(objc)});
} else {
    if (objc.data.match(givp)) {
        objc.data = gvip;
        $done({body : JSON.stringify(objc)});
    } else {
        $done({});
  }

}
