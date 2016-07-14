// var str = '{"data":{"type":"gif","id":"YKsDwhPMhh9S0","url":"http:\/\/giphy.com\/gifs\/cartoon-loop-the-simpsons-YKsDwhPMhh9S0","image_original_url":"http:\/\/media1.giphy.com\/media\/YKsDwhPMhh9S0\/giphy.gif","image_url":"http:\/\/media1.giphy.com\/media\/YKsDwhPMhh9S0\/giphy.gif","image_mp4_url":"http:\/\/media2.giphy.com\/media\/YKsDwhPMhh9S0\/giphy.mp4","image_frames":"6","image_width":"500","image_height":"375","fixed_height_downsampled_url":"http:\/\/media1.giphy.com\/media\/YKsDwhPMhh9S0\/200_d.gif","fixed_height_downsampled_width":"267","fixed_height_downsampled_height":"200","fixed_width_downsampled_url":"http:\/\/media3.giphy.com\/media\/YKsDwhPMhh9S0\/200w_d.gif","fixed_width_downsampled_width":"200","fixed_width_downsampled_height":"150","fixed_height_small_url":"http:\/\/media2.giphy.com\/media\/YKsDwhPMhh9S0\/100.gif","fixed_height_small_still_url":"http:\/\/media2.giphy.com\/media\/YKsDwhPMhh9S0\/100_s.gif","fixed_height_small_width":"133","fixed_height_small_height":"100","fixed_width_small_url":"http:\/\/media2.giphy.com\/media\/YKsDwhPMhh9S0\/100w.gif","fixed_width_small_still_url":"http:\/\/media2.giphy.com\/media\/YKsDwhPMhh9S0\/100w_s.gif","fixed_width_small_width":"100","fixed_width_small_height":"75","username":"","caption":""},"meta":{"status":200,"msg":"OK"}}';
// //console.log(str);
//
// var giphy = JSON.parse(str);
// //console.log(giphy);
// //console.log(giphy.data.type);
// //console.log(giphy.data.image_url);
//
// var myGiphy = {
//   type: giphy.data.type,
//   image_url: giphy.data.image_url
// };
// //console.log(myGiphy);
// var myGiphyJson = JSON.stringify(myGiphy);
// console.log(myGiphyJson);

var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};
console.log(grungeAlbums);

var grungeAlbumsJSON = JSON.stringify(grungeAlbums);
console.log(grungeAlbumsJSON);

var grungeAlbumsBack = JSON.parse(grungeAlbumsJSON);
console.log(grungeAlbumsBack);

var count = Object.keys(grungeAlbumsBack).length;
console.log(count);
